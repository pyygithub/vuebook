<template>
  <div class="header">
    <slot></slot>
    <i v-if="back" class="iconfont icon-return" @click="goBack"></i>
  </div>
</template>

<script>
  export default {
    name: "mheader",
    props: {
      back: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped lang="less">
  .header {
    background: #090723;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-weight: bold;
    i {
      position: absolute;
      left: 10px;
      font-size: 20px;
    }
  }
</style>
