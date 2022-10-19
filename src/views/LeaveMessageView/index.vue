<template>
  <div>
    <div class="leave-message__container">
      <div class="leave-message__header">
        <i class="bi bi-chat-left-dots leave-message__icon"></i>博客留言
      </div>
      <div class="leave-message__content">
        <div class="leave-message__item">
          <div class="leave-message__userInfo">
            <div class="leave-message__userInfo-left">
              <i class="bi bi-person about__icon"></i>
            </div>
            <div class="leave-message__userInfo-right">
              <div class="leave-message__name">我心飞扬</div>
              <div class="leave-message__time">4个月前说：</div>
            </div>
          </div>
          <div class="leave-message__text">
            或许对于世界，你是一个人；但对于我，你就是全世界。你在时，你是一切，你不在时，一切是你。
          </div>
        </div>
        <div class="leave-message__item">
          <div class="leave-message__userInfo">
            <div class="leave-message__userInfo-left">
              <i class="bi bi-person about__icon"></i>
            </div>
            <div class="leave-message__userInfo-right">
              <div class="leave-message__name">我心飞扬</div>
              <div class="leave-message__time">4个月前说：</div>
            </div>
          </div>
          <div class="leave-message__text">
            或许对于世界，你是一个人；但对于我，你就是全世界。你在时，你是一切，你不在时，一切是你。
          </div>
        </div>
        <div class="leave-message__item">
          <div class="leave-message__userInfo">
            <div class="leave-message__userInfo-left">
              <i class="bi bi-person about__icon"></i>
            </div>
            <div class="leave-message__userInfo-right">
              <div class="leave-message__name">我心飞扬</div>
              <div class="leave-message__time">4个月前说：</div>
            </div>
          </div>
          <div class="leave-message__text">
            或许对于世界，你是一个人；但对于我，你就是全世界。你在时，你是一切，你不在时，一切是你。
          </div>
        </div>
        <div class="leave-message__item">
          <div class="leave-message__userInfo">
            <div class="leave-message__userInfo-left">
              <i class="bi bi-person about__icon"></i>
            </div>
            <div class="leave-message__userInfo-right">
              <div class="leave-message__name">我心飞扬</div>
              <div class="leave-message__time">4个月前说：</div>
            </div>
          </div>
          <div class="leave-message__text">
            或许对于世界，你是一个人；但对于我，你就是全世界。你在时，你是一切，你不在时，一切是你。
          </div>
        </div>
        <div class="leave-message__item">
          <div class="leave-message__userInfo">
            <div class="leave-message__userInfo-left">
              <i class="bi bi-person about__icon"></i>
            </div>
            <div class="leave-message__userInfo-right">
              <div class="leave-message__name">我心飞扬</div>
              <div class="leave-message__time">4个月前说：</div>
            </div>
          </div>
          <div class="leave-message__text">
            或许对于世界，你是一个人；但对于我，你就是全世界。你在时，你是一切，你不在时，一切是你。
          </div>
        </div>
      </div>
    </div>
    <div class="leave-message__speak">
      <div class="leave-message__header">
        <i class="bi bi-chat-left-dots leave-message__icon"></i>我来留言
      </div>
      <div class="leave-message__content">
        <div class="leave-message__speak-userInfo">
          <div class="leave-message__speak-headImg">
            <i class="bi bi-person about__icon"></i>
          </div>
          <input
            class="leave-message__speak-name"
            type="text"
            placeholder="匿名用户"
          />
        </div>
        <textarea class="leave-message__speak-textarea" />
        <div class="leave-message__submit">
          <el-button type="primary" round>提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less">
.leave-message {
  &__container {
    padding: 24px;
    background-color: white;
  }
  &__header {
    font-size: 16px;
  }
  &__item {
    padding-top: 20px;
    &::after {
      content: '';
      display: flex;
      height: 1px;
      margin-top: 25px;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  &__icon {
    margin-right: 5px;
  }

  &__userInfo {
    display: flex;
    margin-bottom: 15px;
  }
  &__userInfo-left {
    background-color: rgba(0, 0, 0, 0.2);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    i {
      font-size: 50px;
      color: white;
    }
  }
  &__time {
    font-size: 13px;
    color: #c4cfdb;
  }
  &__text {
    font-size: 13px;
    color: #34495e;
    padding-left: 60px;
  }
  &__speak {
    margin-top: 10px;
    padding: 24px;
    background-color: white;
  }
  &__speak-userInfo {
    display: flex;
    align-items: center;
    margin: 20px 0;
  }
  &__speak-headImg {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    i {
      font-size: 50px;
      color: white;
    }
  }
  &__speak-name {
    padding: 8px 0;
    height: 40px;
    width: 200px;
    outline: none;
    border: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 16px;
    &::placeholder {
      color: #c4cfdb;
    }
  }
  &__speak-textarea {
    width: 100%;
    height: 100px;
    border-color: rgba(0, 0, 0, 0.2);
    outline-color: #656ed6;
    outline-width: 1px;
    resize: none;
  }
  &__submit {
    text-align: center;
    margin-top: 10px;
  }
}
</style>
