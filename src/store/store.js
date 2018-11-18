import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
//vuex又被称为状态管理
const store=new vuex.Store({
    state:{//存数据
        aaa:'',//我来自父组件
        bbb:''//我是子组件的方法
    },
    mutations:{//方法
        add(state,obj){
          //变更状态
           state.aaa=obj
        },
        minius(state,objs){
           state.bbb=objs
        }
    }
})
export default{store}
