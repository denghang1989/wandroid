<template>
  <div class="system">
    <ul class="system-list">
      <li class="system-item" v-for="(item,index) in systemList" :key="index" @click="handleClick(item,index)">
        <section class="system-item-left">
          <header>
            {{item.name}}
          </header>
          <main>
            <span class="system-item-subItem" v-for="(subItem,subIndex) in item.children" :key="subIndex">
              {{subItem.name}}
            </span>
          </main>
        </section>
        <div class="system-item-right">
          <i class="fa fa-angle-right"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "System",
    data() {
      return {
        systemObject: {}
      }
    },
    computed: {
      systemList() {
        var systemList = [];
        if (!(JSON.stringify(this.systemObject) === "{}")) {
          systemList = this.systemObject.data;
        }
        return systemList;
      }
    },
    methods: {
      getSystemData() {
        this.$http("/api/tree/json").then(({data}) => {
          if (data.errorCode === 0) {
            this.systemObject = data;
          }
        })
      },
      
      handleClick(item, index) {
        this.$router.push({path: "/systemDetailsPage", query: {item: item}})
      }
    },
    mounted() {
      this.getSystemData()
    }
  }
</script>

<style scoped>
  .system-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .system-item {
    padding: 3px 10px;
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  
  .system-item:last-child {
    border-bottom: none;
  }
  
  .system-item-left {
    flex: 0 0 90%;
  }
  
  .system-item-right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }
  
  .system-item-left > header {
    padding: 3px 0px;
    font-size: 16px;
    color: #000;
  }
  
  .system-item-left > main {
    padding-top: 10px;
    padding-bottom: 2px;
    font-size: 12px;
    color: #333;
  }
  
  .system-item-subItem {
  
  }

</style>
