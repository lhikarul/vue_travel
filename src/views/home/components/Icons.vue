<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    props: {
        list: Array
    },
    data () {
        return {
            swiperOption: {
                autoplay: false
            }
        }
    },
    computed: {
        pages () {
            const pages = [];
            this.list.forEach((item,index) => {
                const page = Math.floor(index / 8);
                if (!pages[page]) {
                    pages[page] = [];
                }
                pages[page].push(item);
            })

            return pages;
        }
    },
    mounted () {
        this.pages
    }
}
</script>

<style lang="scss" scoped>

    .icons {
        padding: 10px;
        overflow: hidden;
    }

    .icon {
        width: 25%;
        padding: 20px 10px 0;
        padding-bottom: 20px;
        float: left;
        box-sizing: border-box;
        text-align: center;

        &-img-content {
            width: 100%;
        }

    }


</style>

