<template>
  <div class="user-reg-or-login">
    <template v-if="!$store.getters.USER">
      <span class="button" @click="showLogin=true">登录</span>
    </template>
    <el-popover v-else placement="bottom-end" width="200" trigger="click">
      <span class="user-info" slot="reference">
        {{ $store.getters.USER.nickName }}
      </span>
      <div class="user-info-popover">
        <div class="foot-box">
          <span class="button">我的设置</span>
          <span class="button" @click="logout">退出登录</span>
        </div>
      </div>
    </el-popover>
    <el-dialog title="登录" :visible.sync="showLogin" width="400px">
      <el-form size="small" ref="login-form" :model="loginInfo" :rules="loginRules">
        <el-form-item prop="username">
          <el-input v-model="loginInfo.username" placeholder="用户名 / 邮箱" :disabled="loginLoading"/>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginInfo.password" placeholder="密码" type="password" :disabled="loginLoading"/>
        </el-form-item>
        <el-form-item>
          <el-button :loading="loginLoading" type="primary" style="width: 100%" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import {encode} from 'js-base64';

export default {
  data() {
    return {
      showLogin: false,
      loginLoading: false,
      loginInfo: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          {required: true, message: '用户名或邮箱不能为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    async logout() {
      let method = await this.$msgbox('您确定要登出么?', '提示').catch(m => m);
      if (method !== 'confirm') return;
      await this.$axios.post('/user/logout');
      location.reload();
    },
    login() {
      this.$refs['login-form'].validate(async (valid) => {
        if (!valid) return;
        let {data: {error, msg, data}} = await this.$axios.post('/user/login', {
          username: this.loginInfo.username,
          password: encode(this.loginInfo.password)
        });
        if (error) return this.$message.error(msg);
        this.$store.commit('SET_USER_INFO', data);
        this.showLogin = false;
        this.loginInfo.username = '';
        this.loginInfo.password = '';
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "~assets/scss/_handle.scss";

.user-reg-or-login {
  .button {
    font-size: 12px;
    cursor: pointer;
    @include fontColor('color-text');

    &:hover {
      @include fontColor('color-primary');
    }
  }

  .user-info {
    font-size: 12px;
    cursor: pointer;
    @include fontColor('color-text');
  }
}

.user-info-popover {
  width: 100%;

  .foot-box {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .button {
      font-size: 12px;
      cursor: pointer;
      @include fontColor('color-text');

      &:hover {
        @include fontColor('color-primary');
      }
    }
  }
}
</style>
