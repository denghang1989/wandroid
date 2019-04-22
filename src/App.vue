<template>
  <div id="app">
    <header class="wan-header">
      <x-header>
        <span>玩Android</span>
      </x-header>
    </header>
    
    <main class="wan-main">
      <router-view/>
    </main>
    
    <footer class="wan-footer">
      <tabbar>
        <tabbar-item v-for="(item,index) in tabList" :key="index" :link="item.link" :selected="index===0">
          <img slot="icon" :src="item.icon" alt="">
          <img slot="icon-active" :src="item.iconActive" alt="">
          <span slot="label">{{item.label}}</span>
        </tabbar-item>
      </tabbar>
    </footer>
  
  </div>
</template>

<script>
  import {XHeader, Tabbar, TabbarItem} from "vux";
  
  export default {
    name: 'App',
    components: {XHeader, Tabbar, TabbarItem},
    data() {
      return {
        tabList: [
          {
            icon: require("./assets/img/ic_main_home.png"),
            iconActive: require("./assets/img/ic_main_home_check.png"),
            label: "首页",
            link: "/home"
          },
          {
            icon: require("./assets/img/ic_main_system.png"),
            iconActive: require("./assets/img/ic_main_system_check.png"),
            label: "知识体系",
            link: "/system"
          },
          {
            icon: require("./assets/img/ic_main_wx.png"),
            iconActive: require("./assets/img/ic_main_wx_check.png"),
            label: "公众号",
            link: "/wechat"
          },
          {
            icon: require("./assets/img/ic_main_project.png"),
            iconActive: require("./assets/img/ic_main_project_check.png"),
            label: "项目",
            link: "/project"
          },
          {
            icon: require("./assets/img/ic_main_person.png"),
            iconActive: require("./assets/img/ic_main_person_check.png"),
            label: "我的",
            link: "/person"
          },
        ]
      }
    },
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  
  .app {
    width: 100%;
    height: 100%;
  }
  
  .wan-header {
    width: 100%;
    position: fixed;
    height: 46px;
    z-index: 100;
  }
  
  .wan-main {
    width: 100%;
    padding-top: 46px;
    padding-bottom: 56px;
  }
  
  .wan-footer {
    width: 100%;
    position: fixed;
    height: 53px;
    bottom: 0;
  }
</style>
