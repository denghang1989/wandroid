<template>
  <div class="fragment">
  
  </div>
</template>

<script>
  export default {
    name: "ProjectFragment",
    props: {
      cid: {
        type: Number,
        default: 294
      },
    },
    watch: {
      cid(newValue, oldValue) {
        this.getListData(newValue);
      }
    },
    computed: {
      getList() {
        return this.data;
      }
    },
    methods: {
      getListData(cid) {
        this.$http.get(`https://www.wanandroid.com/project/list/1/json?cid=${cid}`).then(({data}) => {
          console.log(data);
        })
      }
    },
    mounted() {
      this.getListData(this.cid);
    }
  }
</script>

<style scoped>

</style>
