<template>
    <div class="container">
        <van-cell-group>
            <van-field v-model="amount" type="digit" label="贷款数额" placeholder="请输入贷款数额（万元）" />
            <van-field v-model="term" type="digit" label="贷款期限" placeholder="请输入贷款期限（年）" />
            <van-field v-model="rate" type="number" label="贷款利率" placeholder="请输入贷款利率（%）" />
            <van-radio-group v-model="way" direction="horizontal">
                <van-radio shape="square" name="1">等额本息</van-radio>
                <van-radio shape="square" name="2">等额本金</van-radio>
            </van-radio-group>
            <van-field v-model="advance" type="digit" label="提前还款月数" placeholder="请输入提前还款月数" />
            <p v-if="advance">已还利息
                <span class="num">{{ hasPay }}</span>,若在第{{ advance }}月提前还款，预计可省利息
                <span class="num">{{ save }}</span>，当月剩余本金<span class="num">{{ baseSum }}</span>
            </p>
        </van-cell-group>
        <van-button plain hairline type="info" size="small" @click="onQuery">查询</van-button>
        <json-excel class="export-excel-wrapper" :data="list.list"
            :title="'本息合计：' + list.totalPayment + ' 总利息：' + list.totalInterest" :fields="json_fields" name="房贷计算.xls">
            <van-button :loading="loading" loading-text="正在导出..." plain hairline type="info" size="small">导出
            </van-button>
        </json-excel>
        <div class="total">本息合计：<span class="num">{{ list.totalPayment || 0 }}</span> 总利息：<span class="num">{{
                list.totalInterest || 0
        }}</span></div>
        <table border="1px" align="center">
            <tr>
                <td>期数</td>
                <td>月供</td>
                <td>月供本金</td>
                <td>月供利息</td>
                <td>剩余本金（还款后）</td>
            </tr>
            <tr v-for="i in list.list" :key="i.endingBalance">
                <td>{{ i.period }}</td>
                <td>{{ i.monthlyPayment }}</td>
                <td>{{ i.principal }}</td>
                <td>{{ i.interest }}</td>
                <td>{{ i.endingBalance }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
const loanCalclateUtils = require('loan-calculate-utils');
import JsonExcel from 'vue-json-excel'

export default {
    name: "Loan",
    components: {
        JsonExcel,
    },
    data() {
        return {
            loading: false,
            amount: 130,
            term: 30,
            rate: 4.1,
            way: '1',
            advance: null,
            list: [],
            hasPay: 0,
            baseSum: 0,
            json_fields: {
                '期数': 'period',
                '月供': 'monthlyPayment',
                '月供本金': 'principal',
                '月供利息': 'interest',
                '剩余本金（还款后）': 'endingBalance'
            }
        }
    },
    computed: {
        save() {
            if (this.advance) {
                let hasPayList = this.list.list.slice(0, this.advance)
                this.baseSum = this.list.list.filter((item) => item.period == this.advance)[0].endingBalance
                console.log(this.list.list.filter((item) => item.period == this.advance))
                let hasPay = hasPayList.reduce(((pre, cur) => pre + Number(cur.interest)), 0)
                this.hasPay = hasPay.toFixed(0)
                return (this.list.totalInterest - hasPay).toFixed(0)
            }
            return 0
        }
    },
    mounted() {

        //calcAverageCapital 等额本金还款
        //calcAverageCapitalPlusInterest 等额本息还款
        // {
        //     period: 1,                      // 第几期
        //     monthlyPayment: "5307.27",      // 月供
        //     beginningBalance: "1000000.00", // 当月还款前剩余本金
        //     interest: "4083.33",            // 月供利息
        //     principal: "1223.93",           // 月供本金
        //     endingBalance: "998776.07",     // 当月还款后剩余本金
        // }
        this.onQuery()
    },

    methods: {
        onQuery() {
            if (this.way === '1') {
                this.list = loanCalclateUtils.calcAverageCapitalPlusInterest({
                    amount: this.amount * 10000,  // 贷款金额
                    term: this.term * 12,        // 贷款期数（月数）
                    rate: this.rate,        // 年利率
                })
            } else {
                this.list = loanCalclateUtils.calcAverageCapital({
                    amount: this.amount * 10000,  // 贷款金额
                    term: this.term * 12,        // 贷款期数（月数）
                    rate: this.rate,        // 年利率
                })
            }
        }
    },

}
</script>

<style scoped lang="less">
* {
    touch-action: pan-y;
}

.container {
    background-color: #f7f8fa;

    table {
        width: 100%;
    }

    .total {
        font-size: 18px;
    }

    .num {
        color: #FC0000;
    }

    .export-excel-wrapper {
        display: inline-block;
    }

    /deep/ .van-button {
        margin: 10px;
    }

    /deep/ .van-radio-group {
        padding: 10px 30px;
    }
}
</style>
