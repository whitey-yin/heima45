<template>
  <div class="login-contanier">
    <div class="left">
      <div class="title">
        <img src="../../assets/logo.png" alt />
        <div class="title-left">黑马面面</div>
        <div class="line"></div>
        <div class="title-right">用户登录</div>
      </div>
      <el-form ref="form" :model="form"  class="form">
        <el-form-item label="" class="phone">
          <el-input
            placeholder="请输入手机号"
            prefix-icon="el-icon-user"
            v-model="form.input1"
          ></el-input>
        </el-form-item>
        <el-form-item label="" class="password">
          <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            v-model="form.input2"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item label=""  class="numinput">
          <el-input 
            placeholder="请输入验证码"
            prefix-icon="el-icon-key"
            v-model="form.input3"
          ></el-input>
        </el-form-item>
        <el-form-item label=""  >
           <el-checkbox v-model="form.checked">我已阅读并同意
             <el-link type="primary">用户协议</el-link>和
             <el-link type="primary">隐私条款</el-link>
           </el-checkbox>
        </el-form-item>
        <el-form-item label=""  class="btnlogin">
            <el-button type="primary">登录</el-button>
           
        </el-form-item>
        <el-form-item label=""  class="btnzuce">
            <el-button type="primary">注册</el-button>
           
        </el-form-item>
        
      </el-form>
    </div>
    <img class="bg" src="../../assets/login_banner_ele.png" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        checked:true,
        input1: "",
        input2: "",
        input3: "",
      }
    };
  }
};
</script>

<style lang="less">
.login-contanier {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  .left {
    width: 478px;
    height: 550px;
    background-color: #f5f5f5;
    box-sizing: border-box;
    padding-left: 42px;
    padding-right: 42px;
    .title {
      display: flex;
      align-items: center;
      margin-left: 48px;
      margin-top: 50px;
      img {
        width: 22px;
        height: 17px;
        margin-right: 16px;
      }
      .title-left {
        font-size: 24px;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
        margin-right: 14px;
      }
      .line {
        width: 1px;
        height: 28px;
        background: #c7c7c7;
        margin-right: 12px;
      }
      .title-right {
        font-size: 22px;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
      }
    }
    .form {
      margin-top: 27px;
       .phone {
        margin-bottom: 25px;
      }
      .password {
        margin-bottom: 26px;
      }
      .numinput {
        margin-bottom: 32px;
      }
      .btnlogin {
        width: 100%;
        button {
          display: block;
          width: 100%;
        }
      }
      .btnzuce {
        width: 100%;
        button {
          display: block;
          width: 100%;
        }
      }
      
    }
  }

  .bg {
    width: 633px;
    height: 435px;
  }
}
</style>