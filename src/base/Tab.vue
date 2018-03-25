<template>
  <div class="footer">
    <router-link to="/home">
      <i class="iconfont icon-ai-home"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-liebiao"></i>
      <span>列表</span>
    </router-link>
    <router-link to="/collect">
      <i class="iconfont icon-star"></i>
      <span>购物车</span>
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-tianjia"></i>
      <span>添加</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>

<!--
  display: flex;  伸缩盒模型
  flex-direction: row/column; 方向
  justify-content: center; 上下垂直居中
  align-items: center; 横向居中
  flex:1; 每份占比例
-->
<style scoped lang="less">
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: #fff;
    display: flex;
    border-top: 1px solid #ccc;
    a {
      display: flex;
      color: #666;
      flex-direction: column;
      flex: 1;
      align-items: center;
      padding: 10px;
    }
    a.router-link-active {
      color: seagreen;
      font-weight: bold;
    }
  }
</style>
