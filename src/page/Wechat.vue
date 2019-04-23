<template>
  <div class="wechat">
    <tab v-model="currentIndex">
      <tab-item v-for="(item, index) in getTabList" :key="index" :selected="index===currentIndex"
                @on-item-click="onItemClick">
        {{item.name}}
      </tab-item>
    </tab>
    <router-view :chapterId="chapterId"/>
  </div>
</template>

<script>
  import {Tab, TabItem} from "vux";
  
  export default {
    name: "Wechat",
    components: {TabItem, Tab},
    data() {
      return {
        tabData: {},
        currentIndex: 0,
        chapterId: 408
      }
    },
    computed: {
      getTabList() {
        var tabList = [];
        if (!(JSON.stringify(this.tabData) === "{}")) {
          tabList = this.tabData.data;
          this.chapterId = tabList[0].id;
        }
        return tabList;
      }
    },
    methods: {
      getTabs() {
        this.$http.get("/api/wxarticle/chapters/json").then(({data}) => {
          if (data.errorCode === 0) {
            this.tabData = data;
          }
        })
      },
      onItemClick(index) {
        let list = this.tabData.data;
        this.chapterId = list[index].id;
      }
    },
    mounted() {
      this.getTabs();
    }
  }
</script>

<style scoped>

</style>
