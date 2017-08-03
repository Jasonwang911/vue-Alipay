<template>
    <div>
      <div class="cover" @touchstart="displayNone">
        <div class="Content">
          <div style="border-radius: .1rem; overflow: hidden;">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      data: {
      }
    }
  },
  components: {
  },
  methods: {
    displayNone () {
      this.$emit('send')
    }
  }
}
</script>
<style lang="less" scoped>
.cover{
  position: fixed;
  left: 0;
  top: 0;
  width: 7.2rem;
  height: 100%;
  z-index: 9999999;
  background-color: rgba(0,0,0,0.7);
  .Content{
    margin: 46% .4rem 0;
    border-radius: .1rem;
    background-color: #fff;
    font-size: .2rem;
    color: #838383;
    p{
      padding: .26rem 0;
      text-indent: .5rem;
      border-bottom: 1px solid #f0f0f0;
      box-sizing: border-box;
      font-size: .3rem;
      color: #000;
    }
  }
}
</style>
