<template>
  <div
    :id="data.id?.toString()"
    :class="
      data.pid === 0
        ? 'leave-message-item__container'
        : 'leave-message-item__container-reply'
    "
  >
    <div class="leave-message-item__userInfo">
      <div class="leave-message-item__userInfo-left">
        <i class="bi bi-person about__icon"></i>
      </div>
      <div class="leave-message-item__userInfo-right">
        <i
          ><span class="leave-message-item__name">{{ data.name }}</span>
          <span v-if="data.useridentity === 1" style="color: #ee6c5f">
            作者</span
          >
        </i>
        <span class="leave-message-item__time">{{ data.time }}</span>
      </div>
    </div>
    <div class="leave-message-item__text">
      <div
        :title="data.replycontent"
        class="leave-message-item__replyName"
        v-if="data.pid !== 0"
      >
        <i>
          @{{ data.replyname }}
          <span v-if="data.replyidentity === 1">作者</span>
        </i>
      </div>
      {{ data.content }}
    </div>
    <div class="leave-message-item__floor">
      <button
        class="leave-message-item__reply"
        @click="handleReply(data.id as number)"
      >
        回复
      </button>
    </div>
    <LeaveMessageSpeak
      v-if="speakId === data.id"
      :speakId="speakId"
      @handleCancel="handleReply(0)"
      @handleSumbit="addSpeak"
    />
  </div>
</template>
<script lang="ts" setup>
import LeaveMessageSpeak from "../LeaveMessageSpeak/index.vue";
import { FormType } from "../LeaveMessageSpeak/index.vue";
import type {
  LeaveMessageItemType,
  AddLeaveMessageItemType,
} from "../../../api/types";

const props = withDefaults(
  defineProps<{
    speakId: number;
    data: Partial<LeaveMessageItemType>;
  }>(),
  {
    speakId: 0,
    data: () => ({}),
  }
);
const emit = defineEmits<{
  (event: "handleReply", id: number): void;
  (event: "addSpeak", value: AddLeaveMessageItemType): void;
}>();
const handleReply = (id: number) => {
  emit("handleReply", id);
};
const addSpeak = (value: FormType) => {
  const data: AddLeaveMessageItemType = {
    pid: props.data.pid === 0 ? props.data.id! : props.data.pid!,
    name: value.username,
    time: value.time,
    email: value.email,
    content: value.content,
    replyid: props.data.userid!,
    replycontent: props.data.content!,
    articleid: 0,
    replyMessageId: props.data.id!
  };
  emit("addSpeak", data);
};
</script>
<style lang="less">
.leave-message-item {
  &__container {
    padding-top: 20px;
    &::after {
      content: "";
      display: flex;
      height: 1px;
      margin-top: 15px;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  &__container-reply {
    padding-top: 20px;
    padding-left: 50px;
    &::after {
      content: "";
      display: flex;
      height: 1px;
      margin-top: 25px;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  &__userInfo {
    display: flex;
  }
  &__userInfo-left {
    background-color: rgba(0, 0, 0, 0.2);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 20px;
    display: flex;
    align-items: center;
    i {
      font-size: 40px;
      margin-left: 0px;
      color: white;
    }
  }
  &__text {
    font-size: 14px;
    color: #34495e;
    padding-left: 60px;
  }
  &__name {
    color: #666666;
  }
  &__time {
    margin-left: 10px;
    font-size: 13px;
    color: #c4cfdb;
  }
  &__floor {
    margin-top: 10px;
    display: flex;
    justify-content: right;
  }
  &__replyName {
    display: inline-block;
    color: #ee6c5f;
    text-decoration: none;
  }
  &__reply {
    font-size: 12px;
    border: 0;
    background-color: #d9534f;
    color: white;
    font-weight: bold;
  }
}
</style>
