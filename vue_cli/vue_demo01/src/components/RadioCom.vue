<template>
  <div>
    <template>
      <el-radio-group v-model="radio">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
      </el-radio-group>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: 3,
    };
  },
};
</script>