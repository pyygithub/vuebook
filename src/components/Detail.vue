<template>
  <div class="detail">
    <Mheader :back="true">详情页</Mheader>
    <ul>
      <li>
        <label for="bookName">书的名称</label>
        <input type="text" v-model="book.bookName" id="bookName">
      </li>
      <li>
        <label for="bookInfo">书的简介</label>
        <textarea  v-model="book.bookInfo" id="bookInfo"></textarea>
      </li>
      <li>
        <label for="bookPrice">价格</label>
        <input type="text" v-model="book.bookPrice" id="bookPrice">
      </li>
      <li>
        <button @click="updateBook">确认修改</button>
      </li>
    </ul>
  </div>
</template>

<script>

  import Mheader from '../base/Mheader';
  import {findBookById, updateBookById} from '../api';
  export default {
    name: "detail",
    data() {
      return {
        book:null
      }
    },
    components: {
      Mheader
    },
    watch: {
      // 只要路径变化，重新获取数据
      $route() {
        this.getOneBook();
      }
    },
    computed: {
      bookId() {
        return this.$route.params.bookId; // 将$route中的参数映射到bookId上
      }
    },
    created() {
      this.getOneBook();
    },
    methods: {
      async getOneBook() {
        this.book = await findBookById(this.bookId);
        // 如果是空对象，需要跳转到列表页
        Object.keys(this.book).length > 0 ? void 0 : this.$router.push('/list');
      },

      async updateBook(book) {
        await updateBookById(this.bookId, this.book);
        // 修改完成后跳转页面
        this.$router.push('/list');
      }
    }
  }
</script>

<style scoped lang="less">
  .detail {
    position: absolute;
    top:40px;
    left:0;
    right:0;
    bottom:0;
    background: #fff;
    z-index: 100;
    ul {
      margin: 10px;
      li {
        label {
          display: block;
          font-size: 20px;
          margin: 10px 0;
        }
        input {
          height: 35px;
          width: 100%;
          outline: none;
          border:1px solid #ccc;
          border-radius: 5px;
          text-indent: 6px;
        }
        textarea {
          width: 98%;
          height: 50px;
          outline: none;
          border:1px solid #ccc;
          border-radius: 5px;
          text-indent: 6px;
          padding: 1%;
        }
        button {
          margin: 10px 0;
          display: block;
          width: 100px;
          height: 30px;
          line-height: 25px;
          background: seagreen;
          color: #fff;
          border: none;
          outline: none;
          border-radius: 10px;
        }
      }
    }
  }
</style>
