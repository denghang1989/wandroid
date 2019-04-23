<template>
  <div class="project">
    <tab v-model="currentIndex">
      <tab-item v-for="(item, index) in getTabList" :key="index" :selected="index===currentIndex"
                @on-item-click="onItemClick">
        {{item.name}}
      </tab-item>
    </tab>
    
    <router-view :cid="cid"/>
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

</style>
