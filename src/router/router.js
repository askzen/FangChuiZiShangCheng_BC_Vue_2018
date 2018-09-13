import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
// 第二部 定义引入组件
import Home from "../components/home.vue";
import Category from "../components/category.vue";
import Cart from "../components/cart.vue";
import User from "../components/user.vue";
//引入手机列表组件
import CategoryList from "../components/categorylist.vue";
//引入详情页
import Detail from "../components/detail.vue";
// 引入搜索页
import Search from "../components/search.vue"
// 第三步 定义路由规则
let routes = [
    // 分类页
    {
        path: "/category",
        component: Category,

    },
    //分类列表页
    {
        path: "/category/:type",
        component: CategoryList
    },
    // 购物车页
    {
        path: "/cart",
        component: Cart
    },
    // 中心页
    {
        path: "/user",
        component: User
    },
    //详情
    {
        path: "/detail/:detailid",
        component: Detail
    },
    // 搜索页
    {
        path: "/search",
        component: Search
    },
    // 默认页，首页
    {
        path: "*",
        component: Home
    }
]
// 第四步  暴露实例化路由并传递路由规则
export default new VueRouter({ routes })