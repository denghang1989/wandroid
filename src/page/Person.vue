<template>
  <div class="person">
    <header class="person-header">
      <img :src="personInfo.headIcon" alt="">
      <x-button class="person-header-login" type="primary" mini>登入</x-button>
    </header>
    
    <main class="person-main">
      <group>
        <cell v-for="(item,index) in list" :title="item.title" is-link :key="index">
          <img slot="icon" width="20" style="display:block;margin-right:12px;"
               :src="item.icon">
        </cell>
      </group>
    </main>
  </div>
</template>

<script>
  import {Group, Cell, XButton} from 'vux';
  
  export default {
    name: "Person",
    components: {XButton, Group, Cell},
    data() {
      return {
        personInfo: {
          headIcon: require("../assets/img/ic_person_header.jpg")
        },
        list: [
          {title: "我的收藏", icon: require("../assets/img/ic_person_collection.png")},
          {title: "设置", icon: require("../assets/img/ic_person_setting.png")},
          {title: "关于我们", icon: require("../assets/img/ic_person_about.png")}
        ]
      }
    }
  }
</script>

<style scoped>
  .person-header {
    height: 310px;
    background-image: url("../assets/img/ic_person_jay.jpg");
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .person-header > img {
    border-radius: 35px;
    width: 70px;
  }
  
  .person-header-login {
    margin-top: 10px;
  }
  
</style>
