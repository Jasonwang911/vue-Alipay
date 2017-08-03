<template>
    <div>
      <div class="contentC">
	      <div class="content">
	        <div class="mineLogo">
	          <div class="logoContent">
	            <img src="../../assets/img/lb.png" />
	            <i class="start"></i>
	          </div>
	        </div>
	        <div class="mineText">
	          <h3>小新</h3>
	          <p>1111111111@qq.com</p>
	        </div>
	        <div class="rightIcon">
	          <i class="icon iconfont icon-mjiantou"></i>
	        </div>
	      </div>
        <div>
          <mine-list :data="vip"></mine-list>
        </div>
        <div>
          <mine-list :data="money"></mine-list>
        </div>
        <div>
          <mine-list :data="other"></mine-list>
        </div>

        <div>
          <mine-list :data="last"></mine-list>
        </div>
      </div>
    </div>
</template>
<script>
import MineList from '../common/MineList.vue'
export default {
  data () {
    return {
      vip: [
        {
          'classi': 'icon iconfont icon-mayihuiyuan',
          'icon': 'color: #108ee9; font-size: .44rem;',
          'fst': '蚂蚁会员',
          'lst': '5736积分'
        }
      ],
      money: [
        {
          'classi': 'icon iconfont icon-zhangdan',
          'icon': 'color: #fc992c;',
          'fst': '账单',
          'lst': ''
        },
        {
          'classi': 'icon iconfont icon-Assets_03',
          'icon': 'color: #008fe0;',
          'fst': '总资产',
          'lst': '开启百万赔付保障'
        },
        {
          'classi': 'icon iconfont icon-yue',
          'icon': 'color: #008fe0;font-size: .45rem;top:-.02rem',
          'fst': '余额',
          'lst': '34979元'
        },
        {
          'classi': 'icon iconfont icon-yue1',
          'icon': 'color: #f15a4a;',
          'fst': '余额宝',
          'lst': ''
        },
        {
          'classi': 'icon iconfont icon-yinxingqia',
          'icon': 'color: #ffb415;font-size: .45rem;top:-.04rem',
          'fst': '银行卡',
          'lst': ''
        }
      ],
      other: [
        {
          'classi': 'icon iconfont icon-mayicaifulogo',
          'icon': 'color: #0985de;font-size: .45rem;',
          'fst': '蚂蚁财富',
          'lst': '定期产品热抢中'
        },
        {
          'classi': 'icon iconfont icon-zhimaxinyong1',
          'icon': 'color: #29ab91;font-size: .5rem;top:-.02rem',
          'fst': '芝麻信用',
          'lst': ''
        },
        {
          'classi': 'icon iconfont icon-baoxian1',
          'icon': 'color: #008fe0;font-size: .5rem;top:-.04rem;',
          'fst': '保险服务',
          'lst': ''
        },
        {
          'classi': 'icon iconfont icon-huabei1',
          'icon': 'color: #008fe0;font-size: .45rem;top:-.02rem;',
          'fst': '花呗',
          'lst': ''
        },
        {
          'classi': 'icon iconfont icon-jiebei1',
          'icon': 'color: #008fe0;font-size: .45rem;top:-.02rem;',
          'fst': '蚂蚁借呗',
          'lst': ''
        },
        {
          'classi': 'icon iconfont icon-zhanghuxinxiwangshang',
          'icon': 'color: #29ab91;font-size: .36rem;',
          'fst': '网商银行',
          'lst': ''
        }
      ],
      last: [
        {
          'classi': 'icon iconfont icon-aixinb',
          'icon': 'color: #f36a5c;font-size:.45rem;',
          'fst': '爱心捐款',
          'lst': ''
        },
        {
          'classi': 'icon iconfont icon-dianyingb',
          'icon': 'color: #f15a4a;top:-.04rem;',
          'fst': '娱乐宝',
          'lst': ''
        }
      ]
    }
  },
  components: {
    MineList
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
  .contentC{
    margin: .95rem 0;
  }
  .content{
  	width: 7.2rem;
    height: 1.78rem;
    padding-top: .14rem;
    display: flex;
    background-color: #1b82d2;
    .mineLogo{
      flex: 2;
      .logoContent{
        position: relative;
        width: 1.38rem;
        height: 1.38rem;
        margin-left: .28rem;
        img{
          width: inherit;
          height: inherit;
          box-sizing: border-box;
          border: 3px solid rgba(255,255,255,0.3);
          overflow: hidden;
          border-radius: .1rem;
        }
        i{
          position: absolute;
          bottom: -0.11rem;
          right: -0.11rem;
          z-index: 1;
          display: block;
          width: .42rem;
          height: .42rem;
          background: url("../../assets/img/start.png") no-repeat;
          background-size: contain;
          border-radius: 50%;
        }
      }
    }
    .mineText{
      flex: 10;
      width: 1rem;
      height: 1.38rem;
      text-indent: .2rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      h3{
        font-size: .32rem;
        color: #fff;
        line-height: .8rem;
        font-weight: normal;
      }
      p{
        font-size: .26rem;
        color: rgba(255,255,255,0.5);
      }
    }
    .rightIcon{
      flex: 2;
      width: 1rem;
      height: 1.38rem;
      line-height: 1.38rem;
      text-align: center;
      i{
        color: #fff;
        font-size: .33rem;
      }
    }

  }
</style>
