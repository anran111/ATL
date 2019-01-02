import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import Login from './views/Login/Login.vue'
import Register from './views/Register/Register.vue'
import Tab1 from './views/Tab1/Tab1.vue'
import Tab2 from './views/Tab2/Tab2.vue'
import Tab3 from './views/Tab3/Tab3.vue'

Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tab1',
      name: 'Tab1',
      component: Tab1
    },
    {
      path: '/tab2',
      name: 'Tab2',
      component: Tab2
    },
    {
      path: '/tab3',
      name: 'Tab3',
      component: Tab3
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
  
})
