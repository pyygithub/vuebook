<template>
  <div id="app">
    <!-- 需要缓存的页面 -->
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>


    <!-- 不需要缓存的页面 -->
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <Tab></Tab>
  </div>
</template>

<script>
  import Tab from './base/Tab'

  export default {
    data() {
      return {}
    },
    components: {
      Tab
    }
  }
</script>
<!-- App.vue 默认为根组件，所有这里的样式一般认为是全局样式，不需要加scoped -->
<style>
  * {
    margin: 0;
    padding: 0;
  }

  ul, li {
    list-style: none
  }

  a {
    text-decoration: none;
  }

  input, button {
    -webkit-appearance: none;
  }


</style>
