<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <div class="banner-img-box">
                <img class="banner-img" :src="list.Picture1">
            </div>
        </div>
        <FadeAnimation>
            <common-gallary :imgs="list.Picture1" v-show="showGallary" @close="handleGallaryClick"></common-gallary>
        </FadeAnimation>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'

export default {
    name: 'DetailBanner',
    props: {
        list: Object
    },
    data () {
        return {
            showGallary: false
        }
    },
    methods: {
        handleBannerClick () {
            this.showGallary = true;
        },
        handleGallaryClick () {
            this.showGallary = false;
        }
    },
    components: {
        CommonGallary,
        FadeAnimation
    }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';

.banner {

    .banner-img-box {
        padding-bottom: 55%;
        position: relative;
        overflow: hidden;
        height: 0;
    }

    &-img {
        width: 100%;
    }
}

</style>
