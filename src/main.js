import Vue from 'vue'
import App from './App.vue'
import { Button, Card, Image, Row, } from "element-ui";
Vue.use(Button).use(Card).use(Image).use(Row)
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
