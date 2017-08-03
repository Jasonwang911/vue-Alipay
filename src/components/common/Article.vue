<template>
    <div>
      <div class="art">

        <!-- 头部 start -->
        <div class="artNav clear">
          <div class="artLeft">
            <i class="icon iconfont icon-zuojiantou"></i>
          </div>
          <div class="artCenter"></div>
          <div class="artRight">
            <i class="icon iconfont icon-gengduo1"></i>
          </div>
        </div>
        <!-- 头部 end -->

      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>

  .art{
    width: 7.2rem;
  }

  .artNav{
    padding: .25rem 0;
    height: .96rem;
    border-bottom: 1px solid #e6e7e7;
    box-sizing: border-box;
    line-height: .48rem;
  }
  .artLeft{
    float: left;
    padding: 0 .12rem 0 .35rem;
    border-right: 1px solid #d9d9d9;
    i{
      font-size: .45rem;
      color: #0f8ee9;
    }
  }
  .artCenter{
    float: left;
  }
  .artRight{
    float: right;
    transform: rotate(90deg);
    i{
      padding: 0 .5rem;
      font-size: .35rem;
      color: #0f8ee9;
    }
  }

</style>
