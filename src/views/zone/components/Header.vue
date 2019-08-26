<template>
    <div class="header">
        <router-link to="/">
            <i class="fas fa-chevron-left header-back"></i>
        </router-link>
        區域選擇
    </div>
</template>


<script>
export default {
    name: 'ZoneHeader'
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';

.header {
    position: relative;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: $color-primary;
    color: $color-white;
    font-size: 16px;


    &-back {
        width: 30px;
        position: absolute;
        top: 30%;
        left: 0;
        color: $color-white;
    }
}


</style>

