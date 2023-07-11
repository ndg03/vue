<template>
  <div class="hello">
    HelloWorld!!
    <h3>vuex中的 共享数据的访问</h3>
    <p>{{ this.$store.state.count }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
