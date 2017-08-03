<template>
    <div>
      <div class="fixBottom">
        <div v-for="item in data">
          <div class="notice">
            <div class="content">
              <div class="noTop">
                <div class="icon">
                  <img :src="item.imgHead">
                </div>
                <div class="noText">
                  <p>{{item.title}}</p>
                  <p><span>{{item.time}}</span></p>
                </div>
                <div class="more"><i class="icon iconfont icon-gengduo1"></i></div>
              </div>

              <div class="noMassage">
                <h2>{{item.lager}}</h2>
                <h4>{{item.text}}</h4>
                <span>{{item.more}}</span>
              </div>

            </div>
          </div>
          <div class="noBottom">
            <p>{{item.do}}</p>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    props: ['data'],
    data () {
      return {
      }
    }
  }
</script>
<style lang="less" scoped>
  .notice{
    background-color: #fff;
    width: 7.2rem;
    box-sizing: border-box;
    padding: .25rem;
    .noTop{
      position: relative;
      width: inherit;
      height: .6rem;
      overflow: hidden;
      display: flex;
      .icon{
        width: .54rem;
        height: .54rem;
        img{
          width: inherit;
          height: inherit;
        }
      }
      .noText{
        padding-left: .2rem;
        position:relative;
        top: -.06rem;
        p{
         font-size: .26rem;
         color: #7d7d7d;
          span{
            position: relative;
            top: -.06rem;
            font-family: "vanada";
          }
        }
      }
      .more{
        position: absolute;
        right: 0;
        top: 0;
        font-size: .5rem;
        i{
          position: relative;
          top: -.1rem;
          color: #717171;
        }
      }
    }

    .noMassage{
      box-sizing: border-box;
      padding-left: .9rem;
      h2{
        font-size: .4rem;
        font-weight: normal;
        line-height: .8rem;
        color: #2c2c2c;
      }
      h4{
        font-size: .26rem;
        font-weight: normal;
        color: #000;
      }
      span{
        font-size: .24rem;
        line-height: .5rem;
        color: #6d6d6d;
      }
    }
  }
  .noBottom{
    p{
      text-align: center;
      font-size: .28rem;
      line-height: .7rem;
      height: .7rem;
      background-color: #f9f9f9;
      color: #9b9b9b;
    }
  }
  .fixBottom{
    padding-bottom: .76rem;
  }
</style>
