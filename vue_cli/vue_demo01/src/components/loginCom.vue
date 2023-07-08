<template>
  <div class="warp">
    <el-row>
      <el-col :span="6" offset="9">
        <el-input
          placeholder="手机号/用户名/邮箱"
          v-model="user.username"
          clearable
        >
        </el-input>
        <br />
        <br />
        <el-input
          placeholder="请输入密码"
          v-model="user.password"
          show-password
        ></el-input>
        <br />
        <br />
        <br />

        <el-button type="primary" size="medium" @click="login">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      console.log(this.user);
    },
  },
};
</script>

<style>
.el-button {
  width: 380px;
}
.el-input {
  color: aquamarine;
}
.warp {
  margin-top: 200px;
}
</style>