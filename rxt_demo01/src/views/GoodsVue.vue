<template>
  <div>
    <nav-bar-vue></nav-bar-vue>
    <h2>商品中心</h2>
  </div>
</template>

<script>
import NavBarVue from "@/components/NavBarVue.vue";
export default {
  data() {
    return {};
  },
  components: { NavBarVue },
  methods: {},
  created() {
    // 生命周期方法
    this.$store.commit("updateActiveIndex", "2");
  },
};
</script>