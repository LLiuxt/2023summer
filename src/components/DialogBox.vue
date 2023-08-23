<template>
  <div class="dialogBox scrollable-container" ref="messagesContainer">
    <div class="chatBox">
      <div class="clearAll" @click="clearAll">清空对话</div>
      <div class="msgTime">{{ time }}</div>
      <div class="msgBox" v-for="msg in messages" :key="msg.content">
<!--        <div class="msgTime">{{ time }}</div>-->
        <div class="oneMsg" :class="msg.role == 'user' ? 'msgRight' : 'msgLight'">
          <img :src="msg.role == 'user' ? '/static/yjtp.png' : 'static/R-C.png'" alt="">
<!--          <img src='../../public/static/R-C.png' alt="">-->
          <div class="contents" :style="msg.role == 'user' ? {'background-color':'rgba(255, 192, 203, 0.27)'} : {'background-color':'white'}">
            {{msg.content}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DialogBox",
  data(){
    return{
      time:'',
      messages:JSON.parse( localStorage.getItem('messages'))||[],
    }
  },
  watch:{
    messages(value){
      localStorage.setItem('messages',JSON.stringify(value))
    }
  },
  methods:{
    clearAll(){
      console.log('clear')
      localStorage.removeItem(this.messages)
      this.messages = []
    },
    getNowTime() {
      let nowTime = new Date();
      this.time = nowTime.toTimeString()
      this.time = this.time.split(' ')[0];
    },

    scrollToBottom() {
      const msgContainer = this.$refs.messagesContainer;
      msgContainer.scrollTop = msgContainer.scrollHeight;
    },

    addSystemMsg(){
      this.$axios.post('https://ai.fakeopen.com/v1/chat/completions',{
        "model":"gpt-3.5-turbo",
        "messages":this.messages
      },{
        headers:{
          'Content-Type':'application/json',
          'Authorization':'Bearer pk-this-is-a-real-free-pool-token-for-everyone'
        }
      }).then((res)=>{
        let sysMsg = {
          "role":"system",
          "content": res.data.choices[0].message.content
        }
        this.messages.push(sysMsg)

        this.$nextTick(() => {
          this.scrollToBottom();
        })
      }).catch((err)=>{
        console.log(err)
      })
    },

    getMsg(msg){
      if(msg == ''){
        this.$message({
          message: '发送内容不能为空',
          type: 'warning'
        });
      }else if(this.messages.length == 0){
        let userMsg = {
          "role": "user",
          "content": msg
        }
        this.messages.push(userMsg)
        this.$bus.$emit('sendFirstMsg',userMsg.content)

        this.$nextTick(() => {
          this.scrollToBottom();
        })

        this.getNowTime()
        this.addSystemMsg()
      }else{
        let userMsg = {
          "role": "user",
          "content": msg
        }
        this.messages.push(userMsg)

        this.$nextTick(() => {
          this.scrollToBottom();
        })

        this.addSystemMsg()
      }
    },
  },
  mounted() {
    this.$bus.$on('send',this.getMsg)
  },

}
</script>

<style scoped>
ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
  .dialogBox{
    background-color: rgba(255, 105, 180, 0.05);
    -webkit-app-region: no-drag;
    overflow-y: scroll;
  }
  .clearAll{
    cursor: pointer;
    color: #858484;
  }
  .chatBox{
    margin-left: 30px;
    margin-right: 30px;
  }

  /*自定义滚动条*/
  .scrollable-container::-webkit-scrollbar { width: 10px; /* 滚动条宽度 */}
  .scrollable-container::-webkit-scrollbar-thumb { background-color: #ffdcde; /* 滚动条滑块颜色 */ }
  .scrollable-container::-webkit-scrollbar-track { background-color: transparent; /* 滚动条轨道背景色 */ }
  .oneMsg{
    margin-bottom: 5px;
    display: flex;
    margin-top: 20px;
  }

  .msgTime{
    color: rgba(0, 0, 0, 0.5);
    margin: 5px auto 10px auto;
    /*display: none;*/
  }

  img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 10px;
  }
  .contents{
    color: rgba(0, 0, 0, 0.5);
    border-radius: 30px;
    padding: 10px 20px;
    max-width: 50%;
    text-align: left;
  }
  .msgLeft{
    flex-direction: row;
  }
  .msgRight{
    flex-direction: row-reverse;
  }
</style>