<template>

  <div class="container">
    <el-header>
      <NavMenu activeIndex="1"></NavMenu>
    </el-header>
    <img src="../../assets/images/logo.png" style="margin:25px 0 25px 0;width:230px;height:140px"/>
     <h3 class="title" style="text-align: left; width: 40%;border-bottom: solid;margin-left:30%">個人情報</h3>
      <div style="width:40%;margin-left:30%">
          <el-row>
            <label class="contact_label">お名前</label>
            <el-input name="userid"  type="text"  v-model="userid" autoComplete="on" :rules="loginRules" style="margin-left:30px;width:330px;float:left"/>
          </el-row>
          <el-row>
            <label class="contact_label" >仕事用メール</label>
            <el-input name="emailAddress"  type="text"  v-model="emailAddress" autoComplete="on" :rules="loginRules" style="margin-left:30px;width:330px;float:left"/>
          </el-row>
          <el-row>
            <label class="contact_label" >電話番号</label>
            <el-input name="telephone"  type="text"  v-model="telephone" autoComplete="on" style="margin-left:30px;width:330px;float:left"/>
          </el-row>
          <el-row>
            <label class="contact_label" >ユーザー名</label>
            <el-input name="username"  type="text"  v-model="userName" autoComplete="on" style="margin-left:30px;width:330px;float:left"/>
          </el-row>
          <el-row>
            <label class="contact_label" >パスワード</label>
            <el-input name="password"  type="text"  v-model="password" autoComplete="on" :rules="loginRules" style="margin-left:30px;width:330px;float:left"/>
          </el-row>
          <el-row>
            <label class="contact_label" >パスワードの確認</label>
            <el-input name="password2"  type="text"  v-model="password2" autoComplete="on" :rules="loginRules" style="margin-left:30px;width:330px;float:left"/>
          </el-row>
          <el-row>
            <label class="contact_label" >会社名</label>
            <el-input name="company"  type="text"  v-model="company" autoComplete="on" style="margin-left:30px;width:330px;float:left"/>
          </el-row>
          <el-row>
            <label class="contact_label" >業界</label>
            <el-input name="industry"  type="text"  v-model="industry" autoComplete="on" style="margin-left:30px;width:330px;float:left"/>
          </el-row>
          <el-row>
            <label class="contact_label" >役職名</label>
            <el-input name="role"  type="text"  v-model="role" autoComplete="on" style="margin-left:30px;width:330px;float:left"/>
          </el-row>
          <el-row>
            <label class="contact_label" >国</label>
            <el-input name="country"  type="text"  v-model="country" autoComplete="on" style="margin-left:30px;width:330px;float:left"/>
          </el-row>
      </div>
      <h3 class="title" style="text-align: left; width: 40%;border-bottom: solid;margin-top:20px;margin-left:30%">請求先情報</h3>
      <div style="width:40%;margin-left:30%">
          <el-row>
            <label class="contact_label" >請求先名</label>
            <el-input name="telNo"  type="text"  v-model="telNo" autoComplete="on" style="margin-left:30px;width:330px;float:left"/>
          </el-row>
          <el-row>
            <label class="contact_label" >請求先住所</label>
            <el-input name="address"  type="text"  v-model="address" autoComplete="on" style="margin-left:30px;width:330px;float:left"/>
          </el-row>
          <el-row>
            <label class="contact_label" >郵便番号</label>
            <el-input name="postCode"  type="text"  v-model="postCode" autoComplete="on" style="margin-left:30px;width:330px;float:left"/>
          </el-row>
      </div>
      <h3 class="title" style="text-align: left; width: 40%;border-bottom: solid;margin-top:20px;margin-left:30%">支払情報（クレジットカードのみ）</h3>
      <div style="width:40%;margin-left:30%">
          <el-row>
            <label class="contact_label" >カード番号</label>
            <el-input name="card_no"  type="text"  v-model="card_no" autoComplete="on" style="margin-left:30px;width:330px;float:left"/>
          </el-row>
          <el-row>
            <label class="contact_label" >カード名義</label>
            <el-input name="card_user_name"  type="text"  v-model="card_user_name" autoComplete="on" style="margin-left:30px;width:330px;float:left"/>
          </el-row>
          <el-row>
            <label class="contact_label" >カード有効期限</label>
            <el-date-picker
              v-model="card_valid_date"
              type="date"
              placeholder="日期選択"
              format="yyyy-MM-dd" 
              value-format="yyyy-MM-dd"
              style="margin-left:30px;width:330px;float:left">
            </el-date-picker>
          </el-row>
      </div>
      <div style="width:40%;margin-left:30%;margin-top:20px;height:60px">
          <el-row>
            <el-button type="danger" @click.native.prevent="handleResigter" style="width:100%" >
            登録
            </el-button>
         </el-row>
      </div>
  </div>
</template>


<style>
@import "./Register.scss";
</style>

<style rel="stylesheet/scss" lang="scss">
.container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  .el-button {
    background-color:#c73d33;
  }
}
</style>

<script src="./Register.js"></script> 