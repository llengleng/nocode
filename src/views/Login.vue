<template>
  <a-form-model class="nocode-login-form" ref="ruleForm" :model="ruleForm" :rules="rules" v-bind="layout">
    <a-form-model-item :wrapper-col="{ span: 14, offset: 9 }">
      <h1>登录</h1>
    </a-form-model-item>
    <a-form-model-item has-feedback label="用户名" prop="user">
      <a-input v-model="ruleForm.user" autocomplete="off" />
    </a-form-model-item>
    <a-form-model-item has-feedback label="密码" prop="pass">
        <a-input v-model="ruleForm.pass" type="password" autocomplete="off" />
      </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 7 }">
      <a-button type="primary" @click="submitForm('ruleForm')">
        Submit
      </a-button>
      <a-button style="margin-left: 10px" @click="resetForm('ruleForm')">
        Reset
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
export default {
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else {
        if (this.ruleForm.user == '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (!value) {
        callback(new Error('Please input the password again'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: '',
        user: '',
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'change' }],
        user: [{ validator: validatePass2, trigger: 'change' }],
      },
      layout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //TODO:权限管理、Token验证
          this.$router.push({ path: '/index' });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style>
.nocode-login-form {
  width: 350px;
  transform: translate(50%, 50%);
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
}
</style>