<template>
    <section>
        <!-- 手机部分 -->
        <section class="category-mobilephone">
            <h2>手机</h2>
            <section class="category-banner">
                <router-link to="/category/64">
                    <img :src="'img/category/' + banner.src" alt="">
                </router-link>
            </section>
            <!-- 坚果系列 -->
            <section class="category-content clearfix">
                <ul class="clearfix">
                    <router-link :to="'/detail/' + item.id" tag="li" :key="index"  v-for="(item, index) in list">
                        <img :src="'img/category/' + item.src" alt="">
                        <span class="tel-name">{{item.text}}</span>
                        <span class="dp" v-show="item.doublePurchase">{{item.   doublePurchase}}</span>
                        <span class="arrow"></span>
                    </router-link>
                </ul>
            </section>
        </section>
        <!-- 显示器部分 -->
        <section class="category-tnt" v-show="$route.path !== '/category/64'">
            <section class="tnt-monitor">
                <router-link to="/category/82">
                    <img :src="'img/category/' + tntWorkGroup.src" alt="">
                </router-link>
            </section>
            <section class="pc-components">
                <ul>
                    <router-link :to="'/detail/' + item.id" tag="li" :key="index"   v-for="(item, index) in pcComponents">
                        <img :src="'img/category/' + item.src" alt="">
                        <span class="tel-name">{{item.text}}</span>
                        <span class="arrow"></span>
                    </router-link>
                </ul>
            </section>
        </section>
        <!-- 充电线材部分 -->
        <section class="category-chargewire" v-show="$route.path !== '/category/64'">
            <h2>充电线材</h2>
            <section class="category-banner">
                <router-link to="/category/71">
                    <img :src="'img/category/' + officialWire.src" alt="">
                </router-link>
            </section>
            <!-- 充电线材列表部分 -->
            <section class="charging-components">
                <ul class="clearfix">
                    <router-link :to="'/detail/' + item.id" tag="li" :key="index" v-for="(item, index) in chargingComponents">
                        <img :src="'img/category/' + item.src" alt="">
                        <p class="comp-name">{{item.text}}</p>
                    </router-link>
                </ul>
            </section>
        </section>
        <!-- 子组件路由渲染位置 -->
        <!-- <router-view></router-view> -->
    </section>
</template>
<style scoped lang="scss">
    @import "../base.scss";
    section {
            //手机标题部分
            h2 {
                background: #fff;
                padding-left: 13px;
                height: 41px;
                color: #666666;
                line-height: 41px;
                border: 1px solid #f2f2f2;
                font-size: 16px;
            }
            // banner部分
            .category-banner {
                background: #fff;
                height: 91px;
                padding: 13px;
                a {
                    display: block;
                    img {
                        width: 100%;
                    }
                }
            }
            // 坚果部分
            .category-content {
                background: #fff;
                ul {
                    padding-right: 12px;
                    li {
                        height: 62px;
                        line-height: 62px;
                        border-top: 1px solid #f2f2f2;
                        img {
                            width: 40px;
                            height: 34px;
                            margin: 0 21px;
                            vertical-align: middle;
                        }
                        .tel-name {
                            font-size: 12px;
                            color: #666666;
                            font-weight: bold;
                        }
                        .dp {
                            display: inline-block;
                            margin-left: 8px;
                            font-size: 12px;
                            width: 58px;
                            height: 26px;
                            line-height: 26px;
                            border-radius: 13px;
                            text-align: center;
                            background: #F7FAE1;
                            color: #8AAD37;
                            vertical-align: middle;
                            transform: scale(0.7);
                        }
                        .arrow {
                            float: right;
                            width: 10px;
                            height: 10px;
                            border-right: 2px solid #A2A2A2;
                            border-bottom: 2px solid #A2A2A2;
                            transform: rotate(-45deg);
                            margin-top: 24px;
                        }
                    }
                }
            }
        // 显示器tnt部分
        .category-tnt {
            margin: 7px 0;
            height: 180px;
            background: #fff;
            .tnt-monitor {
                @extend .category-banner;
            }
            .pc-components {
                @extend .category-content;
                li {
                    float: left;
                    width: ( 100% / 2 );
                }
            }
        }
        //充电线材部分
        .category-chargewire {
            .category-banner {
                a {
                    box-shadow: 0px 5px 10px $borderColor;
                    img{
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .charging-components {
                padding-top: 10px;
                background: #fff;
                width: 100%;
                ul {
                    padding: 20px $blockPadding;
                    background: #fff;
                    border-top: 1px solid $borderColor;
                    margin-right: -7px;
                    li {
                        float: left;
                        width: (100%/3);
                        margin-right: 7px;
                        img {
                            display: block;
                            width: 100%;
                            height: 112px;
                            border: 1px solid $borderColor;
                            border-radius: 5px;
                            box-shadow: 2px 0px 2px $borderColor;
                        }
                        .comp-name {
                            /*显示固定行数的省略号*/
                            display:-webkit-box;
                            -webkit-line-clamp: 1;
                            -webkit-box-orient: vertical;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            font-size: 12px;
                            text-align: center;
                        }
                    }
                }

            }
        }
    }
</style>
<script>
    export default {
        data() {
            return {
                banner: {},
                list: [],
                tntWorkGroup: {},
                pcComponents: [],
                officialWire: {},
                chargingComponents: []
            }
        },
        created() {
            console.log(this);
            this.$http
                .get("data/category.json")
                .then(({ data }) => {
                    console.log(data);
                    this.banner = data.data.banner;
                    // console.log(this.banner);
                    this.list = data.data.list;
                    // console.log(this.list);
                    this.tntWorkGroup = data.data.tntWorkGroup;
                    this.pcComponents = data.data.pcComponents;
                    // console.log(this.pcComponents);
                    this.officialWire = data.data.officialWire;
                    this.chargingComponents = data.data.chargingComponents;
                })
        }
    }
</script>