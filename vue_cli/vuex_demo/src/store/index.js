import Vue from 'vue'
// 导入vuex的依赖
import Vuex from 'vuex'


Vue.config.productionTip = false
// 使用vuex
Vue.use(Vuex)
// vuex 状态管理对象
const store = new Vuex.Store({
    //用来存放数据的 state对象
    state: {
        count: 6666,
        name: "amagi"
    },
    mutations: {
        // 在mutation中 定义的函数，默认接受两个参数，第一个 是上面的state属性，第二个是函数传递的数据
        add(state, data) {
            state.count += data;
        },
        reduce(state, data) {
            state.count -= data;
        }
    },
    actions: {
        //  执行异步方法，通常调用的时mutations中的方法
        addAsync(context, data) {
            // setTimeOut 一次性定时函数，第一个参数是到达给定时间后执行的代码，第二个参数是定时器的时间
            // 异步调用mutation中的方法
            setTimeout(() => context.commit("add", data),
                2000)
        },
        reduceAsync(context, data) {
            // 一次性定时器
            setTimeout(() => {
                context.commit("reduce", data);
            }, 2000);
        }
    },
    getters: {
        //  该方法在state中的数据发生变化时才触发
        showNum: state => {
            return "state中发生变化后的新数据:" + state.count * 20;
        }
    }
})
// 将store对象导出
export default store;