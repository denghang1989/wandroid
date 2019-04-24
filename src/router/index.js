import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home';
import Person from '@/page/Person';
import Project from '@/page/Project';
import Wechat from '@/page/Wechat';
import System from '@/page/System';
import WechatFragment from '@/page/WechatFragment';
import ProjectFragment from '@/page/ProjectFragment';
import SystemDetailsPage from '@/page/SystemDetailsPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
      component: Project,
      children: [
        {
          path: "",
          component: ProjectFragment
        }
      ]
    },
    {
      path: '/wechat',
      name: 'Wechat',
      component: Wechat,
      children: [
        {
          path: "",
          component: WechatFragment
        }
      ]
    },
    {
      path: '/system',
      name: 'System',
      component: System
    },
    {
      path: '/systemDetailsPage',
      name: 'SystemDetailsPage',
      component: SystemDetailsPage
    }
    
    ]
})
