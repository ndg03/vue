<template>
  <div class="warp">
    <div class="enroll">用户登录</div>

    <div class="form">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        label-position="top"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" style="" prop="username">
          <el-input
            type="text"
            border="2"
            v-model="ruleForm.username"
            autocomplete="off"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <button @click="login" class="login">登录</button>
        </el-form-item>
      </el-form>
    </div>
    <div class="message">
      <p>没有账号? <router-link to="/register">立即注册</router-link></p>
    </div>
  </div>
</template>
<script>
import { userLogin } from "@/api/user";

export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        pass: [{ trigger: "blur" }],
        checkPass: [{ trigger: "blur" }],
        age: [{ trigger: "blur" }],
      },
    };
  },
  methods: {
    login() {
      if (this.ruleForm.username == "") {
        this.$message.error("用户名不能为空");
        return;
      }
      if (this.ruleForm.password == "") {
        this.$message.error("密码不能为空");
        return;
      }

      //发送请求
      userLogin(this.ruleForm)
        .then((res) => {
          if (res.flag == true) {
            // 登录成功 --处理token
            this.$store.commit("setToken", res.data);
            // 登录成功，跳转主页
            this.$router.push("/home").catch((err) => {
              this.$message.error("登录成功，跳转主页异常：" + err);
            });
          } else {
            this.$message.error("登录失败" + res.message);
          }
        })
        .catch((err) => {
          this.$message.error("登录异常：" + err);
        });
    },
  },
};
</script>

<style scope>
.warp {
  background: url("../assets/img/rice.png");
  width: 1500px;
  height: 735px;
  background-size: 1897px 920px;
}
.enroll {
  margin: 0 auto; /* 将上下边距设置为0，并将左右边距设置为“auto” */
  font-size: 30px;
  color: white;
  padding-top: 129px;
}
.form {
  width: 340px;
  height: 340px;
  margin: 0 auto; /* 将上下边距设置为0，并将左右边距设置为“auto” */
  background-color: #ffffff;
  border-radius: 10px;
}
.demo-ruleForm {
  margin-top: 10px;
}

.el-input {
  width: 290px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

::v-deep.el-form-item {
  height: 70px;
}

.login {
  margin-top: 10px;
}

.el-form-item__label {
  width: 290px;
  padding-bottom: 0px;
  height: 30px;
  font-weight: bold;
}
.el-form-item__content {
  width: 290px;
  padding-left: 25px;
}

.regBtn {
  padding-left: 131px;
  padding-right: 131px;
  background-color: #5cb85c;
  border-radius: 10px; /* 添加这一行以设置圆角矩形边框 */
  border: 1px solid #fff; /* 添加这一行以设置边框宽度和颜色 */
  color: #fff; /* 添加这一行以设置字体颜色为白色 */
  padding-top: 0px;
  padding-bottom: 0px;
  height: 41.6px;
  font-size: 13px;
}
</style>