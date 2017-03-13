<template>
  <label class="input-bar" :class="theme">
    <input class="input-text" type="type" :id="id" :name="name" :placeholder="placeholder" v-model="currentValue"/>
    <span v-if="iserror" class="input-error">{{error_msg}}</span>
  </label>
</template>

<script>
export default {
  name: 'LbInput',
  componentName: 'LbInput',
  props: {
    theme: {
      type: String,
      default: 'loginPage'
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    id: String,
    name: String,
    required: {
      type: Boolean,
      default: false
    },
    requiredMessage: {
      type: String,
      default: '必填'
    },
    rangeLen: {
      type: Array,
      default: null
    },
    rangeMessage: {
      type: String,
      default: '长度不对'
    }
  },
  data () {
    return {
      currentValue: '',
      iserror: false,
      error_msg: ''
    }
  },
  watch: {
    currentValue () {
      const that = this
      if (that.required) {
        that.isrequired()
      }
      if (that.rangeLen != null && (that.currentValue.length !== 0)) {
        that.checkRangeLen()
      }
    }
  },
  methods: {
    isrequired () {
      const that = this
      let val = that.currentValue
      if (val === '' || val == null) {
        that.showErr(that.requiredMessage)
        return false
      } else {
        that.hideErr()
        return true
      }
    },
    checkRangeLen () {
      const that = this
      let len = that.currentValue.length
      if (len < that.rangeLen[0] || len > that.rangeLen[1]) {
        that.showErr(that.rangeMessage)
        return false
      } else {
        that.hideErr()
        return true
      }
    },
    showErr (txt) {
      const that = this
      that.iserror = true
      that.error_msg = txt
    },
    hideErr () {
      const that = this
      that.iserror = false
      that.error_msg = ''
    },
    validate () {
      if (!this.isrequired()) {
        return false
      } else if (!this.checkRangeLen()) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>
<style scoped>
  .loginPage.input-bar
  {
    position: relative;
    display: block;
    width:100%;
    height: 36px;
  }
  .loginPage.input-bar .input-text
  {
    border: none;
    border-bottom: 1px solid #dddddd;
    width: 100%;
    height: 100%;
    padding: 0 15px;
    box-sizing: border-box;
  }
  .loginPage.input-bar .input-text:focus
  {
    border-color: #42b983;
  }
  .input-error
  {
    position: absolute;
    right: 5px;
    top:0;
    font-size: 12px;
    color: #ff0000;
    line-height: 36px;
  }
</style>
