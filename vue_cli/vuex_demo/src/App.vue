<template>
  <div id="app">
    <!-- <hello-world></hello-world> -->
    <add-com></add-com>
    <hr />
    <reduce-com></reduce-com>

    <axios-demo></axios-demo>
  </div>
</template>

<script>
import AddCom from "./components/AddCom.vue";
import AxiosDemo from "./components/axiosDemo.vue";
import ReduceCom from "./components/ReduceCom.vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    AddCom,
    ReduceCom,
    AxiosDemo,
    // HelloWorld,
  },
};
</script>

<style>
</style>
