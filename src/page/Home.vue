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
        imageList: []
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
