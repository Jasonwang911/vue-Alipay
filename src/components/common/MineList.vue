<template>
    <div>
      <div class="mineList">
        <div class="li">
          <div class="zwf">
            <div v-for="item in data">
              <div class="parent"
                   @touchstart="tcStart(item)"
                   @touchmove="tcMove(item)"
                   :style="item.startColor"
                   :class="{ act: item.isActive }"
                   @touchend="tcEnd(item)">
                <div class="lft">
                  <div class="coverISpan">
                    <div class="pi">
                      <i :class="item.classi"
                         :style="item.icon"></i>
                    </div>
                    <span>{{item.fst}}</span>
                  </div>
                </div>
                <div class="rit">
                  <span>{{item.lst}}</span>
                  <em class="icon iconfont icon-mjiantou"></em>
                </div>
              </div>
            </div>
		    <div class="bgNull"></div>
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
  },
  methods: {
    tcStart (item) {
      console.log('start')
      if (item.startColor === undefined && item.startColor === undefined) {
        this.$set(item, 'startColor', '')
        this.$set(item, 'isActive', true)
      }
      item.startColor = 'background-color: #bababa;'
      item.isActive = true
    },
    tcMove (item) {
      console.log('tcMove')
      item.startColor = ''
      item.isActive = false
    },
    tcEnd (item) {
      console.log('tcEnd')
      item.startColor = ''
      item.isActive = false
    }
  }
}
</script>
<style lang="less" scoped>
  .mineList{
    width: 7.2rem;
    .li{
      width: inherit;
      box-sizing: border-box;
      background-color: #fff;
      .zwf{
      	.parent{
        	display: flex;
          transition: .2s;
      		padding-left: .28rem;
      		box-sizing: border-box;
      	}
        .act{
          .lft,.rit{
            border-color: #bababa;
          }
        }
      	.lft{
          transition: .2s;
	        flex: 3;
	      	color: #000;
	      	border-bottom: 1px solid #efefef; /* f0f0f0 */
	      	.coverISpan{
        		display: flex;
        		.pi{
		        	flex: 4;
			  		text-align: center;
			        i{
			          font-size: .55rem;
			          position: relative;
			          top: .012rem;
			  		  line-height: .94rem;
			        }
		        }
		        span{
	        		flex: 7;
		          font-size: .28rem;
		          color: #000;
		  		  line-height: .94rem;
		        }
	        }
	      }
	      .rit{
          transition: .2s;
	        flex:8;
	        text-align: right;
	      	border-bottom: 1px solid #efefef;
      		line-height: .94rem;
	      	span{
	      		color: #909090;
	      		font-size: .23rem;
	      	}
	        em{
				font-size: .33rem;
				padding-right: .26rem;
				padding-left: .2rem;
				color: #cacaca;
	      		position: relative;
	      		top: .03rem;
	        }
	      }
	    }
      }
	  .bgNull{
	  	width: inherit;
	  	height: .4rem;
	  	background-color: #eaeeef;
	  }
  }
</style>
