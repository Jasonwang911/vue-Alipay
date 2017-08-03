<template>
    <div>
      <div class="nav">
        <div class="navScroll">
          <div class="morning"></div>
          <span><p>马上去抢</p></span>
          <div class="radiusDiv">
            <!--<div class="covRadius">纯图片的旋转</div>-->
          </div>
          <div class="doc">
            <div class="first a"></div>
            <div class="first b"></div>
            <div class="first c"></div>
            <div class="first a"></div>
            <div class="first b"></div>
            <div class="first c"></div>
            <div class="first a"></div>
            <div class="first b"></div>
            <div class="first c"></div>
            <div class="first a"></div>
            <div class="first b"></div>
            <div class="first c"></div>
            <div class="first a"></div>
            <div class="first b"></div>
            <div class="first c"></div>
            <div class="first a"></div>
            <div class="first b"></div>
            <div class="first c"></div>
          </div>
        </div>
        <!-- 我的账单 start -->
        <div class="zdList">
          <div class="same zdList-l">
            <div class="text">
              <h3>我的账单</h3>
              <p>下月应还</p>
              <b>0.00</b>
            </div>
          </div>
          <div class="same zdList-r">
            <div class="text">
              <h3>我的额度</h3>
              <p>可用额度</p>
              <b>567,567.68</b>
            </div>
          </div>
        </div>
        <!-- 我的账单 end -->

        <!-- 功能 start -->
        <div class="powerList">
          <div class="powerListLi">
            <div class="li" style="padding-top: .4rem">
              <i class="icon iconfont icon-gift" style="color: #5fb5e8;"></i>
              <p>分期好货</p>
            </div>
            <div class="li" style="padding-top: .18rem">
              <i class="icon iconfont icon-dianyingb" style="color: #86bf3c; font-size: .7rem"></i>
              <p style="position:relative; top: -.09rem">看电影</p>
            </div>
            <div class="li" style="padding-top: .4rem">
              <i class="icon iconfont icon-jiudian" style="color: #df8447;"></i>
              <p>住酒店</p>
            </div>
            <div class="li" style="padding-top: .4rem">
              <i class="icon iconfont icon-koubei1" style="color: #ff7a7a;"></i>
              <p>吃喝玩乐</p>
            </div>
          </div>
          <div class="powerListLi">
            <div class="li" style="padding-top: .3rem">
              <i class="icon iconfont icon-hanglixiang" style="color:#f69ca0;font-size: .6rem;"></i>
              <p style="position:relative; top: -.09rem">境外购物</p>
            </div>
            <div class="li" style="padding-top: .3rem">
              <i class="icon iconfont icon-qicheqianlian-" style="color:#ff0024;font-size: .6rem;"></i>
              <p style="position:relative; top: -.09rem">买车险</p>
            </div>
            <div class="li" style="padding-top: .3rem">
              <i class="icon iconfont icon-kefu" style="color:#46d4be;font-size: .6rem;"></i>
              <p style="position:relative; top: -.09rem">帮助</p>
            </div>
            <div class="li"></div>
          </div>
        </div>
        <!-- 功能列表 end -->

        <!-- 花呗头条 start -->
        <div class="powerList">
          <div class="powerListLi">
            <div class="News">
              <div class="lNews"></div>
              <div class="rNews">
                <ul class="ul">
                  <li v-for="item in news"><i></i>{{item.title}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- 花呗头条 end -->

        <!-- 花呗福利 start -->
        <div class="powerList">
          <div class="Prize">
            <div class="span">Hi~ 花呗粉丝来拿福利啦</div>
            <div class="content">
              <div class="lft bd">
                <span>我的抽奖机会</span>
                <p>3<b>次</b></p>
                <i class="icon iconfont icon-mjiantou"></i>
              </div>
              <div class="lft">
                <span>我的会员积分</span>
                <p>9853<b>分</b></p>
                <i class="icon iconfont icon-mjiantou"></i>
              </div>
            </div>
          </div>
        </div>
        <!-- 花呗福利 end -->

        <!-- 广告 start -->
        <div class="powerList" v-for="item in infiniteDate">
          <div class="Ad">
            <div class="AdTop">
              <strong>{{item.img}}</strong>
            </div>
            <p>{{item.text}}</p>
          </div>
        </div>
        <!-- 广告 end -->

      </div>
    </div>
</template>

<script>
export default {
  props: ['infiniteDate'],
  data () {
    return {
      tran: 0,
      timerObj: null,
      news: [
        {
          index: 1,
          title: '门店使用花呗分期攻略'
        },
        {
          index: 2,
          title: '你必须知道的花呗防骗知识'
        },
        {
          index: 3,
          title: '有想法有建议提出你的宝贵意见'
        }
      ],
      newsList: 0,
      timerOther: null
    }
  },
  methods: {
//    transDiv () { // 纯图片的旋转
//      let that = this
//      clearInterval(this.timerObj)
//      this.timerObj = setInterval(function () {
//        let covRadius = document.getElementsByClassName('covRadius')[0]
//        that.tran++
//        covRadius.style.transform = 'scale(1.1) rotate(' + -that.tran * 20 + 'deg)'
//      }, 2000)
//    },
    fixScroll () {
      let that = this
      let first = document.getElementsByClassName('first')
      let docWdt = document.getElementsByClassName('doc')[0].offsetWidth
      let tanA = 0
      for (let i = 0; i < first.length; i++) {
        tanA++
        first[i].style.top = Math.cos(20 * tanA * 0.017453293) * docWdt * 0.01 - 0.65 + 6 + 'rem' // ((docWdt - firstWdt)/2)   // - firstWdt/2
        first[i].style.left = Math.sin(20 * tanA * 0.017453293) * docWdt * 0.01 - 0.65 + 6 + 'rem'
      }
      this.timerObj = setInterval(function () {
        let covRadius = document.getElementsByClassName('doc')[0]
        that.tran++
//        console.log(1)
        covRadius.style.transform = 'rotate(' + -that.tran * 20 + 'deg)'
      }, 2000)
    },
    newsScroll () {
      let that = this
      let News = document.getElementsByClassName('News')[0]
      let oUl = News.getElementsByClassName('ul')[0]
      let aLiLen = oUl.getElementsByTagName('li').length
      let oneStep = 0.42

      this.timerOther = setInterval(function () {
        that.newsList++
        if (that.newsList > aLiLen - 1) {
          that.newsList = 0
        }
//        oUl.style.top = -that.newsList * oneStep + 'rem'
        oUl.style.top = -that.newsList * oneStep + 'rem'
      }, 2000)
    }
  },
  mounted () {  // created
    // this.transDiv() // 纯图片的旋转
    this.fixScroll()
    this.newsScroll()
  },
  beforeDestroy () {
    clearInterval(this.timerObj)
    clearInterval(this.timerOther)
  }
}
</script>

<style lang="less" scoped>
  .icon {
    width: 1rem; height: 1rem;
    vertical-align: -0.15rem;
    fill: currentColor;
    overflow: hidden;
  }
  .nav{
    padding-top: .96rem;
    width: 7.2rem;
    background-color: #fff;
    .navScroll{
      position: relative;
      width: inherit;
      height: 4.6rem;
      overflow: hidden;
      z-index: 10;
      background: url("../../assets/img/bgzaocan.png") no-repeat;
      background-size: contain;
      .morning{
        position: absolute;
        left: 1.08rem;
        top: 1.17rem;
        width: 1.27rem;
        height: .4rem;
        z-index: 9;
        background: url("../../assets/img/morning.png") no-repeat;
        background-size: contain;
        animation: fade 2s infinite;
      }
      span{
        position: absolute;
        bottom: 0.4rem;
        left: 2.68rem;
        z-index: 10;
        display: inline-block;
        font-size: .3rem;
        color: #108fe9;
        border: 1px solid #108fe9;
        padding: .02rem .25rem;
        border-radius: .2rem;
      }
      .radiusDiv{
        width: 7.2rem;
        height: 7.2rem;
        border-radius: 50%;
        transform: scale(1.7);
        margin-top: 5.4rem;
        box-shadow: 0 0 .6rem rgba(16,143,233,0.4);
      }
      .covRadius{
        width: 7.2rem;
        height: 7.2rem;
        border-radius: 50%;
        transform: scale(1.1);
        background: url("../../assets/img/20x18.png") no-repeat;
        background-size: contain;
        transition: .3s;
      }
    }
    .zdList{
      display: flex;
      height: 2.3rem;
      border-top: 1px solid #e5e5e5;
      box-sizing:border-box;
      padding-bottom: .17rem;
      background-color: #f5f5f9;
      .zdList-l{
        flex:1;
        box-sizing: border-box;
        border-right: 1px solid #e5e5e5;
        background-color: #fff;
      }
      .zdList-r{
        flex:1;
        background-color: #fff;
      }
      .same{
        .text{
          padding: 0.4rem 0 0 0.6rem;
          h3{
            font-weight: normal;
            font-size: .3rem;
            color: #40454b;
          }
          p,b{
            color: #afb6c3;
          }
          p{
            padding-top: .16rem;
            padding-bottom: .02rem;
            font-size: .22rem;
          }
          b{
            font-weight: normal;
            font-size: .3rem;
          }
        }
      }
    }
    .powerList{
      padding-bottom: .2rem;
      background-color: #f5f5f9;
      .powerListLi{
        display:flex;
        .News{
          display: flex;
          width: 7.2rem;
          background-color: #fff;
          padding: .25rem .2rem;
          .lNews{
            width: .62rem;
            height: .42rem;
            background: url("../../assets/img/huabeitoutiao.png") no-repeat;
            background-size: contain;
          }
          .rNews{
            position: relative;
            width: 5.5rem;
            height: .42rem;
            overflow: hidden;
            .ul{
              position: absolute;
              left:0;
              top: 0;
              transition: .3s;
              padding-left: .2rem;
              width: 5.5rem;
              height: .42rem;
              li{
                height: .42rem;
                line-height: .52rem;
                font-size: .2rem;
                color:#63676c;
                i{
                  display: inline-block;
                  margin-right: .1rem;
                  width: .1rem;
                  height: .1rem;
                  background-color: #ccc;
                  position: relative;
                  top: -.05rem;
                  border-radius: 50%;
                }
              }
            }
          }
        }
        .li{
          flex:1;
          height: 1.73rem;
          background-color: #fff;
          text-align:center;
          box-sizing:border-box;
          p{
            color: #464b51;
          }
          i{
            font-size: .5rem;
          }
        }
      }
    }
  }

  .doc{
    position: absolute;
    left: -2.397rem;
    top: 3.1rem;
    z-index: 999;
    width: 12rem;
    height: 12rem;
    transition: .3s;
  }
  .first{
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    position: absolute;
    /* 假如这个是45deg */
  }
  .a{
    background: url("../../assets/img/baozi.png");
    background-size: contain;
  }
  .b{
    background: url("../../assets/img/hbg.png");
    background-size: contain;
  }
  .c{
    background: url("../../assets/img/hlb.png");
    background-size: contain;
  }

  .Prize{
    background-color: #fff;
    .content{
      display: flex;
      padding: .3rem 0;
      .bd{
        border-right: 1px solid #eee;
      }
      .lft{
        text-indent: .5rem;
        box-sizing: border-box;
        height: 1.3rem;
        flex:1;
        position:relative;
        span{
          font-size: .3rem;
          color: #53585e;
        }
        p{
          font-size: .4rem;
          color: #9fa8b6;
          font-weight: normal;
          b{
            font-weight: normal;
            font-size: .15rem;
          }
        }
        i{
          text-indent: 0;
          position: absolute;
          right: -.3rem;
          top: .5rem;
          font-weight: bold;
          color: #7dc4e8;
        }
       }
    }
    .span{
      height: 1.2rem;
      line-height: 1.2rem;
      font-size: .2rem;
      color: #6a6a6a;
      text-indent: .18rem;
      border-bottom: 1px solid #eee;
    }
  }
  .Ad{
    .AdTop{
      img{
        display: block;
        width: 7.2rem;
        height: 3.45rem;
      }
      strong{
        display: block;
        width: 7.2rem;
        height: 2.45rem;
        line-height: 2.45rem;
        text-align: center;
        font-size: .3rem;
      }
    }
    p{
      background-color: #fff;
      height: .7rem;
      line-height: .7rem;
      font-size: .3rem;
      color: #1792ef;
      text-align: center;
    }
  }

  @keyframes trans {
    from{
      transform:scale(1.1) rotate(0);
    }
    to{
      transform:scale(1.1) rotate(360deg);
    }
  }
  @keyframes fade {
    0,100%{
      opacity:1;
    }
    50%{
      opacity:0;
    }
  }
</style>
