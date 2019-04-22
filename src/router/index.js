import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/Home';
import Person from '@/page/Person';
import Project from '@/page/Project';
import Wechat from '@/page/Wechat';
import System from '@/page/System';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/person',
      name: 'Person',
      component: Person
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/wechat',
      name: 'Wechat',
      component: Wechat
    },
    {
      path: '/system',
      name: 'System',
      component: System
    }]
})
