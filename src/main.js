// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'swiper/dist/css/swiper.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.config.productionTip = false

// 使用轮播图插件
Vue.use(VueAwesomeSwiper)

// 使用图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3963341262,207126803&fm=200&gp=0.jpg',
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521964580521&di=d90032160db6f98e37f38cfd9d3d55d5&imgtype=0&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D3462925376%2C2324488602%26fm%3D214%26gp%3D0.jpg',
  attempt: 1
})

// 全局守卫 在进入路由之前每一次都会执行该方法
router.beforeEach(function(to, from, next) {
  // 浏览器title
  document.title = to.meta.title;
  next();

  // 可以做一些权限拦截
  // if(to.path == '/list') {
  //   next({path:'/add'});
  // }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  store,  // store被注册到实例的所有组件都会有一个属性 this.$store
})
