<template>
  <div id="app">
    <div class="navigationBar">
      <top-bar ></top-bar>
    </div>
    <div class="historyBar">
      <historical-dialogue></historical-dialogue>
    </div>
    <div class="dialogBar">
      <dialog-box></dialog-box>
    </div>
    <div class="editBar">
      <edit-box></edit-box>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
import EditBox from "@/components/EditBox";
import HistoricalDialogue from "@/components/HistoricalDialogue";
import DialogBox from "@/components/DialogBox";

export default {
  name: 'App',
  components: {
    TopBar,
    EditBox,
    HistoricalDialogue,
    DialogBox
  },
  data(){
    return {

    }
  },
  methods:{

  },
  mounted() {

  }
}
</script>

<style>
*{
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
}
#app {

  display: grid;
  overflow: hidden;
  height: 100vh;
  grid-template-columns: 300px repeat(4, 1fr);
  grid-template-rows: 40px repeat(3, 1fr) 80px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navigationBar{
  display: grid;
  grid-area: 1 / 1 / 2 / 6;
  /*height: 40px;*/
}
.historyBar{
  display: grid;
  grid-area: 2 / 1 / 6 / 2;
}
.editBar{
  display: grid;
  grid-area: 5 / 2 / 6 / 6;
}
.dialogBar{
  display: grid;
  grid-area: 2 / 2 / 5 / 6;
}
</style>
