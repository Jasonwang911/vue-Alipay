<template>
    <div>
      <div class="mineTop">
        <div class="list"
             @touchstart="tstart(item,index)"
             @touchmove="tmove(item)"
             @touchend="tend(item)"
             :style="item.bgcolor"
             v-for="(item,index) in data">
          <div class="head">
            <img :src="item.headLogo" />
            <i v-if="item.new"></i>
          </div>
          <div class="text">
            <div class="content">
              <h4>{{item.title}}</h4>
              <p>{{item.massage}}</p>
            </div>
            <b class="time">{{item.time}}</b>
          </div>
        </div>
        <bomb-box v-if="flags" @send="massageHandle">
          <p @touchstart.stop="deleteHandle">删除</p>
          <p @touchstart.stop="cancelHandle">取消</p>
        </bomb-box>
      </div>
    </div>
</template>
<script>
  import BombBox from './BombBox.vue'
  let data = [
    {
      'headLogo': require('@/assets/img/zhima.png'),
      'title': '生活号',
      'massage': '您好货，天猫家电97折优惠！机会不容错过',
      'time': '昨天',
      'new': false
    },
    {
      'headLogo': require('@/assets/img/money.png'),
      'title': '支付助手',
      'massage': '转账成功',
      'time': '前天',
      'new': false
    },
    {
      'headLogo': require('@/assets/img/tfm.png'),
      'title': '蜡笔小新',
      'massage': '[转账]向你转账60.00元',
      'time': '今天',
      'new': true
    },
    {
      'headLogo': require('@/assets/img/tfm.png'),
      'title': '小白',
      'massage': '[转账]向你转账60.00元',
      'time': '今天',
      'new': true
    },
    {
      'headLogo': require('@/assets/img/tfm.png'),
      'title': '葫芦娃',
      'massage': '[转账]向你转账60.00元',
      'time': '今天',
      'new': true
    },
    {
      'headLogo': require('@/assets/img/tfm.png'),
      'title': '妖怪',
      'massage': '[转账]向你转账60.00元',
      'time': '今天',
      'new': true
    },
    {
      'headLogo': require('@/assets/img/tfm.png'),
      'title': '小孩',
      'massage': '[转账]向你转账60.00元',
      'time': '7月14日',
      'new': true
    },
    {
      'headLogo': require('@/assets/img/tfm.png'),
      'title': '小朋友',
      'massage': '[转账]向你转账60.00元',
      'time': '7月14日',
      'new': true
    },
    {
      'headLogo': require('@/assets/img/tfm.png'),
      'title': '蜡笔',
      'massage': '[转账]向你转账60.00元',
      'time': '7月18日',
      'new': true
    },
    {
      'headLogo': require('@/assets/img/tfm.png'),
      'title': '欣欣',
      'massage': '[转账]向你转账60.00元',
      'time': '今天',
      'new': true
    },
    {
      'headLogo': require('@/assets/img/tfm.png'),
      'title': '嘎嘎',
      'massage': '[转账]向你转账60.00元',
      'time': '今天',
      'new': true
    }
  ]
  export default {
    data () {
      return {
        data: data,
        flags: false,
        timer: null,
        index: null
      }
    },
    methods: {
      tstart (item, index) {
        let that = this
        if (item.bgcolor === undefined) {
          this.$set(item, 'bgcolor', '')
        }
        item.bgcolor = 'background-color: #bababa;'
        this.timer = setTimeout(function () {
          that.flags = true
          that.index = index
        }, 1000)
//        console.log(index)
      },
      tend (item) {
        clearTimeout(this.timer)
        this.index = null
        item.bgcolor = 'background-color: #fff;'
      },
      tmove (item) {
        clearTimeout(this.timer)
        this.index = null
        item.bgcolor = 'background-color: #fff;'
      },
      cancelHandle () {
        this.flags = !this.flags
      },
      deleteHandle () {
        if (!this.index) {
          this.data.splice(this.index, 1)
        }
        this.flags = !this.flags
      },
      massageHandle () {
        this.flags = !this.flags
      }
    },
    components: {
      BombBox
    }
  }
</script>
<style lang="less" scoped>
.list{
  transition: .2s;
  width: 100%;
  height: .96rem;
  padding: .15rem 0;
  border-bottom: 1px solid #f3f4f4;
  .head{
    position:relative;
    display: inline-block;
    width: .96rem;
    height: .96rem;
    margin-left: .24rem;
    i{
      position: absolute;
      right: -.1rem;
      top: -.1rem;
      display: block;
      width: .2rem;
      height: .2rem;
      border-radius: 50%;
      background: red;
    }
    img{
      width: inherit;
      height:inherit;
    }
  }
}
.text{
  position:relative;
  display: inline-block;
  width: 5.35rem;
  height: .96rem;
  margin-left: .2rem;
  .content{
    position: absolute;
    left: 0;
    top: 0;
    h4{
      line-height: .6rem;
      font-size: .28rem;
    }
    p{
      max-width: 5.35rem;
      font-size: .24rem;
      color: #a9a9a9;
      font-weight: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .time{
    position: absolute;
    right: 0;
    top: 0;
    font-size: .24rem;
    color: #a9a9a9;
    font-weight: normal;
  }
}
.mineTop{
  background-color: #fff;
}
</style>
