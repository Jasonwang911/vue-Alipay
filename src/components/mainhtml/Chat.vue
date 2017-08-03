<template>
    <div>
      <div class="cNav">
        <div class="ic">
          <i class="iconfont icon-zuojiantou"></i>
        </div>
        <div class="name">
          <span>蜡笔小新</span>
        </div>
        <div class="setting">
          <i class="iconfont icon-set-copy"></i>
        </div>
      </div>
      <chat-win ref="childMethod" @send="massageHandle"></chat-win>
      <div class="bottom">
        <div class="key">
          <i class="iconfont icon-luyin"></i>
        </div>
        <div class="input">
          <div class="content">
            <input id="onlyInput" type="text" placeholder="请输入内容" >
            <i class="iconfont icon-xiaolian"></i>
          </div>
        </div>
        <div class="add" @click="send">
          <i class="iconfont icon-xunzhao03"></i>
        </div>
      </div>
    </div>
</template>
<script>
import ChatWin from '../common/ChatWin.vue'
export default {
  data () {
    return {
      flags: false
    }
  },
  components: {
    ChatWin
  },
  methods: {
    send () {
      let oint = document.getElementById('onlyInput')
      let record = {
        'headLogo': require('@/assets/img/fengjing.png'),
        'isme': true,
        'tex': /^\s*$/.test(oint.value) ? '　' : oint.value,
        'date': this.format(new Date().getHours()) + ':' + this.format(new Date().getMinutes())
      }
      this.$refs.childMethod.addtest(record)
      oint.value = ''
    },
    massageHandle () {
      this.flags = !this.flags
    },
    format (str) {
      return str < 10 ? '0' + str : str
    }
  },
  created () {
    this.$emit('loadStart')
  },
  mounted () { // 数据请求之后一般放在这个里面
    console.log('组件已经全部更新完毕')
    this.$emit('loadFn')
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
    width: 7.2rem;
    height: .96rem;
    background-color: #1b82d2;
    .ic{
      flex:2;
      height: inherit;
      text-align: center;
      i{
        line-height: .96rem;
        font-size: .5rem;
        color: #fff;
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
        color: #fff;
        border-left: 1px solid rgba(255,255,255,0.8);
      }
    }
    .setting{
      flex: 2;
      text-align: center;
      height: inherit;
      i{
        line-height: .98rem;
        font-size: .5rem;
        color: #fff;
      }
    }
  }

  .bottom{
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 7.2rem;
    height: .95rem;
    background-color: #fff;
    border-top: 2px solid #e6e6e6;
    border-bottom: 2px solid #e0e0e0;
    text-align:center;
    line-height: .95rem;
    .key{
      flex: 2;
      height: inherit;
    }
    .input{
      flex: 11;
      height: inherit;
      .content{
        position:relative;
        input{
          margin-top: .14rem;
          width: 100%;
          height: .65rem;
          background: none;
          border-width: 0 0 1px 0;
          border-style: solid;
          border-color: #0080e6;
          padding: 0;
          font-size: .3rem;
          text-indent: .2rem;
        }
        i{
          position: absolute;
          right: .2rem;
          top: 0;
        }
      }
    }
    .add{
      flex: 2;
      height: inherit;
    }
    i{
      font-size: .6rem;
      color: #6e7379;
    }
  }
</style>
