<template>
  <div class="login__container">
    <el-card class="login__content">
      <template #header>
        <div class="login__header">
          <span>用户登录</span>
        </div>
      </template>
      <div class="login__form">
        <el-form :model="loginForm">
          <el-form-item>
            <template #label>
              <span class="login__label">用户名</span>
              <span>：</span>
            </template>
            <el-input
              v-model="loginForm.username"
              placeholder="请输入用户名或电子邮件"
            />
          </el-form-item>
          <el-form-item>
            <template #label>
              <span class="login__label-password">密码</span>
              <span>：</span>
            </template>
            <el-input
              v-model="loginForm.password"
              type="password"
              placeholder="请输入密码"
            />
          </el-form-item>
          <el-form-item>
            <div class="login__form-buttom">
              <el-button
                type="primary"
                round
                class="login__form-submit"
                @click="handleSubmit"
                >登录</el-button
              >
            </div>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import axios from 'axios';
import { data } from 'dom7';
export type LoginForm = {
  username: string;
  password: string;
};
const loginForm = <LoginForm>reactive({});

const handleSubmit = async () => {
  const data = await axios.post('http://127.0.0.1:3000/admin/login', {
    username: loginForm.username,
    password: loginForm.password,
  });
  console.log(data);
};
</script>

<style lang="less">
.login {
  &__container {
    height: 100vh;
    background-color: #4eb3f1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__content {
    background-color: white;
    width: 500px;
    border-radius: 10px;
  }
  &__header {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
  }
  &__form {
    .el-form-item {
      margin-bottom: 30px;
    }
    .el-form-item:last-of-type {
      margin-bottom: 0;
    }
  }
  &__form-buttom {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  &__form-submit {
    width: 200px;
  }
  &__label-password {
    letter-spacing: 2ch;
    margin-right: -2ch;
  }
}
</style>
