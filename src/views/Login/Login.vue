<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
    <img src="../../assets/images/logo.png" style="margin:25px 0 25px 0;width:230px;height:100px">
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
        <el-button type="danger" :loading="loading" @click.native.prevent="handleLogin" style="color:#FFFFFF ">ログイン</el-button>
      <!-- </el-form-item> -->
    </el-form>
    <div class="white-panel"></div>
  </div>
</template>


<style>
@import "./Login.scss";
</style>

<script src="./Login.js"></script> 