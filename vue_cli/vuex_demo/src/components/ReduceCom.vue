<template>
  <div>
    <h3>减法组件</h3>
    <p>{{ this.$store.state.count }}</p>
    <p>{{ name }}</p>

    <button @click="reduceOne">-1</button>
    <button @click="subAsync">异步-2</button>

    <p>getters 中的数据是： {{ showNum }}</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  computed: {
    //  相当于 count:this.$store.state.count
    ...mapState(["count", "name"]),
    // 相当于 this.$store.getters.showNum
    ...mapGetters(["showNum"]),
  },
  methods: {
    // 相当于this.$store.commit("reduce")
    ...mapMutations(["reduce"]),
    reduceOne() {
      this.reduce(1);
    },
    //  相当于 this.$store.dispatch()
    ...mapActions(["reduceAsync"]),
    subAsync() {
      this.reduceAsync(2);
    },
  },
};
</script>