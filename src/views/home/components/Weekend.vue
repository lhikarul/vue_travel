<template>
    <div class="weekend">
        <div class="title">周末去哪兒</div>
        <ul>
            <router-link tag="li" :to="'/detail/' + item.Id" class="item" v-for="item of list" :key="item.Id">
                <img class="item-img" :src="item.Picture1" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.Name}}</p>
                    <p class="item-time">{{item.Opentime}}</p>
                    <button class="item-button">查看詳情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    props: {
        list: Array
    }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';

    .weekend {
        background: #eaeaea;
    }

    .title {
        padding: 10px;
        background: $color-primary;
        color: $color-white;
        text-align: center;
        font-size: 20px;
    }

    .item {
        padding: 10px;
        display: flex;
        background: $color-white;

        &:not(:last-child) {
            border-bottom: 1px solid #eaeaea;
        }

        &-img {
            width: 30%;
        }

        &-info {
            padding: 0 10px;
        }

        &-title {
            color: $text-primary;
        }

        &-time {
            margin-top: 5px;
            font-size: 14px;
            color: #4c3131;
        }

        &-button {
            margin-top: 15px;
            border: none;
            border-radius: 5px;
            padding: 5px 10px;
            color: $color-white;
            font-size: 12px;
            background: $color-primary;
            cursor: pointer;
            outline: none;
        }
    }

</style>
