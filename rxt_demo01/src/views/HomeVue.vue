<template>
  <div>
    <nav-bar-vue></nav-bar-vue>
    <div>
      <el-container>
        <el-aside>
          <div>
            <el-button type="success">成功按钮</el-button>
          </div>
          <div>
            <h3>近期热门信息</h3>
          </div>
          <div>具体信息</div>
        </el-aside>
        <el-main>
          <div
            style="
              display: flex;
              align-items: center;
              height: 50px;
              line-height: 50px;
            "
          >
            <input
              type="text"
              placeholder="请输入"
              style="
                width: 300px;
                box-sizing: border-box;
                height: 50px;
                border: 1px solid green;
                border-radius: 5px;
                font-size: 30px;
              "
            />
            <span
              style="
                background-color: green;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 46px;
              "
            >
              <el-row style="white-space: nowrap">
                <el-button
                  icon="el-icon-search"
                  circle
                  style="margin-top: 0 !important"
                ></el-button>
              </el-row>
            </span>
          </div>
          <div>热门信息</div>
          <div>商品信息</div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import NavBarVue from "@/components/NavBarVue.vue";
export default {
  data() {
    return {};
  },
  components: {
    NavBarVue,
  },
  methods: {},
  created() {
    // 生命周期方法
    this.$store.commit("updateActiveIndex", "1");
  },
};
</script>
<style scoped>
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 580px;
  width: 350px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-row {
  height: 80px;
}
</style>