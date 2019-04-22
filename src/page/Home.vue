<template>
  <div class="home">
    <swiper :list="bannerList" @on-index-change="onIndexChange"></swiper>
  </div>
</template>

<script>
  import {Swiper} from "vux";
  
  export default {
    name: "Home",
    components: {Swiper},
    data() {
      return {
        imageList: [{
          url: 'javascript:',
          img: 'https://static.vux.li/demo/1.jpg',
          title: '送你一朵fua'
        }, {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/5.jpg',
          title: '送你一次旅行',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }]
      }
    },
    methods: {
      onIndexChange(currentIndex) {
      
      },
      getBannerList() {
        this.$http.get("/api/banner/json").then(({data}) => {
          console.log(data);
        })
      }
    },
    computed: {
      bannerList() {
        return this.data;
      }
    },
    mounted() {
      this.getBannerList();
    }
  }
</script>

<style scoped>

</style>
