<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="continue">
    <div class="outsilde-box box-sizing">
      <div class="user-face-box box-sizing"></div>
      <h3 class="website-name">影谜</h3>
      <p class="page-desc">你回来啦！</p>
      <div class="insilde-box">
        <label class="input-bar margin-bottom-20">
          <input class="input-text box-sizing" id="w" tabindex="1" placeholder="用户名"/>
        </label>
        <label class="input-bar margin-bottom-20">
          <input class="input-text box-sizing" id="a" tabindex="2" placeholder="密码"/>
        </label>
        <button class="btn" tabindex="4" onselectstart="return false">登陆</button>
        <p class="bottom-p">没有账号，
          <router-link to="/register">去注册</router-link>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'login',
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
