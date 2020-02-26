import Vue from 'vue'
import App from './App.vue'
import './assets/css/index.less'

new Vue({render: h => h(App)}).$mount('#app')


const test = () => {
  console.log(1)
}

test()