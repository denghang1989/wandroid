<template>
  <div class="SystemDetailItemPage">
    <ul class="list-ui">
      <li class="list-item" v-for="(item,index) in articleList" :key="index">
        <section class="item">
          <header class="item-header">
            <span>{{item.author}}</span>
            <span>{{item.niceDate}}</span>
          </header>
          <main class="item-main">
            {{item.title}}
          </main>
          <footer class="item-footer">
            <span>{{item.superChapterName}}/{{item.chapterName}}</span>
            <span>
              <i class="fa fa-heart-o" aria-hidden="true"></i>
            </span>
          </footer>
        </section>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "SystemDetailItemPage",
    props: {
      chapterId: {
        type: Number,
        default: 0
      }
    },
    
    data() {
      return {
        data: {}
      }
    },
    
    computed: {
      articleList() {
        return this.data;
      }
    },
    
    watch: {
      chapterId(newValue, oldValue) {
        console.log(newValue);
      }
    },
    
    methods: {
      getData(chapterId) {
        this.$http.get("/api/").then(({data}) => {
        
        })
      }
    },
    mounted() {
      this.getData(this.chapterId);
    }
  }
</script>

<style scoped>

</style>
