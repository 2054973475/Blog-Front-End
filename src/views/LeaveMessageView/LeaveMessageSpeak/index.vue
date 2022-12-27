<template>
  <div class="leave-message-speak__container">
    <div class="leave-message-speak__header">
      <i class="bi bi-chat-left-dots leave-message-speak__icon"></i>我来留言
      <span
        v-show="speakId !== 0"
        class="leave-message-speak__cancel"
        @click="handleCancel"
        >取消</span
      >
    </div>
    <div class="leave-message-speak__content">
      <el-form :model="form" label-width="0px" :rules="rules" ref="ruleFormRef">
        <el-form-item prop="content">
          <el-input
            v-model="form.content"
            type="textarea"
            input-style="height:150px"
          />
        </el-form-item>
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="昵称">
            <template #prepend>
              <el-icon><UserFilled /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input v-model="form.email" placeholder="邮箱">
            <template #prepend> <i class="bi bi-mailbox2"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="handleSumbit(ruleFormRef)"
            style="width: 100%"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import dayjs from "dayjs";
import { ref, Ref, reactive, onMounted } from "vue";
import { UserFilled } from "@element-plus/icons-vue";
import type { FormInstance, FormRules } from "element-plus";

export type FormType = {
  content: string;
  username: string;
  email: string;
  time: string;
};
const props = withDefaults(
  defineProps<{
    speakId: number;
  }>(),
  {
    speakId: 0,
  }
);
const emit = defineEmits<{
  (event: "handleCancel"): void;
  (event: "handleSumbit", value: FormType): void;
}>();

const handleCancel = () => {
  emit("handleCancel");
};

const ruleFormRef = ref<FormInstance>();
const form = <Ref<FormType>>ref({
  content: "",
  username: "",
  email: "",
  time: "",
});
const rules = reactive<FormRules>({
  content: [
    {
      type: "string",
      required: true,
      message: "请输入内容",
      trigger: "change",
    },
  ],
  username: [
    {
      type: "string",
      min: 3,
      max: 10,
      required: true,
      message: "请输入昵称,昵称长度在3-10之间",
      trigger: "change",
    },
  ],
  email: [
    {
      type: "email",
      required: true,
      message: "请输入正确格式的邮箱",
      trigger: "change",
    },
  ],
});
onMounted(() => {
  form.value.username = localStorage.getItem("username") || "";
  form.value.email = localStorage.getItem("email") || "";
});
const handleSumbit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      localStorage.setItem("username", form.value.username);
      localStorage.setItem("email", form.value.email);
      form.value.time = dayjs().format("YYYY/MM/DD HH:mm:ss");
      emit("handleSumbit", form.value);
    } else {
      console.log("error submit!", fields);
    }
  });
};
defineExpose({
  form,
});
</script>

<style lang="less">
.leave-message-speak {
  &__container {
    padding: 16px 0;
    background-color: white;
  }
  &__icon {
    margin-right: 5px;
  }
  &__header {
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
  }
  &__cancel {
    font-weight: 500;
    font-size: 13px;
    margin: 0 10px;
    cursor: pointer;
    &:hover {
      color: #ee6c5f;
    }
  }
  &__textarea {
    width: 100%;
    height: 100px;
    border-color: rgba(0, 0, 0, 0.2);
    outline-color: #656ed6;
    outline-width: 1px;
    resize: none;
  }
  &__username {
  }
  &__QQEmail {
  }
  &__submit {
    text-align: center;
    margin-top: 10px;
    width: 100%;
    .el-button {
      width: 100%;
    }
  }
}
</style>
