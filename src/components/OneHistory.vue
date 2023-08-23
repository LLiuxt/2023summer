<template>
<div>
<!--  <div class="oneHistory" @click="clicked" @blur="blurred" ">-->
    <div class="oneHistory">
      <div
        class="hisName"
        v-if="!isEdit"
        @dblclick="startEdit">
      {{ title }}
    </div>
    <input v-if="isEdit"
           v-model="title"
           @blur="finishEdit"
           @keyup.enter="finishEdit">
    <div>
      <button class="del" @click="deleteThis">
        <i class="el-icon-delete" style="color: white"></i>
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "OneHistory",
  props:['aHistory'],
  data(){
    return {
      title:this.aHistory.hisText,
      isEdit: false,
      // isActive:true,
    }
  },
  methods:{
    deleteThis(){
      this.$bus.$emit('delete',this.aHistory.id)
    },
    // clicked(){
    //   this.isActive = true
    // },
    // blurred(){
    //   this.isActive = false
    // },
    startEdit(){
      this.isEdit = true
    },
    finishEdit(){
      this.isEdit =false
      if (this.title.length >7){
        this.title = this.title.slice(0,7) + '......'
      }else if(this.title == ''){
        this.isEdit = true
        this.$message({
          message: '标题不能为空',
          type: 'warning'
        })
      }
    },
  },
  watch:{
    title(value){
      localStorage.setItem('title',JSON.stringify(value))
    }
  }
}
</script>

<style scoped>
.oneHistory{
  border-bottom: 1px solid #ffdcde;
  height: 75px;
}

.hisName{
  float: left;
  margin-left: 20px;
  line-height: 75px;
  font-size: 18px;
  color: #fda1a9;
}
input{
  float:left;
  height: 40px;
  margin-top: 19px;
  margin-left: 20px;
  border: none;
  font-size: 18px;
  width: 180px;
  outline: none;
  color: rgb(253, 161, 169);
  background-color: rgba(255, 255, 255, 0.5);
}
.del{
  margin-top: 20px;
  margin-right: 20px;
  float: right;
  background-color: rgba(255, 192, 203, 0.5);
  width: 60px;
  height: 35px;
  border-radius: 10px;
  border: 1px solid rgba(255, 192, 203, 0.73);
}
.del:hover{
  background-color: rgba(255, 192, 203, 0.3);
}

.del:active{
  background-color: rgba(255, 192, 203, 0.8);
}
/*.active{*/
/*  background-color: rgba(253, 161, 169, 0.4);*/
/*}*/
</style>