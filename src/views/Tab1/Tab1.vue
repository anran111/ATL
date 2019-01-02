<template>
    <div class="container">
        <el-container>
            <el-header>
                <NavMenu activeIndex="2"></NavMenu>
            </el-header>
            <el-main>
            <div style="width:1480px;height:350px">
                <el-row :gutter="10">
                <el-col :span="6">
                 <el-container>
                        <el-header>
                            <el-row>
                            <div style="margin-left: 100px;">
                            <span>
                                <H4 style="margin-top:-15px;float:left">指標選択</H4>
                                <el-button type="danger" style="margin-top:-5px;float:right;margin-right:30px" v-on:click="resetTargetChecked">条件クリア</el-button>
                            </span>
                            </div>
                            </el-row>
                        </el-header>
                        <el-main>
                           <div id="targetTree" class="grid-content" style="height:300px;overflow:auto;border:2px solid #888888;">
                            <el-tree class="bg-purple"
                            style="background: white;border:0px;pointer-events: auto;opacity: 1;cursor: auto;"
                            :data="target"
                            :props="defaultProps"
                            ref="targetTree"
                            node-key="id" 
                            highlight-current
                            accordion 
                            @node-click="targethandleNodeClick">
                            </el-tree>
                        </div>
                        </el-main>
                    </el-container>
                </el-col>
                <el-col :span="6">
                <el-container>
                        <el-header>
                        <el-row>
                            <div style="margin-left: 100px;">
                                <span>
                                    <H4 style="margin-top:-15px;float:left">国選択</H4>
                                    <el-button type="danger" style="margin-top:-5px;float:right;margin-right:30px" v-on:click="resetCountryChecked">条件クリア</el-button>
                                </span>
                            </div>
                        </el-row>
                        </el-header>
                        <el-main>
                            <div id="countryTree" class="grid-content" style="height:300px;overflow:auto;border:2px solid #888888;">
                            <el-tree 
                            style="background: white;border:0px;pointer-events: none;opacity: 0.6;cursor: not-allowed;"
                            :data="country"
                            :props="defaultProps"
                            ref="countryTree"
                            default-expanded-keys = "countryIdArr"
                            node-key="id" 
                            highlight-current
                            accordion
                            @node-click="countryhandleNodeClick">
                            </el-tree>
                        </div>
                        </el-main>
                    </el-container>
                </el-col>
                <el-col :span="6">
                <el-container>
                        <el-header>
                            <el-row>
                                <div style="margin-left: 100px;">
                                    <span>
                                        <H4 style="margin-top:-15px;float:left">業界選択</H4>
                                        <el-button type="danger" style="margin-top:-5px;float:right;margin-right:30px" v-on:click="resetCategoryChecked">条件クリア</el-button>
                                    </span>
                                </div>
                            </el-row>
                        </el-header>
                        <el-main>
                        <div id="categoryTree" class="grid-content" style="height:300px;overflow:auto;border:2px solid #888888;">
                            <el-tree :data="props" show-checkbox node-key="id" :props="defaultProps" 
                            style="width:500px;background: white;border:0px;pointer-events: none;opacity: 0.6;cursor: not-allowed;" ref="categoryTree" 
                            check-strictly
                            highlight-current 
                            @node-click="categoryhandleNodeClick"
                            @check="categoryhandleNodeChecked"></el-tree>
                        </div>
                        </el-main>
                    </el-container>
                </el-col>
                <el-col :span="6">
                    <el-container>
                        <el-header>
                            <el-row>
                                <div style="margin-left: 100px;">
                                    <span>
                                        <H4 style="margin-top:-15px;float:left;">年分選択</H4>
                                        <el-button type="danger" style="margin-top:-5px;float:right;margin-right:20px" v-on:click="resetYearChecked">条件クリア</el-button>
                                    </span>
                                </div>
                            </el-row>
                        </el-header>
                        <el-main>
                            <div id="yearSearch" class="grid-content" >
                                <el-checkbox-group v-model="checked" style="border:0px;">
                                    <el-checkbox class="year-search"  ref="yearCheckBox" :disabled="yearDisabledFlg"
                                    v-for="item in checkList" :key="item.id" :label="item.id" @change="yearhandelChange">{{item.label}}</el-checkbox>
                                </el-checkbox-group>
                            </div>
                        </el-main>
                    </el-container>
                </el-col>
                </el-row>
            </div>
            </el-main>
            <el-main>
            <el-row :gutter="10" v-if="searchFlg === 'true'">
            <el-col :xs="4" :sm="6" :md="8" :lg="15" :xl="11">
            <el-span style="float:left;margin-left:100px" >{{searchCount}}件のデータを発見しました。</el-span></el-col>
            <el-col :xs="4" :sm="6" :md="3" :lg="3" :xl="11">
            <el-span>購入金額：￥{{money}}</el-span></el-col>
            <el-col :xs="8" :sm="6" :md="3" :lg="2" :xl="1" style="margin-left:118px">
            <el-button type="danger"  icon="el-icon-search" v-on:click="search">検索</el-button>
            </el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="2" :xl="1">
            <el-button type="danger"  v-on:click="buy">購入確認</el-button>
            </el-col>
            </el-row>
            <el-row :gutter="10" v-if="searchFlg === 'false'">
            <el-col :xs="8" :sm="6" :md="3" :lg="2" :xl="1" style="margin-left:1235px">
            <el-button type="danger"  icon="el-icon-search" v-on:click="search">検索</el-button>
            </el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="2" :xl="1">
            <el-button type="danger"  v-on:click="buy">購入確認</el-button>
            </el-col>
            </el-row>
            </el-main>
            <el-main>
                <div v-if="type === 'brand'" class = "searchByBrand" style="width:1400px;margin-left:85px;text-align:left;">
                    <template>
                        <el-table :data="tableDataBrand" key="tableDataBrand" stripe border :header-cell-style="{
                            'color':'white',
                            'background': '#c73d33',
                            'border-bottom': '1px rgb(103, 194, 58) solid',
                            'border-left': '0px'
                         }" style="width: 100%" height="335">
                            <el-table-column fixed prop="category" label="CATEGORY" width="250">
                            </el-table-column>
                            <el-table-column fixed prop="brand" label="BRAND" width="200">
                            </el-table-column>
                            <el-table-column fixed prop="company" label="COMPANY" width="200">
                            </el-table-column>
                            <template v-for="(col) in checkList">
                                <el-table-column :prop="col.prop" :label="col.label">
                                    <template scope="scope">
                                        <span v-if="scope.row[col.prop]=== '〇'" style="color: #0a7c43;">〇</span>
                                        <span v-else-if="scope.row[col.prop]=== '✖'" style="color:red">X</span>
                                    </template>
                                </el-table-column>
                            </template>
                        </el-table>
                    </template>
                </div>
                <div v-else-if="type === 'category'" class = "searchByCategory" style="width:1400px;margin-left:85px;text-align:left" >
                    <template>
                        <el-table :data="tableDataCategory" key="tableDataCategory" stripe border :header-cell-style="{
                            'color':'white',
                            'background': '#c73d33',
                            'border-bottom': '1px rgb(103, 194, 58) solid',
                            'border-left': '0px'
                         }" style="width: 100%;" height="335">
                            <el-table-column fixed prop="category" label="CATEGORY" width="440">
                            </el-table-column>
                            <template v-for="(col) in checkList">
                                <el-table-column :prop="col.prop" :label="col.label">
                                    <template scope="scope">
                                        <span v-if="scope.row[col.prop]=== '〇'" style="color: #0a7c43;">〇</span>
                                        <span v-else-if="scope.row[col.prop]=== '✖'" style="color:red">X</span>
                                    </template>
                                </el-table-column>
                            </template>
                        </el-table>
                    </template>
                </div>
                <div v-else-if="type === 'company'" class = "searchByCompany" style="width:1400px;margin-left:85px;text-align:left;">
                    <template>
                        <el-table :data="tableDataCompany" key="tableDataCompany" stripe border :header-cell-style="{
                            'color':'white',
                            'background': '#c73d33',
                            'border-bottom': '1px rgb(103, 194, 58) solid',
                            'border-left': '0px'
                         }" style="width: 100%" height="335">
                            <el-table-column fixed prop="category" label="CATEGORY" width="300">
                            </el-table-column>
                            <el-table-column fixed prop="company" label="COMPANY" width="250">
                            </el-table-column>
                            <template v-for="(col) in checkList">
                                <el-table-column :prop="col.prop" :label="col.label">
                                    <template scope="scope">
                                        <span v-if="scope.row[col.prop]=== '〇'" style="color: #0a7c43;">〇</span>
                                        <span v-else-if="scope.row[col.prop]=== '✖'" style="color:red">X</span>
                                    </template>
                                </el-table-column>
                            </template>
                        </el-table>
                    </template>
                </div>
                <div v-else-if="type === 'channel'" class = "searchByChannel" style="width:1400px;margin-left:85px;text-align:left;">
                    <template>
                        <el-table :data="tableDataChannel" key="tableDataChannel" stripe border :header-cell-style="{
                            'color':'white',
                            'background': '#c73d33',
                            'border-bottom': '1px rgb(103, 194, 58) solid',
                            'border-left': '0px'
                        }" style="width: 100%" height="335">
                            <el-table-column fixed prop="category" label="CATEGORY" width="300">
                            </el-table-column>
                            <el-table-column fixed prop="channel" label="CHANNEL" width="250">
                            </el-table-column>
                            <template v-for="(col) in checkList">
                                <el-table-column :prop="col.prop" :label="col.label">
                                    <template scope="scope">
                                        <span v-if="scope.row[col.prop]=== '〇'" style="color: #0a7c43;">〇</span>
                                        <span v-else-if="scope.row[col.prop]=== '✖'" style="color:red">X</span>
                                    </template>
                                </el-table-column>
                            </template>
                        </el-table>
                    </template>
                </div>
            </el-main>
        </el-container>
        
    </div>
</template>

<style>
@import "./Tab1.scss";
</style>

<style rel="stylesheet/scss" lang="scss">
.container {
  .el-button {
    background-color:#c73d33;
  }
}
</style>

<script src="./Tab1.js"></script> 