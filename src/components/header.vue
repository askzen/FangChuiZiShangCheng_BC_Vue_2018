<template>
    <header class="app-header" v-if="this.$route.path != '/search'">
        <h1><a v-if="pageTag === ''"></a>{{pageTag}}</h1>
        <router-link to="/search" class="search" tag="div"></router-link>
    </header>
</template>
<style type="text/css" scope lang="scss">
    @import "../base.scss";
    .app-header {
        height: 50px;
        background: $navBg;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
        h1 {
            font-size: 20px;
            color: #fff;
            text-align: center;
            line-height: 50px;
            a {
                display: block;
                width: 50px;
                height: 50px;
                margin: 0 auto;
                background: url("/img/index/nav-logo.png") -1px 0 no-repeat;
                background-size: 50px 347px;
            }
        }
        .search {
            width: 50px;
            height: 50px;
            padding: 0 10px;
            position: absolute;
            right: 0;
            top: 0;
            background: url('/img/index/search.png') no-repeat 23px 16px;
            background-size: 20px 20px;
        }
    }
</style>
<script>
    export default {
        data() {
            return {
                // isShowLogo: this.$route.path === '/' || this.$route.path === '/index'
                // isShowLogo: this.pageTag === ''
            }
        },
        // 计算属性
        computed: {
            // 根据路由显示不同的头部标签
            pageTag() {
                switch (this.$route.path) {
                    case '/category':
                        return '分类'
                    case '/cart':
                        return '购物车'
                    case '/user':
                        return '个人中心'
                    default:
                        return ''
                }
            }
        },
        created() {
            // console.log(this)
        }
    }
</script>