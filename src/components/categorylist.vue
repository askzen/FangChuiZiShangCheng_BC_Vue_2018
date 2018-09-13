<template>
    <div>
        <ul class="clearfix">
            <router-link :to="'/detail/' + item.id" tag="li" :key="index" v-for="(item, index) in list">
                <img :src="item.src" alt="">
                <div class="content">
                    <h3>{{item.name}}</h3>
                    <p>{{item.description}}</p>
                    <div class="sizebox clearfix">
                        <span class="size" v-for="(item, index) in item.size">{{item}}</span>
                    </div>
                    <div class=" circlebox clearfix">
                        <span class="circle" v-for="(item, index) in item.color_value" :style="{'backgroundColor': item}">
                        </span>
                    </div>
                    <span class="price">{{item.price | currency}}</span>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<style scoped lang="scss">
    @import "../base.scss";
    div {
        ul {
            li {
                width: 100%;
                overflow: hidden;
                background: #fff;
                border-bottom: 1px solid $borderColor;
                padding: 20px 10px;
                img {
                    float: left;
                    width: 130px;
                }
                .content {
                    margin-left: 180px;
                    h3 {
                        font-size: 13px;
                        height: 30px;
                        line-height: 30px;
                    }
                    p {
                        font-size: 12px;
                        color: #ccc;
                    }
                    .sizebox {
                        width: 220px;
                        overflow: hidden;
                        margin-left: -13px;
                        .size {
                            float: left;
                            color: #333;
                            font-size: 12px;
                            background: #e5efff;
                            color: #3965cc;
                            text-align: center;
                            border: 1px solid #3965cc;
                            border-radius: 2px;
                            margin-right: -14px;
                            @include tinyFont(12px, 0.7);
                            padding: 0 10px;
                            font-weight: bold;
                        }
                    }
                    .circlebox {
                        padding: 10px 0;
                        overflow: hidden;
                        .circle {
                            // display: block;
                            float: left;
                            width: 7px;
                            height: 7px;
                            margin-right: 8px;
                            border: 1px solid #ccc;
                            border-radius: 50%;
                        }
                    }
                    .price {
                        color: #d44d44;
                        font-weight: bold;
                        font-size: 12px;
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
                list: []
            }
        },
        created() {
            this.$http('data/category_id=' + this.$route.params.type + '.json')
                .then(({ data }) => {
                    let { list } = data.data;
                    this.list = list;
                    // console.log(this.list);
                })
        }
    }
</script>