<template>
  <div id="app">
    <main-header/>
    <router-view/>
    <main-footer/>
  </div>
</template>

<script>
import mainHeader from './components/main-header/'
import mainFooter from './components/main-footer/'
export default {
  name: 'App',
  components:{
    mainHeader,
    mainFooter
  }
}
</script>
// 引入自定义的全局样式
<style lang="scss" src="./css/index.scss"></style>
