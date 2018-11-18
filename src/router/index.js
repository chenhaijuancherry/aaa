import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '../components/index'
import first from '../components/First.vue'
import second from '../components/Second.vue'
import third from '../components/Third.vue'
import forth from '../components/Fourth.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component:index,
      children:[{
        path: '/first',
        name: 'first',
        component:first,
       },
       {
        path: '/second',
        name: 'second',
        component:second,
        },
        {
         path: '/third',
         name: 'third',
         component:third,
         },
         {
          path: '/forth',
          name: 'forth',
          component:forth,
        }]
    },
    {
      path: '/helloword',
      name: 'Helloword',
      component:HelloWorld
    }
  ]
})
