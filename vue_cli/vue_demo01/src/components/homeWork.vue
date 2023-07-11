<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
    >
      <el-col span="7" offset="9">
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
      </el-col>

      <el-col span="7" offset="9">
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            show-password
            v-model="ruleForm.password"
          ></el-input>
        </el-form-item>
      </el-col>

      <el-col span="7" offset="9">
        <el-form-item label="密码确认" prop="passCon">
          <el-input
            type="password"
            show-password
            v-model="ruleForm.passCon"
          ></el-input>
        </el-form-item>
      </el-col>

      <el-col span="4" offset="9">
        <el-form-item label="短信验证码" prop="code">
          <el-input v-model="ruleForm.code"></el-input>
        </el-form-item>
      </el-col>

      <el-col span="4" offset="0">
        <el-button id="get">免费获取</el-button>
      </el-col>

      <el-col span="6" offset="10">
        <el-checkbox v-model="ruleForm.checked" id="checkbox"
          >我已阅读并同意</el-checkbox
        >
        <span>
          <el-link
            href="https://account.chsi.com.cn/account/help/agreement.jsp"
            type="primary"
            >《用户协议》</el-link
          >
        </span>
        、
        <span>
          <el-link
            href="https://account.chsi.com.cn/account/help/yszc.jsp"
            type="primary"
            >《隐私政策》
          </el-link>
        </span>
      </el-col>

      <el-col offset="9">
        <el-button
          type="info"
          id="activate"
          :disabled="!ruleForm.checked"
          @click="submitForm('ruleForm')"
          >立即开通</el-button
        >
      </el-col>

      <el-col span="6" offset="9">
        <span id="getPass">
          <el-link href="#" type="primary">找回密码</el-link>
        </span>
      </el-col>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        phone: "",
        password: "",
        passCon: "",
        code: "",
        checked: false,
      },
      rules: {
        phone: [
          { required: true, message: "手机号不能为空" },
          { min: 11, max: 11, message: "请输入有效的手机号" },
        ],
        password: [{ required: true, message: "密码不能为空" }],
        passCon: [{ required: true, message: "密码不能为空" }],
        code: [{ required: true, message: "验证码不能为空" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style>
#get {
  width: 180px;
  margin-left: 10px;
}
#checkbox {
  margin-left: 36px;
}
#activate {
  width: 340px;
  margin-left: 100px;
  margin-top: 20px;
  margin-bottom: 10px;
}
#getPass {
  margin-left: 100px;
}
</style>