<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <!-- slides -->
                <swiper-slide>
                    <img class="gallary-img" :src="imgs" alt="">
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallary',
    props: {
        imgs: {
            type: String
        }
    },
    data () {
        return {
            swiperOptions: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                observeParents: true,
                observer: true
            }
        }
    },
    methods: {
        handleGallaryClick () {
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss" scoped>
    .container {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #000;
        z-index: 99;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .wrapper {
            width: 100%;
            height: 0;
            padding-bottom: 100%;
        }

        .gallary-img {
            width: 100%;
        }
    }
</style>
