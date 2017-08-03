<template>
    <div>
      <div class="mine">
        <div class="mineTop">
          <span>我的</span>
          <i></i>
          <em>设置</em>
        </div>
        <scroller>
          <mine-content></mine-content>
          <div style="padding-bottom:.96rem;"></div>
        </scroller>
        <div class="mineBottom"></div>
      </div>
    </div>
</template>
<script>
import MineContent from '../common/MineContent.vue'
export default {
  data () {
    return {}
  },
  created () {
    this.$emit('loadStart')
  },
  components: {
    MineContent
  },
  mounted () { // 数据请求之后一般放在这个里面
    console.log('组件已经全部更新完毕')
    this.$emit('loadFn')
  }
}
</script>
<style lang="less" scoped>
  .mine{
  transition: .4s;
    .mineTop{
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      height: .96rem;
      width: 100%;
      background-color: #1b82d2;
      display: flex;
      line-height: .96rem;
      span,em{
        flex: 2;
        width: .96rem;
        height: .96rem;
        color: #fff;
        font-size: .28rem;
        text-align: center;
      }
      i{
        flex: 10;
      }
    }
    .mineBottom{
      position: fixed;
      bottom: 0;
      left: 0;
      width: 7.2rem;
      height: .96rem;
      background-color: aquamarine;
    }
  }
</style>
