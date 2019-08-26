<template>
    <div>
        <div class="banner">
            <div class="banner-content">
                <div class="banner-title">{{list.Name}}</div>
                <div class="banner-info">
                    <div class="opentime">開放時間：{{list.Opentime}}</div>
                    <div class="address">地點：{{list.Add}}</div>
                    <div class="contact">電話：{{list.Tel}}</div>
                </div>
                <p class="banner-desc">
                    {{list.Description}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailContent',
    props: {
        list: Object
    }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';

.banner {

    &-content {
        padding: 20px 40px;
    }

    &-title {
        color: $text-primary;
        text-align: center;
        font-size: 24px;
    }

    &-info {
        padding: 10px 0;
        font-size: 14px;

        > div:not(:last-child) {
            margin-bottom: 10px;
        }
    }

    &-desc {
        font-size: 14px;
        line-height: 1.5;
        letter-spacing: 1.5px;
    }

}

</style>

