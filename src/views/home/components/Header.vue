<template>
    <div class="header">
        <div class="header-left">
            <i class="fas fa-chevron-left back-icon"></i>
        </div>
        <div class="header-title">
            Have Fun
        </div>
        <router-link to="/zone">
            <div class="header-right">
                <span>{{this.zone}}</span>
                <i class="fas fa-caret-down"></i>
            </div>
        </router-link>
    </div>
</template>


<script>
import {mapState} from 'vuex'
export default {
    name: 'HomeHeader',
    computed: {
        ...mapState(['zone'])
    }
}
</script>

<style lang="scss" scoped>

@import '~styles/variables.scss';

    .header {
        display: flex;
        align-items: center;
        background: $color-primary;
        color: $color-white;
        height: 70px;
        font-size: 30px;

        &-left {
            width: 30px;
            text-align: center;
        }

        &-right {
            margin-right: 10px;
            color: $color-white;
            span {
                position: relative;
                top: -4px;
                font-size: 18px;
            }
        }

        &-title {
            flex: 1;
            text-align: center;
        }
    }
</style>
