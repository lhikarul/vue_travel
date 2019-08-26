<template>
    <div class="list">
        <div class="area">
            <div class="title">當前區域</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">{{this.currentZone}}</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title">熱門區域</div>
            <div class="button-list">
                <div class="button-wrapper" v-for="(zone,index) of hotZones" :key="index" @click="handleZoneClick(zone)">
                    <div class="button">{{zone}}</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title">所有區域</div>
            <div class="item-list">
                <div class="item" v-for="(zone,index) in zones" :key="index" @click="handleZoneClick(zone)">{{zone}}</div>
            </div>

        </div>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    name: 'ZoneList',
    props: {
        zones: Array,
        hotZones: Array
    },
    methods: {
        handleZoneClick (zone) {
            this.changeZone(zone);
            this.$router.push('/');
        },
        ...mapMutations(['changeZone'])
    },
    computed: {
        ...mapState({
            currentZone: 'zone'
        })
    }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';

.list {
    font-size: 14px;
}

.area {
    background: $color-white;
}

.title {
    padding: 5px;
    color: $text-primary;
    background: #eaeaea;
}

.button-list {
    padding: 10px;
    overflow: hidden;

    .button-wrapper {
        float: left;
        width: 33.3%;
    }

    .button {
        margin: 5px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 3px 0 ;
        text-align: center;
        cursor: pointer;
    }

}

.item-list {
    padding: 10px;

    .item {
        padding: 10px;
        cursor: pointer;
    }

    .item:not(:last-child) {
        border-bottom: 1px solid #eaeaea;
    }
}

</style>
