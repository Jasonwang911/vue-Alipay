<template>
    <div>
      <div class="paddingDouble">
          <div class="indexTop">
            <div class="indexNav">
              <div class="show">
                <div class="inputBox">
                  <i class="fd icon iconfont icon-fangdajing"></i>
                  <input type="text" value="共享单车" placeholder="共享单车">
                  <i class="ht icon iconfont icon-huatong"></i>
                </div>
                <div class="menuL">
                  <p><i class="icon iconfont icon-tongxunlu"></i></p>
                  <p><i class="icon iconfont icon-tianjia"></i></p>
                </div>
              </div>

              <!-- 当下滑的时候会加载这个div START -->
              <div class="fadeOut" v-if="fade">
                <div class="li">
                  <i class="icon iconfont icon-saoyisao"></i>
                </div>
                <div class="li">
                  <i style="font-size: .6rem;" class="icon iconfont icon-saomazhifudingdan"></i>
                </div>
                <div class="li">
                  <i style="font-size: .6rem;" class="icon iconfont icon-shoukuan"></i>
                </div>
                <div class="li">
                  <i style="position: relative; top: -0.06rem;" class="icon iconfont icon-fangdajing"></i>
                </div>
                <div class="li"></div>
                <div class="li"></div>
                <div class="li">
                  <i class="icon iconfont icon-tianjia"></i>
                </div>
              </div>
              <!-- 当下滑的时候会加载这个div END -->

            </div>
          </div>

        <scroller class="min-scr"
          :on-refresh="refresh"
          ref="myRef">
          <!-- refreshText="加载中......" -->
            <div class="bigMenu">
              <div class="li">
                <i class="icon iconfont icon-saoyisao"></i>
                <p>扫一扫</p>
              </div>
              <div class="li">
                <i style="font-size: .9rem; position: relative; top: -.18rem;" class="icon2 iconfont icon-saomazhifudingdan"></i>
                <p style="position: relative; top: -.38rem">付钱</p>
              </div>
              <div class="li">
                <i style="font-size: .88rem; position: relative; top: -.18rem;" class="icon iconfont icon-shoukuan"></i>
                <p style="position: relative; top: -.37rem">收钱</p>
              </div>
              <div class="li">
                <i class="icon iconfont icon-hongbao"></i>
                <p>卡包</p>
              </div>
            </div>


            <!-- 首页导航 start -->
            <div class="menuMore">
              <ul>
                <li v-for="item in menuMoreDate">
                  <div class="pi">
                    <i :style="item.iConP" :class="item.iCon"></i>
                    <p :style="item.textP">{{item.text}}</p>
                  </div>
                </li>
              </ul>
              <div class="botm"></div>
            </div>
            <!-- 首页导航 end -->

              <!-- 信息展示页面 start -->
              <notice :data="messAge"></notice>
              <!-- 信息展示页面 end -->
            </scroller>

            <div class="mineBottom"><p>我是有底线的</p></div>
          </div>
      </div>
    </div>
</template>
<script>
import axios from 'axios'
let menuMoreDate = [
  {
    'iCon': 'icon iconfont icon-zhuanzhang',
    'iConP': 'color: #2995e3;',
    'text': '转账',
    'textP': ''
  },
  {
    'iCon': 'icon iconfont icon-xinyongqia',
    'iConP': 'font-size: .5rem;color: #f7bf78;',
    'text': '信用卡还款',
    'textP': 'position:relative; top:.03rem'
  },
  {
    'iCon': 'icon iconfont icon-shouji',
    'iConP': 'color: #f7bf78;',
    'text': '充值中心',
    'textP': ''
  },
  {
    'iCon': 'icon iconfont icon-yue1',
    'iConP': 'color:#f15747;',
    'text': '余额宝',
    'textP': ''
  },
  {
    'iCon': 'icon iconfont icon-fapiao',
    'iConP': 'color:#f15747;',
    'text': '淘票票',
    'textP': ''
  },
  {
    'iCon': 'icon iconfont icon-iconfontqichefuwu',
    'iConP': 'color:#f39825;',
    'text': '滴滴出行',
    'textP': ''
  },
  {
    'iCon': 'icon iconfont icon-chengshi',
    'iConP': 'color:#188ce0;',
    'text': '城市服务',
    'textP': ''
  },
  {
    'iCon': 'icon iconfont icon-zhimaxinyong',
    'iConP': 'color: #56bda8;',
    'text': '芝麻信用',
    'textP': ''
  },
  {
    'iCon': 'icon iconfont icon-huochepiao',
    'iConP': 'color: #2990dc;',
    'text': '火车票机票',
    'textP': ''
  },
  {
    'iCon': 'icon iconfont icon-accounting-voucher',
    'iConP': 'color: #f49a2a;',
    'text': '记账本',
    'textP': ''
  },
  {
    'iCon': 'icon iconfont icon-mobaidanche',
    'iConP': 'color: #178ce0;font-size: .8rem;',
    'text': '共享单车',
    'textP': 'position: relative; top:-.1rem;'
  },
  {
    'iCon': 'icon iconfont icon-gengduo1',
    'iConP': 'color:#bebebe;',
    'text': '更多',
    'textP': ''
  }
]
let messAge = [
  {
    'imgHead': require('../../assets/img/newsloading/newsTop1.jpg'),
    'title': '我的健康.天气关怀',
    'time': '13:43',
    'lager': '高温天气送健康',
    'text': '上海市今日气温超过35度',
    'more': '1颗健康豆待领取',
    'do': '立即查看'
  },
  {
    'imgHead': require('../../assets/img/newsloading/newsTop2.jpg'),
    'title': '我的淘宝',
    'time': '13:43',
    'lager': '高温天气送健康',
    'text': '上海市今日气温超过35度',
    'more': '',
    'do': '立即查看'
  },
  {
    'imgHead': require('../../assets/img/newsloading/newsTop3.jpg'),
    'title': '我的健康.天气关怀',
    'time': '13:43',
    'lager': '高温天气送健康',
    'text': '上海市今日气温超过35度',
    'more': '',
    'do': '立即查看'
  },
  {
    'imgHead': require('../../assets/img/newsloading/newsTop4.jpg'),
    'title': '我的健康.天气关怀',
    'time': '13:43',
    'lager': '高温天气送健康',
    'text': '上海市今日气温超过35度',
    'more': '',
    'do': '立即查看'
  },
  {
    'imgHead': require('../../assets/img/xin.jpg'),
    'title': '我的健康.天气关怀',
    'time': '13:43',
    'lager': '高温天气送健康',
    'text': '上海市今日气温超过35度',
    'more': '',
    'do': '立即查看'
  }
]
import Notice from '../common/Notice.vue'
export default {
  data () {
    return {
      menuMoreDate: menuMoreDate,
      messAge: messAge,
      fade: false,
      reFresh: true
    }
  },
  components: {
    Notice
  },
  methods: {
    refresh () {
      if (this.reFresh) {
        axios({ // mock admin: xiaobai psw: 123456
          method: 'get',
          url: 'http://easy-mock.com/mock/59793d0ca1d30433d83ec0b7/ali/wa/data=2',
          params: {
            data: 'qq.213787432'
          }
        })
        .then((response) => {
          this.messAge = response['data']['data']
        })
        this.reFresh = false
      } else {
        this.reFresh = true
        this.messAge = messAge
      }
      this.$refs.myRef.finishPullToRefresh()
    }
  },
  beforeCreate () {
    console.log('我正在创建')
  },
  created () {
    console.log('已经创建')
    this.$emit('loadStart')
  },
  mounted () { // 数据请求之后一般放在这个里面
    console.log('组件已经全部更新完毕')
    this.$emit('loadFn')
  },
  beforeRouteEnter (to, from, next) {
    console.log('进入路由')
    next((vm) => {
    })
  }
}

</script>
<style lang="less" scoped>
.paddingDouble{
  padding: .96rem 0;
}
.indexTop{
  position:fixed;
  top:0;
  left:0;
  z-index: 999;
  width: 100%;
  height: .96rem;
  background-color: #1b82d2;
  .indexNav{
    width: inherit;
    height: inherit;
    .show{
      box-sizing: border-box;
      height: .96rem;
      padding: .24rem 0;
      position:relative;
      .menuL{
        position: absolute;
        right: 0;
        top: 0;
        display:flex;
        width: 1.6rem;
        height: .96rem;
        p{
          flex: 1;
          text-align: center;
          line-height: .96rem;
          i{
            position: relative;
            top: .02rem;
            font-size: .4rem;
            color: #fff;
          }
        }
      }
      .inputBox{
        position: relative;
        width: 5.24rem;
        height: .5rem;
        background-color: #1873b9;
        border-radius: .1rem;
        margin-left: .24rem;
        box-sizing:border-box;
        line-height: .5rem;
        .fd{
          line-height: .58rem;
          color: #fff;
          padding: 0 .1rem 0 .25rem;
        }
        input{
          height: .5rem;
          padding: 0;
          margin: 0;
          border: 0;
          font-size: .3rem;
          background: none;
          color: #fff;
        }
        .ht{
          position: absolute;
          right: .2rem;
          top: .07rem;
          color: #fff;
          font-size: .3rem;
          opacity: .6;
        }
      }
    }
    .fadeOut{
      background-color: #1b82d2;
      display: flex;
      width: 7.2rem;
      height: .96rem;
      line-height: .96rem;
      text-align: center;
      .li{
        flex:1;
        i{
          color: #fff;
          font-size: .5rem;
        }
      }
    }
  }
}
.bigMenu{
  display: flex;
  width: 7.2rem;
  height: 2.08rem;
  text-align:center;
  background-color: #1b82d2;
  .li{
    padding-top: .35rem;
    color: #fff;
    flex:1;
    i{
      font-size: .65rem;
    }
    p{
      font-size: .3rem;
    }
  }
}
.menuMore{
  width: 7.2rem;
  background-color:#fff;
  ul{
  }
  li{
    display: inline-flex;
    width: 1.8rem;
    height: 1.8rem;
    text-align: center;
    .pi{
      margin: auto;
      i{
        font-size: .6rem;
      }
      p{
        color: #161616;
        font-size: .2rem;
      }
    }
  }
  .botm{
    height: .2rem;
    background-color: #e7e7e7;
  }
}
.mineBottom{
  width: 100%;
  margin: 0 auto;
  position:fixed;
  bottom: .96rem;
  left: 0;

  z-index: -1;
  p{
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    color: #999fa7;
    background-color: #f9f9f9;
    font-size: .3rem;
  }
}
.min-scr{
  margin-top: .96rem;
}
</style>
