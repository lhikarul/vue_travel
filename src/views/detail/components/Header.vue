<template>
    <div class='header'>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <i class="fas fa-chevron-left header-abs-back"></i>
        </router-link>
            <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
                <router-link to="/"><i class="fas fa-chevron-left header-fixed-back"></i></router-link>
                景點詳情
            </div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data () {
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handleScroll () {
            const top = document.documentElement.scrollTop;
            if (top > 50) {
                let opacity = (top / 140);
                opacity = opacity > 1 ? 1 : opacity;
                this.opacityStyle = {opacity};
                this.showAbs = false;
            }else {
                this.showAbs = true;
            }
        }
    },
    activated () {
        window.addEventListener('scroll',this.handleScroll);
    },
    deactivated () {
        window.addEventListener('scroll',this.handleScroll);
    }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';

.header-abs {
    border-radius: 20px;
    position: absolute;
    left: 10px;
    top: 10px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: rgba(0,0,0,.8);

    &-back {
        color: #fff;
        font-size: 20px;
    }

}

.header-fixed {
    margin: 0 auto;
    max-width: 500px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: $color-primary;
    color: $color-white;

    &-back {
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        color: $color-white;
    }
}

</style>
