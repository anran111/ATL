<template>
    <div class="container">
        <el-container>
            <el-header>
                <NavMenu activeIndex="2"></NavMenu>
            </el-header>
            <el-main>
                <el-row>
                    <el-col :span="40"><div class="grid-content-header">以下の条件で問題なければ、「購入」ボタンを押してください。</div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="40"><div class="grid-content-middle" style="padding:5px 0px 0px 0px">‣選択指標: {{type}} {{target}}</div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="40"><div class="grid-content-middle" style="padding:5px 0px 0px 0px">‣選択国: {{country}}</div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="40"><div class="grid-content-middle" style="padding:5px 0px 0px 0px">‣選択業界: {{category}}</div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="40"><div class="grid-content-middle" style="padding:5px 0px 0px 0px">‣選択年分: {{year}}</div></el-col>
                </el-row>
            </el-main>
            <el-main style="padding-bottom: 0px;">
                <el-row :gutter="10" >
                    <el-col :xs="4" :sm="6" :md="3" :lg="3" :xl="3" style="float:left;margin-left:865px">
                    <el-span>データ件数：{{count}}件</el-span></el-col>
                    <el-col :xs="4" :sm="6" :md="3" :lg="3" :xl="3" style="float:left;">
                    <el-span>購入金額：￥{{money}}</el-span></el-col>
                    <el-col :xs="8" :sm="6" :md="4" :lg="2" :xl="1">
                        <el-button type="danger" v-on:click="buyData">購入</el-button>
                    </el-col>
                    <el-col :xs="8" :sm="6" :md="4" :lg="1" :xl="1">
                        <el-button type="danger"  v-on:click="back">戻る</el-button>
                    </el-col>
                </el-row>
                <el-dialog
                title="ATLATL"
                :visible.sync="dialogVisible"
                width="30%">
                <span>決済確認中です。</span></br></br>
                <span>決済完了したら、購入履歴からファイルをダウンロードできます。</span>
                <span slot="footer" class="dialog-footer">
                    <el-button type="danger" @click="buyHistryShow"  >購入履歴へ</el-button>
                </span>
                </el-dialog>
                
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
@import "./Tab2.scss";
</style>

<style rel="stylesheet/scss" lang="scss">
.container {
  .el-button {
    background-color:#c73d33;
  }
}
</style>
<script src="./Tab2.js"></script> 