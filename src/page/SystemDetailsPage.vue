<template>
  <div class="SystemDetailsPage">
    <header>
      <tab>
        <tab-item v-for="(item,index) in getTabList" :key="index" :selected="index===0" @on-item-click="onItemClick">
          {{item.name}}
        </tab-item>
      </tab>
    </header>
    <main>
      <router-view :chapterId="chapterId"></router-view>
    </main>
  </div>
</template>

<script>
  import {TabItem, Tab} from "vux";
  
  export default {
    name: "SystemDetailsPage",
    components: {TabItem, Tab},
    data() {
      return {
        params: this.$route.query.item,
        chapterId: 60
      }
    },
    computed: {
      getTabList() {
        return this.params.children;
      }
    },
    methods: {
      onItemClick(index) {
        let tabData = this.getTabList[index];
        this.chapterId = tabData.id;
      }
    },
  }
</script>

<style scoped>

</style>
