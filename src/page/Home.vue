<template>
  <div class="home">
    <swiper :list="imageList" @on-index-change="onIndexChange"></swiper>
    <ul class="list-ui">
      <li class="list-item" v-for="(item,index) in articleList" :key="index">
        <BlogItem :item="item"></BlogItem>
      </li>
    </ul>
  </div>
</template>

<script>
  import {Swiper} from "vux";
  import BlogItem from "../components/BlogItem";
  
  export default {
    name: "Home",
    components: {BlogItem, Swiper},
    data() {
      return {
        imageList: [],
        number: "0",
        articleData: {}
      }
    },
    methods: {
      onIndexChange(currentIndex) {
      
      },
      
      getBannerList() {
        this.$http.get("/api/banner/json").then(({data}) => {
          if ((data.errorCode === 0) && (Array.isArray(data.data))) {
            this.imageList = data.data.map(function (item, index, array) {
              return {
                url: 'javascript:',
                img: item.imagePath,
                title: item.desc
              }
            });
          }
        })
      },
      
      getArticles(pageNum) {
        this.$http.get(`/api/article/list/${pageNum}/json`).then(({data}) => {
          if (data.errorCode === 0) {
            this.articleData = data;
          }
        })
      }
    },
    computed: {
      articleList() {
        var data = this.articleData.data;
        if (data) {
          return data.datas;
        } else {
          return [];
        }
      }
    },
    mounted() {
      this.getBannerList();
      this.getArticles(this.number)
    }
  }
</script>

<style lang="less" scoped>
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
