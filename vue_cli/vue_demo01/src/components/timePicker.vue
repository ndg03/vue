<template>
  <div>
    <!-- :picker-options="{
        selectableRange: '00:00:00 - 23:59:59',
      }"   设置可选的时间范围 -->
    <el-time-picker
      v-model="value1"
      :picker-options="{
        selectableRange: '00:00:00 - 23:59:59',
      }"
      placeholder="任意时间点"
    >
    </el-time-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: new Date(2099, 9, 10, 10, 10),
    };
  },
};
</script>