<template>
  <div class="fragment">
    <ul class="ul-list">
      <li class="li-item" v-for="(item,index) in getList" :key="index">
        <flexbox wrap="nowrap" class="li-item-content">
          
          <flexbox-item :span="4">
            <img :src="item.envelopePic" alt="" width="100px">
          </flexbox-item>
          
          <flexbox-item class="container">
            <header>
              <h4>{{item.title}}</h4>
            </header>
            <main>
              {{item.simpleDesc}}
            </main>
            <footer>
              <span>{{item.author}}</span>
              <span>{{item.niceDate}}</span>
              <span>
              <i class="fa fa-heart-o"></i>
            </span>
            </footer>
          </flexbox-item>
        
        </flexbox>
      
      </li>
    </ul>
  </div>
</template>

<script>
  import {Flexbox, FlexboxItem} from "vux";
  
  export default {
    name: "ProjectFragment",
    components: {FlexboxItem, Flexbox},
    data() {
      return {
        projectObject: {}
      }
    },
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
        let list = [];
        if (!(JSON.stringify(this.projectObject) === "{}")) {
          list = this.projectObject.data.datas;
        }
        if (list.length > 0) {
          list.map(function (value, index, array) {
            let desc = value.desc;
            value.simpleDesc = desc.slice(0, 30) + "...";
            return value;
          })
        }
        return list;
      }
    },
    methods: {
      getListData(cid) {
        this.$http.get(`/api/project/list/1/json?cid=${cid}`).then(({data}) => {
          if (data.errorCode === 0) {
            this.projectObject = data;
          }
        })
      }
    },
    mounted() {
      this.getListData(this.cid);
    }
  }
</script>

<style scoped>
  .ul-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .li-item {
    margin: 0;
    padding: 8px 12px;
    border-bottom: 1px solid #ddd;
  }
  
  .li-item:last-child {
    border-bottom: none;
  }
  
  li.li-item {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  
  .li-item-content {
    height: 200px;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  
  .container h4 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  
  .container main {
    font-size: 12px;
  }
  
  .container > footer {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
  }
</style>
