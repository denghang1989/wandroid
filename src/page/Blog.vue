<template>
  <div class="blog">
    <div>
      {{this.$route.query.blogLink}}
    </div>
    <iframe :src="blog" frameborder="0" marginwidth="0" marginheight="0"
            allowtransparency="true" scrolling="no" allowfullscreen="true"></iframe>
  </div>
</template>

<script>
  export default {
    name: "Blog",
    data() {
      return {
        blog: this.$route.query.blogLink
      }
    },
    props: {
      blogLink: {
        type: String,
        default: ""
      },
    },
  }
</script>

<style scoped>

</style>
