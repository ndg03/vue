<template>
  <div>
    <h3>加法组件</h3>
    <!-- <p>{{ this.$store.state.count }}</p> -->
    <p>a模块中的数据:{{ this.$store.state.a.count }}</p>
    <p>b模块中的 数据：{{ this.$store.state.b.count }}</p>

    <!--  this就是当前组将对象，在组件中可以省略 -->
    <p>{{ $store.state.count }}</p>
    <br />
    <button @click="addOne">+1</button>
    <br />
    <button @click="addAsy">异步+2</button>
    <p>获取getters中的数据 :{{ $store.getters.showNum }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    addOne() {
      //该种方法虽然可以改变state中的数据，但是不被允许。
      // 应该将其改变的方法定义在mutation中
      // this.$store.state.count++;

      // 提交方法名和参数 ，触发mutation中的方法执行
      this.$store.commit("add", 1);
    },
    addAsy() {
      this.$store.dispatch("addAsync", 2);
    },
  },
};
</script>