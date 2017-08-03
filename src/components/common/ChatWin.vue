<template>
    <div class="chatWinP">
      <div class="ChatWin" @touchmove="cancelMove">
        <div v-for="(item,index) in data">
          <p v-if="item.date!=''" class="theFirst">{{item.date}}</p>
          <div class="same clear" :class="{ 'mine': item.isme , 'other': !item.isme}">
            <div class="headLogo">
              <img :src="item.headLogo" />
            </div>
            <div class="text"
               :index="index"
               @touchstart="cellStart(index)"
               @touchend="cellEnd"
               @touchmove="cellMove"
            >
              <span>{{item.tex}}</span>
              <em></em>
            </div>
          </div>
        </div>
      </div>
      <bomb-box v-if="flags" @send="massageHandle">
        <p @touchstart.stop="deleteHandle">删除</p>
        <p @touchstart.stop="cancelHandle">取消</p>
      </bomb-box>
    </div>
</template>
<script>
  let data = [
    {
      'headLogo': require('@/assets/img/fengjing.png'),
      'isme': false,
      'tex': '其实你是猪~',
      'date': '10月18日'
    },
    {
      'headLogo': require('../../assets/img/money.png'),
      'isme': true,
      'tex': '你才是猪',
      'date': '昨天'
    },
    {
      'headLogo': require('@/assets/img/fengjing.png'),
      'isme': false,
      'tex': '你全家都是猪',
      'date': ''
    },
    {
      'headLogo': require('../../assets/img/money.png'),
      'isme': true,
      'tex': '你就是猪,死胖子！',
      'date': '昨天'
    },
    {
      'headLogo': require('@/assets/img/fengjing.png'),
      'isme': false,
      'tex': '你是猪,哇咔咔~',
      'date': ''
    },
    {
      'headLogo': require('../../assets/img/money.png'),
      'isme': true,
      'tex': '我告诉你妈，你骂人！',
      'date': '昨天'
    },
    {
      'headLogo': require('@/assets/img/fengjing.png'),
      'isme': false,
      'tex': '哇哦。好怕怕~~~去吧！死猪',
      'date': ''
    },
    {
      'headLogo': require('../../assets/img/money.png'),
      'isme': true,
      'tex': '我允许你先跑20米,死胖子,死胖子,死胖子,死胖子,死胖子,死胖子',
      'date': '昨天'
    }
  ]
  import BombBox from '../common/BombBox.vue'
  export default {
    props: ['sendDate'],
    data () {
      return {
        data: data,
        index: null,
        flags: false
      }
    },
    components: {
      BombBox
    },
    methods: {
      cellStart (index) {
        let that = this
        clearTimeout(this.timer)
        this.timer = setTimeout(function () {
          console.log('长按执行地方')
          that.$emit('send')
          that.flags = !that.flags
          that.index = index
        }, 1000)
        console.log('开始触摸')
      },
      cellEnd () {
        clearTimeout(this.timer)
        console.log('结束触摸')
      },
      cellMove () {
        clearTimeout(this.timer)
        console.log('移动ing')
      },
      cancelHandle () {
        this.flags = !this.flags
      },
      deleteHandle () {
        this.data.splice(this.index, 1)
        this.index = null
        this.flags = !this.flags
      },
      massageHandle () {
        this.flags = !this.flags
      },
      addtest (index) {
        console.log('执行子组件的函数')
        data.push(index)
        let ChatWin = document.getElementsByClassName('ChatWin')[0]
        ChatWin.style.cssText = 'position: fixed;bottom: 0;left:0;'
      },
      cancelMove () {
        let ChatWin = document.getElementsByClassName('ChatWin')[0]
        ChatWin.style.cssText = 'position: static;'
      }
    }
  }
</script>
<style lang="less" scoped>
  .chatWinP{
    position: absolute;
    top: 0;
    left: 0;
    overflow-y: scroll;
    height: 100%;
    background-color: #f2f2f2;
  }
  .theFirst{
    text-align: center;
    font-size: .26rem;
    padding: .3rem 0 .1rem;
    color: #7d7d7d;
  }
  .ChatWin{
    transition: .5s;
    width: 7.2rem;
    overflow-x: hidden;
    padding:.96rem .15rem 1.6rem;
    box-sizing:border-box;
    .same{
      width: 100%;
      margin-top: .2rem;
      .headLogo{
        width: .8rem;
        height: .8rem;
        border-radius: .05rem;
        border: 1px solid #dbdbdb;
        overflow:hidden;
        box-sizing:border-box;
        img{
          width: inherit;
          height: inherit;
        }
      }
      .text{
        position: relative;
        max-width: 4.98rem;
        padding: .22rem;
        border-radius: .08rem;
        box-sizing:border-box;
        span{
          font-size: .3rem;
        }
      }

    }

    .other{
      .headLogo{
        margin-right: .18rem;
        float: left;
        img{
          float: left;
        }
      }
       .text{
         background-color: #fff;
         float: left;
         color: #a2a2a2;
          border:1px solid #dedede;
          em{
            display: block;
            width: .12rem;
            height: .25rem;
            background: #f2f2f2 url('../../assets/img/angel.png') no-repeat;
            background-size: contain;
            position: absolute;
            left: -0.12rem;
            top: .24rem;
            z-index: 19;
          }
       }
    }
    .mine{
      .headLogo{
        margin-left: .18rem;
        float: right;
        img{
          float: right;
        }
      }
      .text{
        float: right;
        background-color: #4ca1f6;
        color: #fff;
        em{
          display: block;
          border-width: .2rem .2rem .2rem .2rem;
          border-style: solid;
          border-color: transparent transparent transparent #4ca1f6;
          position: absolute;
          right: -0.32rem;
          top: .24rem;
          width: 0;
          height: 0;
        }

      }
    }
  }
</style>
