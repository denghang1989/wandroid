<template>
  <div class="fragment">
    <ul class="list-ui">
      <li class="list-item" v-for="(item,index) in getlist" :key="index">
        <BlogItem :item="item"></BlogItem>
      </li>
    </ul>
  </div>
</template>

<script>
  import BlogItem from "../components/BlogItem";
  export default {
    name: "WechatFragment",
    components: {BlogItem},
    data() {
      return {
        dataObject: {},
        
      }
    },
    props: {
      chapterId: {
        type: Number,
        default: 408
      },
    },
    computed: {
      getlist() {
        let list = [];
        if (!(JSON.stringify(this.dataObject) === "{}")) {
          list = this.dataObject.data.datas;
        }
        return list;
      }
    },
    methods: {
      getListData(chapterId) {
        this.$http.get(`/api/wxarticle/list/${chapterId}/1/json`).then(({data}) => {
          if (data.errorCode === 0) {
            this.dataObject = data;
          }
        })
      }
    },
    mounted() {
      this.getListData(this.chapterId);
    },
    watch: {
      chapterId(newValue, oldValue) {
        this.getListData(newValue);
      }
    },
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
