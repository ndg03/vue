<template>
  <div class="warp">
    <div class="center">
      <div class="top">用户注册</div>
      <div class="cen">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          style="width: 1250px"
        >
          <el-row>
            <el-col span="8" offset="0">
              <el-form-item label="手机号" prop="userName">
                <el-input v-model="ruleForm.userName" clearable></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input
                  type="password"
                  v-model="ruleForm.password"
                  autocomplete="off"
                  clearable
                  show-password
                ></el-input>
              </el-form-item>
              <el-form-item label="昵称" prop="nickName">
                <el-input v-model="ruleForm.nickName" clearable></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="submitForm('ruleForm')" class="btn"
                  >立即开通</el-button
                >
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="but"></div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  // eslint-disable-next-line vue/multi-word-component-names

  name: "RegisterVue",
  data() {
    return {
      ruleForm: {
        userName: "",
        password: "",
        nickName: "",
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 4, max: 8, message: "无效用户名", trigger: "blur" },
        ],
        password: [
          { required: true, trigger: "blur" },
          { min: 8, max: 16, message: "请输入8-16个字符", trigger: "blur" },
        ],
        nickName: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          { min: 2, max: 8, message: "无效昵称", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios
            .post("http://localhost:9090/user/add", this.ruleForm)
            .then((res) => {
              //表单验证成功的代码
              if (res.data.flag) {
                this.$message.success(res.data.message);
                // location.href="./#/login";
                this.$router
                  .push("/login")
                  .catch((err) =>
                    this.$message.error(`页面跳转时发生异常: ${err}`)
                  );
              } else {
                this.$message.error(res.data.message);
              }
            });
          alert("开通成功");
        } else {
          //验证失败
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style>
.warp {
  width: 1500px;
  height: 700px;
  overflow: hidden;
  background-image: url(../assets/img/rice.png);
  background-size: 1500px, 700px;
  background-repeat: no-repeat;
}
.center {
  width: 325px;
  height: 250px;
  position: relative;
  left: 480px;
  top: 120px;
  background-color: transparent;
}
.top {
  width: 475px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  font-family: 宋体, serif;
  color: aliceblue;
}
.cen {
  width: 180px;
  height: 300px;
  border-color: rgba(236, 224, 224, 0.99);
}
.btn {
  width: 316px;
  background-color: transparent;
}
.but {
  width: 470px;
  height: 60px;
  border: 1px solid white;
  border-radius: 10px;
  background: #f7f8fa;
  margin-top: 60px;
  line-height: 40px;
  text-align: center;
}
</style>