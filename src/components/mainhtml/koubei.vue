<template>
    <div>
      <scroller
      :on-refresh="refresh"
      :on-infinite="infinite">
          <div class="kContent">
            <sc>
              <x-header
                :left-options="{showBack:false}">
                <div slot="left">智博</div>
              </x-header>
            </sc>
            <div class="swiperScroll">
              <swiper
                :list="baseList"
                :auto="true"
                :loop="true"
                :interval="2000">
              </swiper>
            </div>
          </div>
      </scroller>
    </div>

</template>
<script>
  const baseList = [{
    url: 'javascript:',
    img: 'https://static.vux.li/demo/1.jpg',
    title: '送你一朵fua'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/2.jpg',
    title: '送你一辆车'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/3.jpg',
    title: '送你一次旅行'
  }]
  export default {
    data () {
      return {
        baseList: baseList
      }
    },
    components: {
    },
    methods: {
      refresh () {},
      infinite () {}
    }
  }
</script>
<style lang="less" scoped>
.kContent{
}
.swiperScroll{
}
</style>
