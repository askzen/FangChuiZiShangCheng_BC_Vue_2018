<template>
    <footer class="app-footer" v-if="isShow">
        <ul>
            <router-link
                :key="index"
                v-for="(item, index) in buttons"
                :to="'/' + item.id"
                tag="li"
            >
            <img :src="'img/index/' + item.src" alt="">
            <p>{{item.text}}</p>
            </router-link>
        </ul>
    </footer>
</template>

<style scoped lang="scss">
    @import "../base.scss";
    .app-footer {
        height: 55px;
        line-height: 55px;
        background: #fff;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        font-size: 14px;
        ul {
            li {
                float: left;
                width: (100%/4);
                color: $color;
                position: relative;
                img {
                    position: absolute;
                    width: 26px;
                    height: 26px;
                    left: 50%;
                    top: 10px;
                    margin-left: -13px;
                }
                p {
                    line-height: 90px;
                    @include tinyFont;
                }
            }
        }
    }
</style>

<script>
    export default {
        data() {
            return {
                buttons: []
            }
        },
        computed: {
            isShow() {
               return !/^\/(detail|search)/.test(this.$route.path)
            }
        },
        created() {
            this.$http.get('data/footer.json')
                .then(({ data }) => this.buttons = data)
        }
    }
</script>