<template>
  <div class="SystemDetailItemPage">
    {{chapterId}}
  </div>
</template>

<script>
  export default {
    name: "SystemDetailItemPage",
    data() {
      return {
        chapterId: 60
      }
    },
    
    watch: {
      chapterId(newValue, oldValue) {
        console.log(newValue);
      }
    },
  }
</script>

<style scoped>

</style>
