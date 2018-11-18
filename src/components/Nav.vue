<template>
    <div class="nav">
        <nav>
            <ul >
                <li>
                    <router-link to="/first">first</router-link>
                </li>
                <li>
                    <router-link to="/second">second</router-link>
                </li>
                <li>
                    <router-link to="/third">third</router-link>
                </li>
                <li>
                    <router-link to="/forth">forth</router-link>
                </li>
                <li>{{count}}</li>
            </ul>
        </nav>
        <div class="router">
        <!-- 你可以 router-view 当做是一个容器，它渲染的组件是你使用 vue-router 指定的. -->
        <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            message:'我是子组件的方法'
        }
    },
    methods:{
        hh(){
            this.$store.store.commit('minius',this.message)
        }
    },
    computed:{//计算属性，依赖缓存.缓存不改变 计算属性结果不变
     count(){
       return this.$store.store.state.aaa
     }
  }
}
</script>
<style lang="less">
.nav{
    display: flex;
    nav{
        width: 30%;
        height: 500px;
        border: black 1px solid
    };
    .router{
        width: 100%;
        height: 500px;
        border: red 1px solid
    }

}
</style>


