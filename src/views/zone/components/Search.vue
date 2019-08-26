<template>
    <div>
        <div class="search">
            <input class="search-input" type="text" placeholder="輸入區域名" v-model="keyword">
        </div>
        <div class="search-content" v-show="keyword" ref="search">
            <ul>
                <li class="search-item" v-for="(item,index) of list" :key="index" @click="handleZoneClick(item)">{{item}}</li>
                <li class="search-item" v-show="hasNoData">找不到符合的結果</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ZoneSearch',
    props: {
        zones: Array
    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    methods: {
        handleZoneClick (zone) {
            this.$store.commit('changeZone',zone);
            this.$router.push('/');
        }
    },
    computed: {
        hasNoData () {
            return !this.list.length;
        }
    },
    watch: {
        keyword () {
            if (this.timer) {
                clearTimeout(this.timer);
            }

            if (!this.keyword) {
                this.list = [];
                return;
            }

            this.timer = setTimeout(() => {
                const result = [];
                this.zones.forEach(value => {
                    if (value.indexOf(this.keyword) !== -1) {
                        result.push(value);
                    }
                })
                this.list = result;
            },100)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';

    .search {
        padding: 0 5px;
        height: 40px;
        background-color: $color-primary;

        &-input {
            padding: 0 10px;
            border-radius: 5px;
            border:none;
            box-sizing: border-box;
            width: 100%;
            height: 30px;
            line-height: 30px;
            text-align: center;
            outline: none;
        }

        &-content {
            position: absolute;
            top: 75px;
            left: 0;
            right: 0;
            bottom: 0;
            background: #eee;
            z-index: 1;
        }

        &-item {
            border-bottom: 1px solid #eaeaea;
            padding: 10px;
            background: #fff;
        }

    }

</style>
