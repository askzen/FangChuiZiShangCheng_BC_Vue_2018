<!-- structure -->
<template>
    <div class="content">
        <!-- part I carousel & nav -->
        <div class="page-header">
            <div class="banner">
                <ul class="carousel clearfix" id="carousel" >
                    <!-- click pic to detail -->
                    <router-link
                        v-for="(item, index) in list.bannerList"
                        :key="index"
                        :to="item.linkUrl"
                        tag="li"
                    >
                        <img :src="item.src" alt="">
                    </router-link>
                </ul>
            </div>
            <!-- nav -->
            <ul class="page-nav clearfix">
                <!-- click icon to list -->
                <router-link
                    v-for="(item, index) in list.shortcutList"
                    :key="index"
                    :to="item.linkUrl"
                    tag="li"
                >
                <!-- nav icons -->
                    <img :src="item.src" alt="">
                <!-- nav text -->
                    <span v-text="item.labelTitle"></span>
                </router-link>
            </ul>
        </div>
        <!-- part II new -->
        <div class="new">
            <h2>新品首发<span>&gt;</span></h2>
            <ul class="new-products clearfix">
                <router-link
                    v-for="(item, index) in list.productList"
                    :key="index"
                    :to="'/detail/' + item.id"
                    tag="li"
                >
                    <div class="pic">
                        <img :src="'img/index/' + item.src" alt="">
                    </div>
                    <div class="text">
                        <h3>{{item.name}}</h3>
                        <p class="intro">{{item.intro}}</p>
                        <p class="price">{{item.price | currency}}</p>
                    </div>
                </router-link>
            </ul>
        </div>
        <!-- part II ads -->
        <div class="ads">
            <ul>
                <router-link v-for="(item, index) in list.adList" :to="'/list' + item.id" tag="li" :key="index">
                    <img :src="'img/index/' + item.src">
                </router-link>
            </ul>
        </div>
        <!-- end of page -->
        <div class="floor">
            <ul>
                <router-link
                    v-for="(item, index) in list.floorList"
                    :key="index"
                    :to="'/detail/' + item.id"
                    tag="li"
                >
                    <img :src="'img/index/' + item.src" alt="">
                </router-link>
            </ul>
        </div>
    </div>
</template>
<!-- style -->
<style lang="scss" scoped type='text/css'>
    @import '../base.scss';
    .content {
        margin-bottom: 55px;
    }
    // part I
    .page-header {
        @include baseStyle;
        margin-top: 0;
        .banner {
            width: 100%;
            overflow: hidden;
            .carousel {
                width: 300%;
                li {
                    float: left;
                    width: (100%/3);
                    overflow: hidden;
                    img {
                        width: 100%;
                        display: block;
                    }
                }
            }
        }
        .page-nav {
            li {
                float: left;
                width: (100%/5);
                text-align: center;
                box-sizing: border-box;
                color: #666;
                @include tinyFont;
                img {
                    width: 60%;
                    display: block;
                    margin: 20px auto 10px;
                }
            }
        }
    }
    // part II
    // block title
    .new {
        @include baseStyle;
        padding: 0;
        font-size: 14px;
        h2 {
            font-size: 16px;
            color: $introColor;
            border-bottom: 1px solid $borderColor;
            padding: 10px $blockPadding;
            span {
                float: right;
            }
        }
        // content
        .new-products {
            padding: $blockPadding;
            // show horizontal slide bar
            display: -webkit-box;
            overflow-x: scroll;
            -webkit-overflow-scrolling:touch;
            // each product
            li {
                margin-right: 10px;
                width: 128px;
                .pic {
                    border: 1px solid $borderColor;
                    img {
                        width: 100%;
                        display: block;
                    }
                }
                .text {
                    line-height: $lh;
                    text-align: left;
                    h3 {
                        padding: 3px 0;
                        @include tinyFont(16px);
                        @include hideText(14px * $lh);
                    }
                    .intro {
                        @include tinyFont;
                        @include hideText(12px * $lh);
                        color: $introColor;
                    }
                    .price {
                        // font-size: 13px;
                        @include tinyFont(14px);
                        color: $priceColor;
                        font-weight: bold;
                    }
                }
            }
        }
    }
    // ads
    .ads {
        @include baseStyle;
        ul {
            margin-bottom: -6.75px;
            overflow: hidden;
            li {
                width: 141px;
                margin-bottom: 6.75px;
                img {
                    display: block;
                    width: 100%;
                }
                &:first-child {
                    float: right;
                }
            }
        }
    }
    .floor {
        @include baseStyle;
        li {
            margin-bottom: 10px;
            box-shadow: 0 10px 10px #eee;
            img {
                width: 100%;
                display: block;
            }
        }
    }
</style>
<!-- logic -->
<script>
    export default {
        data() {
            return {
                list: {
                    bannerList: [],
                    shortcutList: [],
                    productList: [],
                    adList: [],
                    floorList: []
                }
            }
        },
        created() {
            this.$http.get('/data/home.json').then(({ data }) => {
                this.list.bannerList = data.bannerList
                this.list.shortcutList = data.shortcutList
                this.list.productList = data.productList
                this.list.adList = data.adList
                this.list.floorList = data.floorList
            })
        },
        // methods() {
        //     switchCarousel() {
        //         let carousel = document.getElementById('carousel')

        //     }
        // }
    }
</script>