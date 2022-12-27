<template>
  <div>
    <div class="leave-message__container">
      <div
        class="leave-message__header"
        v-if="leaveMessageListComputed.length !== 0"
      >
        <i class="bi bi-chat-left-dots leave-message__icon"></i>博客留言
      </div>
      <div class="leave-message__content">
        <LeaveMessageItem
          v-for="leaveMessageItem in leaveMessageListComputed"
          :key="leaveMessageItem.id"
          :data="leaveMessageItem"
          :speakId="speakId"
          @handleReply="handleReply"
          @addSpeak="addReplySpeak"
        />
      </div>
      <LeaveMessageSpeak
        v-if="speakId === 0"
        ref="leaveMessageSpeak"
        :speakId="speakId"
        @handleSumbit="addSpeak"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import LeaveMessageItem from "./LeaveMessageItem/index.vue";
import LeaveMessageSpeak from "./LeaveMessageSpeak/index.vue";
import { FormType } from "./LeaveMessageSpeak/index.vue";
import { ref, Ref, computed, ComputedRef, onMounted } from "vue";
import { getLeavingMessage, addLeavingMessage } from "../../api/index";
import type {
  LeaveMessageItemType,
  AddLeaveMessageItemType,
} from "../../api/types";
import { useRoute } from "vue-router";
import { ElMessage } from "element-plus";
import "element-plus/es/components/message/style/css";

const leaveMessageSpeak = ref<InstanceType<typeof LeaveMessageSpeak> | null>(
  null
);
const route = useRoute();
const leaveMessageList = <Ref<Array<LeaveMessageItemType>>>ref([]);
const leaveMessageListComputed = <ComputedRef<Array<LeaveMessageItemType>>>(
  computed(() => {
    let data0: Array<LeaveMessageItemType> = [];
    const data1 = leaveMessageList.value.filter((item) => item.pid === 0);
    const data2 = leaveMessageList.value.filter((item) => item.pid !== 0);
    data1.forEach((item) => {
      data0.push(item);
      data0 = [...data0, ...data2.filter((item1) => item1.pid === item.id)];
    });
    return data0;
  })
);
const speakId = ref(0);

const handleReply = (id: number) => {
  speakId.value = id;
};

const addSpeak = (value: FormType) => {
  const data = {
    pid: 0,
    name: value.username,
    time: value.time,
    email: value.email,
    content: value.content,
    replyid: 0,
    replycontent: "",
    replyMessageId: 0,
    articleid: Number(route.params.id) || 0,
  };
  addAndgetLeavingMessage(data);
};
const addReplySpeak = (value: AddLeaveMessageItemType) => {
  value.articleid = Number(route.params.id) || 0;
  addAndgetLeavingMessage(value);
};
const addAndgetLeavingMessage = async (value: AddLeaveMessageItemType) => {
  const res = await addLeavingMessage(value);
  if (res.status === 1) {
    ElMessage({
      message: res.mag,
      type: "success",
    });
    speakId.value = 0;
    if (leaveMessageSpeak.value) {
      leaveMessageSpeak.value!.form.content = " ";
    }
  } else {
    ElMessage({
      message: res.mag,
      type: "error",
    });
  }
  await getLeaveMessageList();
};

const getLeaveMessageList = async () => {
  leaveMessageList.value = await getLeavingMessage({
    id: Number(route.params.id) || 0,
  });
};

onMounted(() => {
  getLeaveMessageList();
});
</script>

<style lang="less">
.leave-message {
  &__container {
    padding: 24px;
    background-color: white;
  }
  &__header {
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  &__item {
    padding-top: 20px;
    &::after {
      content: "";
      display: flex;
      height: 1px;
      margin-top: 25px;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  &__icon {
    margin-right: 5px;
  }
}
</style>
