import Vue from 'vue'
import App from './App.vue'

// 在导入某个文件夹下的js文件时 ，如果文件名称为index可以省略
import store from './store/indexdemo'
// // 导入vuex的依赖
// import Vuex from 'vuex'




Vue.config.productionTip = false
// // 使用vuex
// Vue.use(Vuex)
// // vuex 状态管理对象
// const store = new Vuex.Store({
//   //用来存放数据的 state对象
//   state: {
//     count: 66
//   }
// })

new Vue({
  // store, //将共享对象挂载到vue实例中
  store,
  render: h => h(App),
}).$mount('#app')