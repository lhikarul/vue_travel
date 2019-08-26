<template>
    <div>
        <HomeHeader></HomeHeader>
        <HomeSwiper></HomeSwiper>
        <HomeIcons :list="iconsList"></HomeIcons>
        <HomeRecommend :list="recommendList"></HomeRecommend>
        <HomeWeekend :list="weekendList"></HomeWeekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import {mapState} from 'vuex'

const debug = process.env.NODE_ENV !== 'production';

export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data () {
        return {
            lastZone: '',
            iconsList: [],
            recommendList: [],
            weekendList: []
        }
    },
    methods: {
        getHomeInfo () {
            const url   = debug ? '/api/index.json' : '/static/index.json';
            axios.get(url)
                .then(this.getHomeInfoSucc)
                .then(this.getTravelInfo)
        },
        getHomeInfoSucc (res) {
            res = res.data;
            if (res.msg && res.data) {
                const data = res.data;
                this.iconsList = data.iconsList;
            }
        },
        getTravelInfo () {
            axios.get('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97').then(res => {
                var a = res.data.result.records.filter(item => item.Zone === this.zone);
                this.recommendList = res.data.result.records.filter(item => item.Zone === this.zone)
                this.weekendList   = res.data.result.records.filter(item => item.Zone === this.zone).slice(-3)
            })
        }
    },
    computed: {
        ...mapState(['zone'])
    },
    mounted () {
        this.lastZone = this.zone;
        this.getHomeInfo();
    },
    activated () {
        if (this.lastZone !== this.zone) {
            this.lastZone = this.zone;
            this.getHomeInfo()
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
