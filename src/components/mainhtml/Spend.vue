<template>
    <div>
      <div class="sNav">
        <div class="cNav">
          <div class="ic">
            <i class="iconfont icon-zuojiantou"></i>
          </div>
          <div class="name">
            <span>花呗</span>
          </div>
          <div class="setting">
            <i class="icon iconfont icon-message"></i>
          </div>
        </div>

        <!--<div class="sNavBottom">-->
          <!--<div class="sameLi actClass">-->
            <!--<i class="icon iconfont icon-huabei"></i>-->
            <!--<p>我的花呗</p>-->
          <!--</div>-->
          <!--<div class="sameLi">-->
            <!--<i class="icon iconfont icon-mayihuiyuan"></i>-->
            <!--<p>花呗权益</p>-->
          <!--</div>-->
          <!--<div class="sameLi">-->
            <!--<i class="icon iconfont icon-shangpin"></i>-->
            <!--<p>分期商品</p>-->
          <!--</div>-->
          <!--<div class="sameLi">-->
            <!--<i class="icon iconfont icon-shezhi"></i>-->
            <!--<p>设置</p>-->
          <!--</div>-->
        <!--</div>-->

      </div>
      <div class="min-scr">
        <scroller
        :on-refresh="refresh"
        refreshText=""
        ref="myRed"
        :on-infinite="infinite">
          <spend-index :infiniteDate="infiniteDate"></spend-index>
        </scroller>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
// import SpendIndex from '../common/SpendIndex.vue'
let SpendIndex = (resolve) => {
  return require.ensure([], () => {
    resolve(require('../common/SpendIndex.vue'))
  })
}
let initload = false
export default {
  data () {
    return {
      infiniteDate: [
        {
          'img': require('@/assets/img/add1.png'),
          'text': '立即抢购'
        }
      ]
    }
  },
  components: {
    SpendIndex
  },
  mounted () { // 数据请求之后一般放在这个里面
    console.log('组件已经全部更新完毕')
    this.$emit('loadFn')
    initload = true
  },
  created () {
    this.$emit('loadStart')
  },
  methods: {
    infinite () {
      let that = this
      if (!initload) {
        return
      }
      axios.get('http://easy-mock.com/mock/597ea4e4a1d30433d8423c46/more/list/more/list')
      .then(function (response) {
        setTimeout(function () {
          that.infiniteDate = that.infiniteDate.concat(response.data)
          that.$refs.myRed.finishInfinite()
          console.log('上拉加载')
        }, 2000)
      })
    },
    refresh () {
      console.log('下拉刷新')
      this.$refs.myRed.finishPullToRefresh()
    }
  }
}
</script>

<style lang="less" scoped>

  .cNav{
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    width: 100%;
    height: .96rem;
    background-color: #fff;
    border-bottom: 1px solid #e6e7e7;
    .ic{
      flex:2;
      height: inherit;
      text-align: center;
      i{
        line-height: .96rem;
        font-size: .5rem;
        color: #088ae9;
      }
    }
    .name{
      flex:11;
      position: relative;
      height: inherit;
      span{
        position: absolute;
        left: 0;
        top: .28rem;
        display: block;
        height: .4rem;
        padding-left: .26rem;
        font-size: .3rem;
        color: #191919;
        border-left: 1px solid #d9d9d9;
      }
    }
    .setting{
      flex: 2;
      text-align: center;
      height: inherit;
      i{
        line-height: .98rem;
        font-size: .5rem;
        color: #0c8ce9;
      }
    }
  }
.sNav{
  width: 7.2rem;
  .sNavTop{
    width: inherit;
    height: .96rem;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000;
  }
  .sNavBottom{
    display: flex;
    width: inherit;
    height: .96rem;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #e6e7e7;
    background-color: #ff6400;
    .sameLi{
      flex: 1;
      text-align: center;
      height: inherit;
      background-color: #fff;
      i{
        font-size: .5rem;
        color: #949494;
        position: relative;
        top: -0.01rem;
      }
      p{
        position: relative;
        top: -0.12rem;
        color: #949494;
      }
    }
    .actClass{
      i,p{
        color: #0c8ce9;
      }
    }
  }
}
</style>
