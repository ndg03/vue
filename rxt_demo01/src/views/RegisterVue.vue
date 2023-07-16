<template>
  <div class="warp">
    <div class="enroll">用户注册</div>

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
        <el-form-item label="用户名" style="" prop="userName" class="userName">
          <el-input
            type="text"
            border="2"
            v-model="ruleForm.userName"
            autocomplete="off"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickName">
          <el-input
            type="text"
            v-model="ruleForm.nickName"
            autocomplete="off"
            placeholder="请输入昵称"
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
          <button @click="reRegisterBtn" class="regBtn">注册</button>
        </el-form-item>
      </el-form>
    </div>
    <div class="login">
      已有账号?
      <router-link to="/login">点击登录</router-link>
    </div>
  </div>
</template>
<script>
import { userRegister } from "@/api/user";

export default {
  data() {
    return {
      ruleForm: {
        userName: "",
        nickName: "",
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
    reRegisterBtn() {
      if (this.ruleForm.userName == "") {
        this.$message.error("用户名不能为空");
        return;
      } else if (this.ruleForm.nickName == "") {
        this.$message.error("昵称不能为空");
        return;
      } else if (this.ruleForm.password == "") {
        this.$message.error("密码不能为空");
        return;
      } else {
        // console.log(this.ruleForm.userName);
        // console.log(this.ruleForm.nickName);
        // console.log(this.ruleForm.password);

        // userName: this.userName,
        // nickName: this.nickName,
        // password: this.password,

        userRegister(this.ruleForm)
          .then((res) => {
            if (res.flag == true) {
              this.$message(res.message);
              this.$store.commit("updateLoginUserNickname", this.nickName);
              // 注册成功后跳转到登录页面
              this.$router.push("/login").catch((err) => err);
            } else {
              // alert(res.data);
              this.$message.error("后台消息1:" + res.data);
            }
          })
          .catch((err) => {
            this.$message.error("后台消息2:" + err);
          });
      }
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