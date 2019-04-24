<template>
  <div class="project">
    <header class="project-header">
      <tab v-model="currentIndex">
        <tab-item v-for="(item, index) in getTabList" :key="index" :selected="index===currentIndex"
                  @on-item-click="onItemClick">
          {{item.name}}
        </tab-item>
      </tab>
    </header>
    <main class="project-main">
      <router-view :cid="cid"/>
    </main>
  </div>
</template>

<script>
  import {Tab, TabItem} from "vux";
  
  export default {
    name: "Project",
    components: {TabItem, Tab},
    data() {
      return {
        tabObject: {},
        currentIndex: 0,
        cid: 294
      }
    },
    methods: {
      getTabData() {
        this.$http.get("/api/project/tree/json").then(({data}) => {
          if (data.errorCode === 0) {
            this.tabObject = data;
          }
        })
      },
      onItemClick(index) {
        let tabList = this.tabObject.data;
        this.cid = tabList[index].id;
      }
    },
    computed: {
      getTabList() {
        let tabList = [];
        if (!(JSON.stringify(this.tabObject) === "{}")) {
          tabList = this.tabObject.data;
        }
        return tabList;
      },
      
      
    },
    mounted() {
      this.getTabData();
    }
  }
</script>

<style scoped>
  .project-header {
    width: 100%;
    height: 44px;
    position: fixed;
    top: 46px;
    z-index: 100;
  }
  
  .project-main {
    margin-top: 44px;
  }

</style>
