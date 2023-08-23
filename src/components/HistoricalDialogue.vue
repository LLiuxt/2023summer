<template>
  <div class="historyBox">
    <div class="historyList scrollable-container">
      <one-history v-for="his in histories"
                   :key="his.id"
                   :aHistory="his"></one-history>
    </div>
    <div class="addNewChat" @click="addChat">
      <div class="addNew">
        <i class="el-icon-plus"></i>
        添加新会话
      </div>
    </div>
  </div>
</template>

<script>
import OneHistory from "@/components/OneHistory";
const nanoid = require('nanoid')

export default {
  name: "HistoricalDialogue",
  components:{OneHistory},
  data(){
    return{
      text:"欢迎使用chatgpt",
      histories: JSON.parse(localStorage.getItem('titles',))||[
        {
          id:nanoid.nanoid(),
          hisText:"欢迎使用chatgpt"
        },
      ]
    }
  },
  methods:{
    deleteHistory(i){
      this.histories = this.histories.filter(his => his.id !== i)
    },
    addChat(){
      let newChat = {
        hisText:this.text,
        id:nanoid.nanoid()
      }
      this.histories.push(newChat)
    },
  },
  mounted() {
    this.$bus.$on('delete',this.deleteHistory)
  },
  watch:{
    histories(value){
      localStorage.setItem('titles',JSON.stringify(value))
    }
  }
}
</script>

<style scoped>
  .historyBox{
    overflow:hidden;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr) 50px 100px;
    grid-column-gap: 0;
    grid-row-gap: 0;
    background-color: rgba(255, 192, 203, 0.27);
    border-right: 2px dashed rgba(255, 192, 203, 0.5);
  }

  .historyList{
    grid-area: 1 / 1 / 4 / 6;
    -webkit-app-region: no-drag;
    overflow-y: scroll;
  }
  .scrollable-container::-webkit-scrollbar { width: 5px; /* 滚动条宽度 */}
  .scrollable-container::-webkit-scrollbar-thumb { background-color: #ffdcde; /* 滚动条滑块颜色 */ }
  .scrollable-container::-webkit-scrollbar-track { background-color: transparent; /* 滚动条轨道背景色 */ }
  .addNewChat{
    height: 100px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    grid-area: 5 / 1 / 6 / 6;
    -webkit-app-region: no-drag;
  }
  .addNew{
    line-height: 100px;
    height: 100px;
    font-size: 20px;
    letter-spacing:5px;
    color: rgba(255, 192, 203, 0.9);
    cursor: pointer;
  }

  .addNew:hover{
    color: rgba(255, 255, 255, 1);
    background-color:rgba(255, 192, 203, 0.3) ;
    text-shadow: 0 1px 1px rgba(255, 192, 203, 0.9);
  }

</style>