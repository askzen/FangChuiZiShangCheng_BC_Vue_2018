<template>
    <!-- <transition name="demo"> -->
        <div class="search-page">
            <div class="page-header">
                <span class="go-back" @click="goBack">返回</span>
                <div class="search"><input type="text" placeholder="请输入要搜索的内容" @keydown.enter="searchValue"></div>
            </div>
            <div class="content">
                <h2>热门搜索</h2>
                <ul>
                    <router-link to="/"></router-link>
                </ul>
            </div>
        </div>
    <!-- </transition> -->
</template>

<style type="text/css" lang="scss" scoped>
    @import "../base.scss";
    // .demo-enter-active,
    // .demo-leave-active {
    //     transition: 1s all;
    // }
    // .demo-enter,
    // .demo-leave-to {
    //     left: 100%;
    // }
    .search-page {
        background: #fff;
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        .page-header {
            height: 20px;
            padding: 10px;
            border-bottom: 1px solid $borderColor;
            line-height: 20px;
            background-color: #efefef;
            box-shadow: 0 5px 5px #eee;
            .go-back {
                float: right;
                width: 40px;
                height: 20px;
                // line-height: 20px;
                text-align: center;
                background-color: #eee;
                color: $introColor;
                font-size: 12px;
                border: 1px solid #ccc;
                padding: 1px 2px;
                border-radius: 3px;
            }
            .search {
                padding: 5px;
                margin-right: 70px;
                margin-top: -7px;
                input {
                    width: 100%;
                    height: 20px;
                    outline: none;
                    border-radius: 10px;
                    border: 1px solid #eee;
                    padding: 3px 10px;
                }
            }
        }
        .content {
            h2 {
                font-size: 14px;
                color: $introColor;
                padding: $blockPadding;
                background: $bdBg;
            }
        }
    }
</style>

<script>
    export default {
        data() {
            return {
                list: []
            }
        },
        methods: {
            goBack() {
                history.go(-1)
            },
            searchValue(e) {
                let val = e.target.value;
                this.$http.get('data/category_id=64.json')
                .then(({ data }) => {
                    let arr = data.data.list
                    let renderArr = []
                    arr.forEach(obj => {
                        if (obj.name.indexOf(val) != -1) {
                            renderArr.push(obj)
                        }
                    })
                    this.list = renderArr;
                })
            }
        }
    }
</script>