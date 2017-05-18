<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="continue">
    <div class="outsilde-box box-sizing">
      <div class="user-face-box box-sizing"></div>
      <h3 class="website-name">影谜</h3>
      <p class="page-desc">你回来啦！</p>
      <div class="insilde-box">
        <lb-input placeholder="用户名"
                  id="username"
                  name="username"
                  type="text"
                  class="margin-bottom-20"
                  :required='true'
                  requiredMessage="请输入用户名"
                  :rangeLen="[6,12]"
                  rangeMessage="6~12位用户名"
                  ref="username"
                  v-on:setValue="getInputValue"
        ></lb-input>
        <lb-input placeholder="密码"
                  id="userpwd"
                  name="userpwd"
                  type="password"
                  class="margin-bottom-20"
                  :required="true"
                  requiredMessage="请输入密码"
                  ref="userpwd"
                  v-on:setValue="getInputValue"
        ></lb-input>
        <button class="btn" tabindex="4" onselectstart="return false">登陆</button>
        <p class="bottom-p">没有账号，
          <router-link to="/register">去注册</router-link>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import LbInput from '../../components/LbInput.vue'
  export default {
    name: 'login',
    components: {
      LbInput
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
<style scoped>
  @import "../../assets/login_regist.css";
</style>
