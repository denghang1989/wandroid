<template>
  <div class="blogItem">
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
        <span><i class="fa fa-heart-o" aria-hidden="true"></i></span>
      </footer>
    </section>
  </div>
</template>

<script>
  export default {
    name: "BlogItem",
    props: {
      item: {
        type: Object,
        default: function () {
          return {
            "apkLink": "",
            "author": "guiying712",
            "chapterId": 60,
            "chapterName": "Android Studio相关",
            "collect": false,
            "courseId": 13,
            "desc": "",
            "envelopePic": "",
            "fresh": false,
            "id": 1449,
            "link": "http://blog.csdn.net/guiying712/article/details/78352062",
            "niceDate": "2017-10-26",
            "origin": "",
            "prefix": "",
            "projectLink": "",
            "publishTime": 1509031414000,
            "superChapterId": 60,
            "superChapterName": "开发环境",
            "tags": [],
            "title": "【翻译版本】Android Studio 3.0 发行说明",
            "type": 0,
            "userId": -1,
            "visible": 1,
            "zan": 0
          }
        }
      },
    },
  }
</script>

<style scoped>
  
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
  
  span > i {
    font-size: 18px;
  }
</style>
