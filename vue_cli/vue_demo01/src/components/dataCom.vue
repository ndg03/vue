<template>
  <div class="block">
    <h1>哇真的是你呀</h1>
    <span class="demonstration">你干嘛 哎哟</span>
    <el-date-picker
      v-model="value2"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions"
    >
    </el-date-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value2: "",
    };
  },
};
</script>