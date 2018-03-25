<template>
  <div class="list">
    <Mheader :back="true">列表页</Mheader>
    <div class="container" ref="scroll">
      <ul>
        <router-link v-for="(book,index) in bookList" :key="index" :to="{name:'detail', params:{bookId: book.bookId}}"
                     tag="li">
          <img v-lazy="book.bookCover" alt="">
          <div class="book-right">
            <h4 class="name">{{book.bookName}}</h4>
            <p class="info">{{book.bookInfo}}</p>
            <b class="price">{{book.bookPrice | formatMoney}}</b>
            <div class="btn-list">
              <button @click.stop="delBook(book)">删除</button>
              <button @click.stop="addBook(book)">添加购物车</button>
            </div>
          </div>
        </router-link>
      </ul>
      <div v-if="hasMore" @click="more" class="more">{{loadMsg}}</div>
      <div v-else class="more">没有更多内容了</div>
    </div>
  </div>
</template>

<script>
  import Mheader from '../base/Mheader'
  import {getBookList, removeBook, pagination} from '../api'

  export default {
    name: "list",
    data() {
      return {
        bookList: [],
        offset: 0,          // 偏移量
        hasMore: true,      // 是否有更多
        isLoading: false,   // 是否正加载中，默认 false ，进入请求方法 该为true
        loadMsg: '加载更多'
      }
    },
    filters: {
      formatMoney(val) {
        if (!val) return '';
        return '￥' + val.toFixed(2);
      }
    },
    components: {
      Mheader
    },
    created() {
      this.getBooks();
    },
    mounted() {
      window.addEventListener('scroll', () => {
        this.loadMore();
      })
    },
    methods: {
      // 滚动加载
      loadMore() {
        // 触发scroll事件，可能触发n次，先进来开一个定时器，下次触发时将上一次定时清除掉
        clearTimeout(this.timer); // 防抖 节流
        this.timer = setTimeout(() => {
          let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
          let clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
          let scrollHeight = this.$refs.scroll.offsetHeight;
          if (scrollTop + clientHeight + 20 > scrollHeight) {
            this.getBooks();
          }
        }, 50);

      },

      // 单击加载更多
      more() {
        this.getBooks();
      },

      // 获取图书信息
      async getBooks() {
        //this.bookList = await getBookList();

        if (this.hasMore && !this.isLoading) { // 有更多且没有请求在加载中 时获取 数据
          this.isLoading = true;   // 进入方法 正在加载
          this.loadMsg = '正在加载...';
          let {hasMore, books} = await pagination(this.offset);
          this.bookList = [...this.bookList, ...books];
          this.hasMore = hasMore;
          this.isLoading = false; // 方法请求完毕，加载完毕
          this.loadMsg = '加载更多';
          this.offset = this.bookList.length;  // 维护偏移量 就是总书的长度
        }
      },

      async delBook(book) {
        // 后台删除
        await removeBook(book.bookId);
        // 前台删除
        this.bookList = this.bookList.filter((item) => item !== book);
      }
    }
  }
</script>

<style scoped lang="less">
  .container {
    overflow: scroll;
    margin: 40px 0 50px 0;
    ul {
      padding: 10px;
      li {
        color: #666;
        display: flex;
        img {
          height: 150px;
        }
        .book-right {
          padding: 10px;
          h4.name {
            font-size: 20px;
            line-height: 35px;
          }
          p.info {
            color: #2a2a2a;
            height: 58px;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
          }
          b.price {
            display: block;
            line-height: 25px;
            font-size: 16px;
            color: red;
          }
          .btn-list {
            display: flex;
            justify-content: space-around;
            button {
              display: block;
              padding: 5px 10px;
              background: orangered;
              color: #fff;
              border: none;
              outline: none;
              border-radius: 15px;
            }
          }

        }
      }
    }
    .more {
      width: 120px;
      margin: 10px auto;
      padding: 5px;
      background: #ccc;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 16px;
      border-radius: 5px;
    }
  }
</style>
