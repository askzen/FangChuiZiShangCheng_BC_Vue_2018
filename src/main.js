import Vue from 'vue';
import router from "./router/router.js";
//引入样式
import {} from "./main.scss";
//引入store
import store from "./store/store.js";
//引入axios插件
import axios from "axios";
// 引入Header组件
import AppHeader from "./components/header.vue"
// 引入Footer组件
import AppFooter from "./components/footer.vue"

Vue.prototype.$http = axios;

// 自定义过滤器
// 价格过滤器
Vue.filter('currency', price => {
    console.log( price, 'aaa');
    let newprice = price.toFixed(2)
    // let str = String(price.toFixed(2))
    let arr = newprice.split('')
    if (arr.length > 6) {
        let pos = arr.length - 6
        return arr.splice(pos, 0, ','), '¥ ' + arr.join('')
    }
    return '¥ ' + newprice
})

// 创建Vue实例化对象
new Vue({
    // 容器
    el: "#app",
    // 注册路由
    router,
    // 注册store
    store,
    // 数据
    data: {},
    // 注册组件
    components: {
        AppHeader,
        AppFooter
    },
    // 模版
    template: `
        <div>
            <AppHeader></AppHeader>
            <div class="app-content">
                <router-view></router-view>
            </div>
            <AppFooter></AppFooter>
        </div>`
})
