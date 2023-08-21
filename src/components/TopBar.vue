<template>
  <div class="box">
    <div class="leftBar">
      <div class="gptIcon">
        <img src="/static/R-C.png">
      </div>
    </div>
      <div class="rightBtn">
        <icon-svg icon-class="24gl-minimization" class="icon" @click.native="min"></icon-svg>
        <icon-svg icon-class="zuidahua" class="icon" @click.native="max"></icon-svg>
        <icon-svg icon-class="guanbi" class="icon" @click.native="close"></icon-svg>
      </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  methods:{
    async close(){
      try {
        await window.winAPI.closeWin();
      } catch (error) {
        console.error("Error closing window:", error);
      }
    },
   async max(){
      try{
        console.log(window.winAPI)

        await window.winAPI.maxWin();
   }catch (error){
     console.error('Error max window:',error)
   }
    },
    async min(){
      try{
        await window.winAPI.minWin();
      }catch (error){
        console.error('Error min window',error)
      }
    }
  },
}
</script>

<style scoped>
  .box{
    background-color: rgba(255, 105, 180, 0.05);
    height: 39px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  }

  .leftBar{
    float: left;
  }

  .gptIcon{
    margin-left: 5px;
    margin-top: 5px;
  }
  .gptIcon img{
    height: 30px;
    width: 30px;
  }
  .rightBtn{
    float: right;
    -webkit-app-region: no-drag;
  }
  .rightBtn .icon{
    padding-left:10px;
    padding-right: 10px;
    height: 40px;
  }
  .rightBtn .icon:hover{
    background-color: rgba(255, 192, 203, 0.5);
  }
</style>