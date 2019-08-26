<template>
    <div class="recommend">
        <div class="title" id="recommend">熱銷推薦</div>
        <ul>
            <router-link class="item" tag="li" :to="'/detail/' + item.Id" v-for="item of pages" :key="item.Id">
                <img class="item-img" :src="item.Picture1" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.Name}}</p>
                    <div class="item-desc">{{item.Description.slice(0,50)}}...</div>
                    <button class="item-button">查看詳情</button>
                </div>
            </router-link>
        </ul>

        <div class="pagination-box">
            <div class="pagination">
                <a href="#recommend" class="hover" :class="{'pagination-active': currentPage === index + 1}" v-for="(item,index) of totalPages" :key="index" @click="change(index + 1)">{{index + 1}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
        list: Array
    },
    data () {
        return {
            min: '',
            max: '',
            currentPage: 1
        }
    },
    methods: {
        change (page) {

                const perPageItems = 3;
                const totalPages = this.totalPages;

                this.currentPage = page || 1;

                if (this.currentPage > totalPages){
                    currentPage = totalPages;
                }
                
                this.min = (this.currentPage * perPageItems) - perPageItems;
                this.max = (this.currentPage * perPageItems)
        }
    },
    computed: {
        pages () {
            const pages = [];
            this.list.forEach((item,index) => {
                pages.push(item)
            })
            const min = this.min || 0;
            const max = this.max || 3;

            return pages.slice(min,max);
        },
        totalPages () {
            const totalPages = Math.ceil(this.list.length / 3)
            return totalPages;
        }
    },
    mounted () {
        this.pages
    }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';

    .recommend {
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
        padding: 25px 40px;
        background: $color-white;

        &:not(:last-child) {
            margin-bottom: 15px;
        }

        &-title {
            padding: 5px;
            color: $text-primary;
            font-size: 20px;
            text-align: center;
        }

        &-img {
            width: 100%;
            max-height: 250px;
        }

        &-desc {
            line-height: 1.5;
        }

        &-button {
            margin-top: 5px;
            border: none;
            border-radius: 5px;
            padding: 10px;
            color: $color-white;
            font-size: 16px;
            background: $color-primary;
            cursor: pointer;
            outline: none;
        }

    }

    .pagination-box {
        text-align: center;
    }

    .pagination {
        margin: 15px 0;
        // background: $color-primary;
        background: $color-white;
        display: inline-block;
    }

    .pagination a {
        padding: 8px 16px;
        float: left;
        text-decoration: none;
    }

    .pagination-active, .hover:hover {
        background: $color-primary;
        color: $color-white;
    }

</style>
