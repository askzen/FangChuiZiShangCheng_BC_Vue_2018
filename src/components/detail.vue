<template>
    <div>
        <div class="btns">
            <div class="container">
                <li :key="index" v-for="(item, index) in data" v-text="item.text" @click="turnDom" :pos="item.anchor">
                </li>
            </div>
        </div>
        <div class="img">
            <img :src="detail.src" alt="">
        </div>
        <div class="product-info" id="product">
            <h2>商品信息</h2>
            <p class="name">{{detail.name}}</p>
            <p class="intro">{{detail.intro}}</p>
            <p class="price">{{detail.price | currency}}</p>
            <div class="choose-size">
                <h3>已选版本</h3>
                <p>颜色: <span>{{'碳黑色'}}</span></p>
                <p>容量: <span>{{'6G + 64GB'}}</span></p>
                <p>数量: <span>{{'1'}}</span></p>
                <!-- 点击出弹层 -->
                <span class="arrow" @click="showLayer">
                    <span class="in"></span>
                </span>
            </div>
        </div>
        <div class="product-detail test" id="detail">
            <h2>商品详情</h2>
            <img :src="item" alt="" :key="index" v-for="(item, index) in detail.large">
        </div>
        <div class="product-parameter test" id="parameter">商品参数</div>
        <div class="product-recommend test" id="recommend">商品推荐</div>
        <!-- 加入购物车部分 -->
        <div class="cart">
            <!-- 点击出弹层 -->
            <router-link to="/cart" tag="div" class="shop-cart">
                <img src="img/category/detail/shopping.png" alt="">
            </router-link>
            <span class="buy-now" @click="showLayer">现在购买</span>
            <span class="putin-cart" @click="showLayer">加入购物车</span>
        </div>
        <!-- 弹层 -->
        <!-- <div class="layer" id="layer" @click="hideLayer">
                <div class="img">
                    <img src="img/category/layer/pro2.webp" alt="">
                </div>
                <div class="layer-title">
                    <h3>{{detail.name}}</h3>
                    <p>{{detail.price | currency}}</p>
                </div>
                <div class="layer-content">
                    <h2>颜色选择</h2>
                    <div class="color"></div>
                    <h2>容量选择</h2>
                    <div class="spec"></div>
                    <div class="amount">
                        <h2>选择数量</h2>
                        <span class="reduce">-</span>
                        <span><b>1</b></span>
                        <span class="add">+</span>
                    </div>
                </div>
        </div> -->
    </div>
</template>
<style scoped lang="scss">
    @import "../base.scss";
    div {
        position: relative;
        .btns {
            padding: 10px 5px;
            background: $borderColor;
            overflow: hidden;
            box-shadow: 0px 4px 4px $borderColor;
            position: fixed;
            left: 0;
            right: 0;
            top: 50px;
            z-index: 9999;
            .container {
                height: 35px;
                border: 1px solid #dedede;
                li {
                    float: left;
                    width: (100%/4);
                    height: 100%;
                    line-height: 35px;
                    color: #606060;
                    font-weight: bold;
                    text-align: center;
                    // text-decoration: none;
                    border-right: 1px solid #dedede;
                    box-sizing: border-box;
                    &:last-child {
                        border: none;
                    }
                }
            }

        }
        .img {
            width: 100%;
            height: 332px;
            background: #fff;
            margin-top: 117px;
            img {
                display: block;
                width: 80%;
                height: 100%;
                margin: 0 auto;
            }
        }
        .product-info {
            margin-top: $gap;
            overflow: hidden;
            // background: #fff;
            h2 {
                height: 40px;
                border-bottom: 1px solid $borderColor;
                padding-left: 15px;
                font-size: 16px;
                color: #666666;
                line-height: 40px;
                background: #fff;
            }
            p {
                background: #fff;
                padding: 15px 20px;
            }
            .name {
                color: #333333;
                font-size: 18px;
                font-weight: bold;
            }
            .intro {
                color: #7f7f7f;
                font-size: 14px;
                padding: 0 20px;
            }
            .price {
                color: #d44d44;
                font-weight: bold;
            }
            //选择版本
            .choose-size {
                margin-top: $gap;
                background: #fff;
                padding: 20px;
                position: relative;
                h3 {
                    color: #7f7f7f;
                    font-size: 14px;
                }
                p {
                    padding: 5px 0;
                    span {
                        color: #000;
                        font-size: 16px;
                        font-weight: bold;
                    }
                }
                .arrow {
                    position: absolute;
                    right: 0;
                    @include arrow();
                    .in {
                        @include arrow(10px, #fff);
                        position: absolute;
                        left: -13px;
                        top: 0;
                    }
                }
            }
        }
        // 商品详情
        .product-detail {
            margin-top: $gap;
            background: #fff;
            // overflow: hidden;
            h2 {
                height: 40px;
                border-bottom: 1px solid $borderColor;
                padding-left: 15px;
                font-size: 16px;
                color: #666666;
                line-height: 40px;
            }
            img {
                display: block;
                width: 100%;
            }
        }
        //购物车
        .cart {
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            background: #fff;
            height: 60px;
            z-index: 10000;
            .shop-cart {
                float: left;
                width: 50px;
                height: 100%;
                text-align: center;
                line-height: 100%;
                img {
                    width: 60%;
                    margin-top: 10px;
                }
            }
            span {
                float: right;
                // width: 40%;
                width: 35%;
                height: 40px;
                color: #fff;
                background: #5f8af2;
                border-radius: 5px;
                margin-right: 10px;
                line-height: 40px;
                text-align: center;
                margin-top: 9px;
                border: 1px solid $borderColor;
                box-sizing: border-box;
            }
            .putin-cart {
                background: #fdfdfd;
                color: #8c8c8c;
            }
            .buy-now {

            }
        }
        //弹层
        .layer {
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            margin-top: 50px;
            height: 557px;
            z-index: 10000;
            background: rgba(0, 0, 0, .7);
            display: none;
            .img {
                position: absolute;
                left: 15px;
                top: 52px;
                width: 30%;
                height: 20%;
                background: #fff;
                border-radius: 5px;
                z-index: 10001;
            }
            .layer-title {
                position: absolute;
                left: 0;
                top: 183px;
                width: 100%;
                height: 23%;
                background: #fff;
                padding-left: 157px;
                box-shadow: 0 4px 4px $borderColor;
                p {
                    margin-top: 50px;
                    color: #d44d44;
                }
            }
            .amount {
                position: absolute;
                left: 0;
                top: 316px;
                width: 100%;
                height: 90px;
                background: #fff;
                h2 {
                    height: 40px;
                    border-bottom: 1px solid $borderColor;
                    font-size: 18px;
                    line-height: 40px;
                    padding-left: 20px;
                }
                span {
                    float: left;
                    margin-right: 10px;
                    margin-top: 10px;
                    color: #666666;
                }
                .add, .reduce {
                    width: 20px;
                    height: 20px;
                    border: 2px solid $borderColor;
                    box-shadow: 0px 2px 2px $borderColor;
                    border-radius: 50%;
                    text-align: center;
                }
                .reduce {
                    margin-left: 20px;
                }

            }

        }
        .test {
            height: 500px;
        }
    }

</style>
<script>
    export default {
        data() {
            return {
                data: [
                    { "anchor": "product", "text": "商品" },
                    { "anchor": "detail", "text": "详情" },
                    { "anchor": "parameter", "text": "参数" },
                    { "anchor": "recommend", "text": "推荐" },
                ],
                detail: {}
            }
        },
        methods: {
            //页面内跳转
            turnDom(e) {
                let id = e.target.getAttribute("pos");
                console.log(e.target, id);
                let div = document.getElementById(id)
                let pos = div.getBoundingClientRect();
                console.log(pos.y);
                const top = 117;
                window.scroll(0, pos.y - top);
            },
            //显示弹层
            showLayer() {
                let div = document.getElementById("layer");
                div.style.display = "block";
            },
            hideLayer() {
                let div = document.getElementById("layer");
                div.style.display = "none";
            }
        },
        created() {
            // this.$http("data/" + this.$route.params.detailid + ".json")
            this.$http.get("data/1000479.json")
                .then(({ data }) => {
                    console.log(data, 123);
                    this.detail = data;
                    // console.log(typeof this.detail.price);
                })
        }
    }
</script>