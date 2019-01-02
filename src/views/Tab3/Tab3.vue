<template>
    <div class="container">
        <el-container>
            <el-header>
                <NavMenu activeIndex="2"></NavMenu>
            </el-header>
            <el-main>
                <el-row>
                    <el-col :span="40"><div class="grid-content-header">お客様の購入履歴です。</div></el-col>
                </el-row>
            </el-main>
            <el-main>
                <template>
                    <el-table
                        :data="buyHistoryData"
                        stripe
                        :header-cell-style="{
                            'color':'white',
                            'background': '#c73d33',
                            'border-bottom': '1px rgb(103, 194, 58) solid',
                            'border-left': '0px',
                            'text-align': 'center'}"
                        style="width: 1480px"
                        max-height="550" >
                        <el-table-column
                        fixed
                        label="検索条件"
                        width="680" >
                        <template scope="scope">
                            <el-row>
                                <el-col :span="40"><div class="grid-content-middle" style="padding:5px 0px 0px 0px">‣選択指標: {{scope.row.target}}</div></el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="40"><div class="grid-content-middle" style="padding:5px 0px 0px 0px">‣選択国: {{scope.row.country}}</div></el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="40"><div class="grid-content-middle" style="padding:5px 0px 0px 0px">‣選択業界: {{scope.row.category}}</div></el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="40"><div class="grid-content-middle" style="padding:5px 0px 0px 0px">‣選択年分: {{scope.row.year}}</div></el-col>
                            </el-row>
                        </template>
                        </el-table-column>
                        <el-table-column
                        prop="price"
                        label="購入価格"
                        width="200" >
                        </el-table-column>
                        <el-table-column
                        prop="paidTime"
                        label="購入時刻"
                        width="200" >
                        </el-table-column>
                        <el-table-column
                        prop="status"
                        label="決済状態"
                        width="100" >
                        </el-table-column>
                        <el-table-column
                        label="領収書発行"
                        width="100">
                        <template scope="scope">
                            <div v-if="scope.row.status=== '決済保留中'" >
                                <el-button disabled
                                @click.native.prevent="deleteRow(scope.$index, buyHistoryData)"
                                size="small" 
                                type="danger" style="background:#888888;border:#c73d33;opacity:0.5;">
                                発行
                                </el-button>
                            </div>
                            <div v-else >
                                <el-button 
                                @click.native.prevent="deleteRow(scope.$index, buyHistoryData)"
                                size="small" 
                                type="danger" >
                                発行
                                </el-button>
                            </div>
                            
                        </template>
                        </el-table-column>
                        <el-table-column
                        label="ファイル格納"
                        width="">
                        <template scope="scope">
                            <div v-if="scope.row.active=== 'false'" >
                                <el-button disabled
                                @click.native.prevent="fileDownload(scope.$index, buyHistoryData)"
                                size="small" 
                                type="danger" style="background:#888888;border:#c73d33;opacity:0.5;">
                                ダウンロード
                                </el-button>
                            </div>
                            <div v-if="scope.row.active=== 'true'" >
                                <el-button
                                @click.native.prevent="fileDownload(scope.$index, buyHistoryData)"
                                size="small" 
                                type="danger" >
                                ダウンロード
                                </el-button>
                            </div>
                        </template>
                        </el-table-column>
                    </el-table>
                </template>
            </el-main>
        </el-container>
    </div>
</template>

<style>
@import "./Tab3.scss";
</style>

<style rel="stylesheet/scss" lang="scss">
.container {
  .el-button {
    background-color:#c73d33;
  }
}
</style>
<script src="./Tab3.js"></script> 