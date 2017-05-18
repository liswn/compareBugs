<template>
  <div class="continue">
    <header-area></header-area>
    <router-view></router-view>
  </div>
</template>
<script>
  import HeaderArea from '../../components/Header'
  export default {
    components: {
      HeaderArea
    },
    data () {
      return {
      }
    }
  }
</script>
