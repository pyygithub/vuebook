import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home.vue'
// import Collect from '../components/Collect.vue'
// import Detail from '../components/Detail.vue'
// import Add from '../components/Add.vue'
// import List from '../components/List.vue'

const Home = () => import('../components/Home.vue')
const Collect = () => import('../components/Collect.vue')
const Detail = () => import('../components/Detail.vue')
const Add = () => import('../components/Add.vue')
const List = () => import('../components/List.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home, meta: {keepAlive: true, title:'首页'}},
    {path: '/collect', component: Collect, meta: {title:'收藏'}},
    {path: '/detail/:bookId', name: 'detail', component: Detail, meta: {title:'收藏'}},
    {path: '/add', component: Add, meta: {title:'添加'}},
    {path: '/list', component: List, meta: {title:'列表'}},
    {path: '*', redirect: '/home'},
  ]
})
