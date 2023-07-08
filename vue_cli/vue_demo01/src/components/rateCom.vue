<template>
  <div>
    <el-rate v-model="value" show-text> </el-rate>

    <hr />

    <div>
      <el-rate
        v-model="value"
        :icon-classes="iconClasses"
        void-icon-class="el-icon-s-opportunity"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
      >
      </el-rate>
    </div>
    <hr />
    <div class="block">
      <span class="demonstration">区分颜色</span>
      <el-rate v-model="value2" :colors="colors"> </el-rate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
      iconClasses: [
        "el-icon-s-opportunity",
        "el-icon-message-solid",
        "el-icon-s-promotion",
      ],
      value1: null,
      value2: null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
    };
  },
};
</script>