<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            },
            list: [
                {
                    id: '01',
                    imgUrl: 'https://previews.123rf.com/images/studioworkstock/studioworkstock1606/studioworkstock160600136/58099463-%E3%83%A8%E3%83%BC%E3%83%AD%E3%83%83%E3%83%91%E3%81%B8%E3%82%88%E3%81%86%E3%81%93%E3%81%9D%E3%80%81%E3%83%95%E3%83%A9%E3%83%83%E3%83%88%E3%81%AE%E3%83%99%E3%82%AF%E3%83%88%E3%83%AB%E5%9B%B3%E3%82%92%E6%97%85%E8%A1%8C%E4%B8%96%E7%95%8C%E3%81%AE%E6%A6%82%E5%BF%B5%E3%81%AB%E6%97%85%E8%A1%8C%E3%81%97%E3%81%BE%E3%81%99%E3%80%82.jpg'
                },
                {
                    id: '02',
                    imgUrl: 'https://previews.123rf.com/images/mikalaimanyshau/mikalaimanyshau1608/mikalaimanyshau160800024/60724377-voyage-au-monde-trip-to-mondiale-road-trip-tourisme-valise-avec-des-rep%C3%A8res-publicit%C3%A9-sur-le-web-banni%C3%A8re-.jpg'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

.swiper-img {
    width: 100%;
    height: 40vh;
}

</style>
