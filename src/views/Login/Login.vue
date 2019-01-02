<template>
  <div>
    <el-container>
      <el-header style="z-index:999">
          <NavMenu activeIndex="2"></NavMenu>
      </el-header>
    <div class="login-container">
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <img src="../../assets/images/logo.png" style="margin:25px 0 25px 0;width:230px;height:140px">
      <!-- <div style="border-bottom:50px;margin-bottom:60px;color:#2253d6;" >ログイン</div> -->
        <div style="text-align:left;border-width:50px;color:#4D4D4D;size:14px">
          <span>ユーザーID</span>
        </div>
        <el-form-item prop="username">
          <span class="svg-container">
            <svg-icon icon-class="user" style="transform:scale(3);margin-right:10px"/>
          </span>
          <el-input v-model="loginForm.username" name="username" type="text" auto-complete="on" placeholder="ユーザー名" />
        </el-form-item>
        <div style="text-align:left;border-width:50px;color:#4D4D4D;size:14px">
          <span>パスワード</span>
        </div>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" style="transform:scale(2);margin-right:10px"/>
          </span>
          <el-input
            :type="pwdType"
            v-model="loginForm.password"
            name="password"
            auto-complete="on"
            placeholder="パースワード"
            @keyup.enter.native="handleLogin" />
          <span class="show-pwd" @click="showPwd">
            <svg-icon icon-class="eye" />
          </span>
        </el-form-item>
        <!-- <el-form-item> -->
          <el-button type="danger" :loading="loading" @click.native.prevent="handleRegister" style="width:49%;color:#FFFFFF ">レジスタ</el-button>
          <el-button type="danger" :loading="loading" @click.native.prevent="handleLogin" style="width:48%;color:#FFFFFF ">ログイン</el-button>
        <!-- </el-form-item> -->
      </el-form>
      <div class="white-panel"></div>
    </div>
    </el-container>
  </div>
</template>



<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;

/* reset element-ui css */
.login-container {
  .el-form-item__error {
    left: 55px;
  }
  .el-input {
    display: inline-block;
    height: 40px;
    width: 80%;
    padding-right:10px;
    input {
      background: transparent;
      background-color: white;
      border-width: 0px 0px 0px 0px;
      // border-bottom-color: darkgrey;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #1f2d3d;
      height: 40px;
      padding-top:solid;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px white inset !important;
        -webkit-text-fill-color: #1f2d3d !important;
      }
    }
  }
  input-disabled {
    background: transparent;
    background-color: white;
    border-width: 0px 0px 0px 0px;
    border-bottom-color: darkgrey;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    color: #c0c4cc;
    height: 40px;
    &:-webkit-autofill {
      box-shadow: 0 0 0px 1000px white inset !important;
      -webkit-text-fill-color: #1f2d3d !important;
    }
  }
  .el-button {
    border: 0px;
    width: 100%;
    height: 40px;
    background-color:#c73d33;
    margin-top: 15px;
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: #ebeef5;
    border-radius: 5px;
    color: #454545;
    text-align: center;
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-size:cover;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 450px;
    text-align:center;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
    // background-color: #ebeef5;
    border-radius: 10px;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .title {
    font-size: 26px;
    font-weight: 400;
    color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
    color: #666666;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: #1f2d3d;
    cursor: pointer;
    user-select: none;
  }

  #demo.demo {
    color: white;
    background-color: blue;
  }
  .white-panel {
    position: absolute;
    width: 500px;
    height: 520px;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    opacity: .6;
    z-index: -1;
  }

  .username-input {
    width: 100%;
  }
  .password-input{
    width:100%;
  }
}
</style>

<script src="./Login.js"></script> 