<template>
  <div class="SystemDetailsPage">
    SystemDetailsPage
    {{getTabList}}
  </div>
</template>

<script>
  export default {
    name: "SystemDetailsPage",
    computed: {
      getTabList() {
        let query = this.$route.query;
        return query;
      }
    },
  }
</script>

<style scoped>

</style>
