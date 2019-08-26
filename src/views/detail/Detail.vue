<template>
    <div class="detail">
        <detail-banner :list="list"></detail-banner>
        <detail-header></detail-header>
        <detail-content :list="list"></detail-content>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailContent from './components/Content'
import axios from 'axios'

export default {
    name: 'Detail',
    components: {
        DetailHeader,
        DetailBanner,
        DetailContent
    },
    data () {
        return {
            list: {},
        }
    },
    methods: {
        getDetailInfo () {
            const params = {id: this.$route.params.id}
            axios.get('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97',params)
                .then(this.handleGetDataSucc)
        },
        handleGetDataSucc (res) {
            const id = this.$route.params.id;
            res = res.data;
            if (res.success) {
                let data = res.result.records;
                data = data.filter((item) => {
                    return item.Id === id;
                })
                this.list = data[0];
            }
        }
    },
    mounted () {

    },
    activated () {
        this.getDetailInfo();
    }
}
</script>

<style lang="scss" scoped>
    .detail {
        height: 1000px;
    }
</style>
