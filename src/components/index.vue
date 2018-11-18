<template>
<div id="index">

<keep-alive >
  <div id='head'>
    我是一个不动的头
    <button type="submit" @click="show">点击</button>
    <span>{{store}}</span>
  </div>

</keep-alive>
<Nav  ref="nav"/>

</div>
</template>

<script>
import Nav from './Nav'
export default {
  data(){
    return{
      msg:"我来自父组件"
    }
  },
  components:{
    Nav
  },
  methods:{
   show(){
     this.$store.store.commit('add',this.msg)
     this.$refs.nav.hh()
   }
  },
  computed:{
    store(){
      return this.$store.store.state.bbb
    }
  }
}
</script>
<style lang='less'>
#head{
text-align: center;
width: 100%;
height:100px;
line-height: 100px;
border:  1px solid blue;
}
</style>
