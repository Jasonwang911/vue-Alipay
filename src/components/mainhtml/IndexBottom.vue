<template>
    <div>
      <router-view @loadFn="load" @loadStart="startLoad"></router-view>
      <div class="bottom">
        <div class="li" id="li">
          <router-link exact tag="div" to="/" class="liCont">
              <i class="icon iconfont icon-zhifubao1"></i>
              <p>首页</p>
          </router-link>
          <router-link tag="div" to="/Spend" class="liCont ">
            <i class="icon iconfont icon-huabei"></i>
            <p>花呗</p>
          </router-link>
          <router-link tag="div" to="/Friend" class="liCont">
            <i class="icon iconfont icon-pengyou" style="font-size: .6rem; position: relative; top: -.08em"></i>
            <p style="top: -0.3rem;">朋友</p>
          </router-link>
          <router-link tag="div" to="/Mine" class="liCont">
            <i class="icon iconfont icon-qian"></i>
            <p>我的</p>
          </router-link>
        </div>
      </div>

      <!-- loading start -->
      <div v-show="loading">
        <div class="Cover">
          <div class="scroll">
            <div class="spinner"></div>
          </div>
        </div>
      </div>
      <!-- loading end -->

    </div>
</template>
<script>
export default {
  prop: ['actIndex'],
  data () {
    return {
      loading: true
    }
  },
  methods: {
    load () {
      let that = this
      setTimeout(function () {
        that.loading = false
        console.log(this.loading)
      }, 1000)
    },
    startLoad () {
      this.loading = true
    }
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
.Cover{
  position:fixed;
  left: 0;
  top: 0;
  z-index: 90000000;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
  .scroll{
    .spinner {
      width: 80px;
      height: 80px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('../../assets/img/webxiaobao.jpg') no-repeat;
      background-size: contain;
      margin: auto;
      -webkit-animation: rotateplane 1.2s infinite ease-in-out;
      animation: rotateplane 1.2s infinite ease-in-out;
    }

    @-webkit-keyframes rotateplane {
      0% { -webkit-transform: perspective(120px) }
      50% { -webkit-transform: perspective(120px) rotateY(180deg) }
      100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
    }

    @keyframes rotateplane {
      0% {
        transform: perspective(120px) rotateX(0deg) rotateY(0deg);
        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
      } 50% {
          transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
          -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
        } 100% {
            transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
            -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
          }
    }
  }
}
.bottom{
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: .96rem;
  background-color: #fafbfe;
  border-top:1px solid #e1e1e1;
  .li{
    display: flex;
    .liCont{
      flex: 1;
      text-align: center;
    color: #888;
      i{
       font-size: .5rem;
      }
      p{
        position: relative;
        top: -.17rem;
      }
    }
    .act{
      i,p{
        color: #29a1f7;
      }
    }
  }
}

</style>
