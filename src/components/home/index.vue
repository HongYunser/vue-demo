<script>
import {Button} from 'element-ui'

export default {
  created(){
    this.userItem({name: '笑脸'})
  },
  data () {
    return {
      
    }
  },
  components:{
    elButton:Button
  },
  methods:{
    ...Vuex.mapActions('home', [
				'userItem'
			])
  }
}
</script>
<template lang="pug" src="./index.pug"></template>
<style scoped lang="scss" src="./index.scss"></style>