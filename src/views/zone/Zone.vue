<template>
    <div>
        <ZoneHeader></ZoneHeader>
        <ZoneSearch :zones="zones"></ZoneSearch>
        <ZoneList :zones="zones" :hotZones="hotZones"></ZoneList>
    </div>
</template>

<script>
import axios from 'axios'
import ZoneHeader from './components/Header'
import ZoneSearch from './components/Search'
import ZoneList from './components/List'


export default {
    name: 'Zone',
    components: {
        ZoneHeader,
        ZoneSearch,
        ZoneList
    },
    data () {
        return {
            zones: [],
            hotZones: ["三民區","苓雅區","新興區","前金區","楠梓區"],
        }
    },
    methods: {
        getZonesInfo () {
            axios.get('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97')
                .then(res => {

                    const zones = [];
                    const data = res.data.result.records.forEach(filterZone)

                    function filterZone (item,index) {
                        if (!zones.includes(item.Zone)) {
                            zones.push(item.Zone);
                        }
                    }

                    this.zones = zones;
                })
        }
    },
    mounted () {
        this.getZonesInfo();
    }
}
</script>

