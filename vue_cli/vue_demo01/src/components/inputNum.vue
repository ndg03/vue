<template>
  <!--precision 用来设置小数点的位数
  step  每次变化的量
  max 最大值-->
  <el-input-number
    v-model="num"
    :precision="2"
    :step="0.1"
    :max="10"
    :min="0"
    @change="show"
  ></el-input-number>
</template>
<script>
export default {
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    show() {
      console.log(this.num);
    },
  },
};
</script>