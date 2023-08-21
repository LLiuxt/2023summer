<template>
  <div class="editBox">
    <div class="text">
      <el-input
          placeholder="请输入内容"
          v-model="input"
          @keyup.enter.native="send">
      </el-input>
    </div>
    <div class="subBtn">
      <el-button plain @click.native="send">发送</el-button>
    </div>
  </div>
</template>

<script>
// const subBtn = document.getElementsByClassName("submitBtn")[0]
export default {
  name: "EditBox",
  data(){
    return{
      input: ""
    }
  },
  methods:{
    send(){
      this.$bus.$emit("send",this.input)
      this.input = ''
    },
  }
}
</script>

<style scoped>
  .editBox{
    background-color: rgba(255, 105, 180, 0.05);
    display: grid;
    grid-template-columns: repeat(3, 1fr) 10px 96px 10px;
    grid-template-rows: 80px;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    -webkit-app-region: no-drag;
  }
  .text{
    line-height: 80px;
    margin-left: 10px;
    grid-area: 1 / 1 / 2 / 4;
    margin-top: 9px;
  }
  .subBtn{
    line-height: 80px;
    grid-area: 1 / 5 / 2 / 6;
    margin-top: 9px;

  }

</style>