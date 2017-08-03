<template>
    <div>
      <div class="cover">
        <div class="thf-navTop">
          <span><i>朋友</i></span>
          <strong>
            <i class="icon iconfont icon-fangdajing"></i>
            <i class="icon iconfont icon-tongxunlu"></i>
            <i class="icon iconfont icon-tianjia"></i>
          </strong>
        </div>

        <scroller>
          <div style="margin-top: .96rem;"></div>
          <fmessage></fmessage>
          <div style="padding-bottom: 1.92rem;"></div>
        </scroller>

      </div>
    </div>
</template>

<script>
import Fmessage from '../common/Fmessage.vue'
export default {
  components: {
    Fmessage
  },
  mounted () { // 数据请求之后一般放在这个里面
    console.log('组件已经全部更新完毕')
    this.$emit('loadFn')
  },
  created () {
    this.$emit('loadStart')
  }
}
</script>

<style lang="less" scoped>
  .cover{
    padding: .96rem 0;
  }
    .thf-navTop{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        display:flex;
        width: 100%;
        height: .96rem;
        background-color: #1b82d2;
      span{
        flex: 3;
        height: inherit;
        text-align: center;
        i{
          line-height: .96rem;
          font-size: .35rem;
          color: #fff;
        }
      }
      strong{
        flex: 13;
        text-align: right;
        font-weight: normal;
        i{
          display: inline-block;
          line-height: .96rem;
          font-size: 0.4rem;
          color: #fff;
          padding: 0 .25rem;
        }
      }
      i{
        font-style: normal;
      }
    }
</style>
