<template>
  <div class="SystemDetailItemPage">
    <ul class="list-ui">
      <li class="list-item" v-for="(item,index) in articleList" :key="index" v-on:click="handleItemClick(item,index)">
        <BlogItem :item="item"></BlogItem>
      </li>
    </ul>
  </div>
</template>

<script>
  import BlogItem from "../components/BlogItem";
  
  export default {
    name: "SystemDetailItemPage",
    components: {BlogItem},
    props: {
      chapterId: {
        type: Number,
        default: 0
      }
    },
    
    data() {
      return {
        projectObject: {}
      }
    },
    
    computed: {
      articleList() {
        let list = [];
        if (!(JSON.stringify(this.projectObject) === "{}")) {
          list = this.projectObject.data.datas;
        }
        if (list.length > 0) {
          list.map(function (value, index, array) {
            let desc = value.desc;
            value.simpleDesc = desc.slice(0, 60) + "...";
            return value;
          })
        }
        return list;
      }
    },
    
    watch: {
      chapterId(newValue, oldValue) {
        this.getData(newValue);
      }
    },
    
    methods: {
      getData(chapterId) {
        this.$http.get(`/api/article/list/0/json?cid=${chapterId}`).then(({data}) => {
          if (data.errorCode === 0) {
            this.projectObject = data;
          }
        })
      },
      
      handleItemClick(item, index) {
        this.$router.push({path: "/blog", query: {blogLink: item.link}})
      }
    },
    mounted() {
      this.getData(this.chapterId);
    }
  }
</script>

<style scoped>
  .list-ui {
    margin: 0;
    list-style: none;
  }
  
  .list-item {
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  
  .item-header, .item-footer {
    display: flex;
    flex-direction: row;
    padding: 3px 0px;
    justify-content: space-between;
  }
  
  .item-header > span, .item-footer > span {
    color: #333333;
    font-size: 12px;
  }
  
  .item-main {
    font-size: 16px;
    padding: 3px 0px;
    margin: 0;
  }
  
  .list-item:last-child {
    border-bottom: none;
  }
  
  span > i {
    font-size: 18px;
  }
</style>
