<template>
  <label class="input-bar" :class="theme">
    <input class="input-text" type="type" :id="id" :name="name" :placeholder="placeholder" v-model="currentValue"/>
    <span v-if="error_msg != null" class="input-error">{{error_msg}}</span>
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
    const that = this
    return {
      currentValue: '', // 当前文本框的值
      error_msg: '', // 错误信息
      showState: { // 展示错误信息的事件
        error: function (msg) {
          that.error_msg = msg
          return false
        },
        success: function () {
          that.error_msg = null
          return true
        }
      }
    }
  },
  watch: {
    currentValue () {
      this.validate()
    }
  },
  methods: {
    checkRequired () {
      const that = this
      if (that.required) {
        let val = that.currentValue
        if (val === '' || val == null) {
          return that.showState.error(that.requiredMessage)
        }
      }
      return that.showState.success()
    },
    checkRangeLen () {
      const that = this
      let len = that.currentValue.length
      let ranges = that.rangeLen
      let size = ranges.length
      /**
        边界值为空且文本框值为空（不进行边界判断）
       */
      if (ranges != null && len !== 0) {
        if (size === 1 && len < ranges[0]) {
          // 单边边界
          return that.showState.error(that.rangeMessage)
        } else if (len < ranges[0] || len > ranges[1]) {
          // 双边边界
          return that.showState.error(that.rangeMessage)
        }
      }
      return that.showState.success()
    },
    validate () {
      const that = this
      if (!that.checkRequired()) {
        return false
      } else if (!that.checkRangeLen()) {
        return false
      }
      return true
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
