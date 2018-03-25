<template>
  <div class="home">
    <Mheader :back="false">首页</Mheader>

    <div class="content">
      <Loading v-if="loading"></Loading>
      <template v-else>
        <!--轮播图-->
        <Swiper :swiperSlides="sliders"></Swiper>

        <!-- 热门图书-->
        <div class="container">
          <h3>热门图书</h3>
          <ul>
            <li v-for="(hot, index) in hotBooks" :key="index">
              <img :src="hot.bookCover" alt="">
              <b>{{hot.bookName}}</b>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script>

  import Mheader from '../base/Mheader'             // 引入标题组件
  import Swiper from '../base/Swiper'               // 引入轮播图组件
  //import {getSliders, getHotBooks} from '../api'
  import {getAll} from '../api/index'
  import Loading from '../base/Loading'

  export default {
    name: "home",
    data() {
      return {
        sliders: [],
        hotBooks: [],
        loading: true
      }
    },
    components: {
      Mheader, Swiper,Loading
    },
    created() {
      // this.getHomeSlider();   // 获取轮播图
      // this.getHomeHotBooks(); // 获取最新图书
      this.getData();
    },
    methods: {
      // async getHomeHotBooks() {
      //   this.hotBooks = await getHotBooks();
      // },
      //
      // async getHomeSlider() {
      //   this.sliders = await getSliders();
      // }

      async getData() {
         let [sliders, hotBooks] = await getAll();
         this.sliders = sliders;
         this.hotBooks = hotBooks;

         // 数据获取完毕后，loading=false
        this.loading = false;
      }
    }
  }
</script>

<style scoped lang="less">
  h3 {
    color: #999;
    padding: 5px 0;
  }
  .container {
    width: 90%;
    margin: 0 auto;
    ul {
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 10px;
      li {
        width: 33.3333%;
        text-align: center;
        padding: 5px 0;
        img {
          width: 100%;
        }
      }
    }
  }
</style>
