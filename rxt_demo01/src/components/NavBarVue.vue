<template>
  <div>
    <div>
      <img src="../assets/img/logo.png" class="logo" alt="融销通" />
    </div>
    <span class="logoWord1">融销通</span>
    <br />
    <br />
    <br />
    <br />
    <span class="logoWord2">农产品融销一体平台</span>
    <br />
    <div class="head">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <router-link to="/home">主页</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/goods">商品中心</router-link>
        </el-menu-item>
        <el-menu-item index="3">求购需求</el-menu-item>
        <el-menu-item index="4">农业知识</el-menu-item>
        <el-menu-item index="5">专家指导</el-menu-item>
        <el-menu-item index="6">购物车</el-menu-item>
        <el-menu-item index="7">融资申请</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>

<style >
.logo {
  position: absolute;
  top: 0;
  left: 100px;
  width: 100px;
}
.logoWord2 {
  position: absolute;
  top: 63px;
  left: 200px;
  width: 150px;
}
.logoWord1 {
  position: absolute;
  width: 150px;
  top: 10px;
  left: 174px;
  font-size: 25px;
  color: green;
}

.el-menu-demo {
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-menu-demo .el-menu-item {
  color: black !important;
  border-bottom-color: transparent;
  padding-left: 74px;
  padding-right: 74px;
}

.el-menu-demo .el-menu-item {
  border-radius: 10px;
  background-color: green;
}
router-link {
  text-decoration: none;
}
</style>