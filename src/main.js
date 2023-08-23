import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import axios from "axios";
import IconSvg from "@/components/IconSvg";
Vue.use(ElementUI);
import VueRouter from 'vue-router'

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$axios = axios;
    Vue.component('icon-svg',IconSvg)
  }
}).$mount('#app')
