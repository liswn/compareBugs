<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="continue">
      <div class="outsilde-box box-sizing">
          <div class="user-face-box box-sizing"></div>
          <h3 class="website-name">影谜</h3>
          <p class="page-desc">骚年，组织需要你的加入！</p>
          <div class="insilde-box">
            <lb-input placeholder="用户名"
                      id="username"
                      name="username"
                      type="text"
                      class="margin-bottom-20"
                      :required='true'
                      requiredMessage="用户名不可为空"
                      :rangeLen="[6,12]"
                      rangeMessage="6~12位用户名"
                      ref="username"
            ></lb-input>
            <lb-input placeholder="密码"
                      id="userpwd"
                      name="userpwd"
                      type="password"
                      class="margin-bottom-20"
                      :required="true"
                      requiredMessage="密码不可为空"
            ></lb-input>
            <lb-input placeholder="重复密码" type="password" class="margin-bottom-20"></lb-input>

            <button class="btn" tabindex="4" v-on:click="doRegister" onselectstart="return false">注册</button>
            <p class="bottom-p">已有账号，
                <router-link to="/login">去登录</router-link>
            </p>
          </div>
      </div>
  </div>
</template>
<script>
/*  import axios from 'axios' */
import LbInput from '../../components/LbInput.vue'

export default {
  name: 'register',
  components: {
    LbInput
  },
  data () {
    return {
      username: '',
      password: '',
      repassword: ''
    }
  },
  methods: {
    doRegister: function () {
      console.log(this.$refs['username'].validate())
      /*  let $this = this
      let data = 'username=' + $this.username
      axios.post('http://127.0.0.1:3000/register/submit',
        data
      ).then(function (result) {
        console.log(result)
      }).catch(function (e) {
        console.log('访问异常:' + e)
      })  */
    }
  }
}
</script>
<style scoped>
@import "../../assets/login_regist.css";
</style>
