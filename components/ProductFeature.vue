<template>
    <div>
        <SectionTitle :titleText="'商品特色'"/>
        <div class="section-little-feature-block">
            <LazyLittleFeatureBlock
                v-for="(littleFeatureBlockBody, index) in littleFeatureBlockBodys"
                :key="`littleFeatureBlockBody-${index}`"
                v-bind="littleFeatureBlockBody"
            />
        </div>
        
        
    </div>
</template>
<script>
import SectionTitle from '../components/baseComponents/SectionTitle.vue'
import LittleFeatureBlock from '../components/LittleFeatureBlock.vue'

export default {
    data() {
        return {
            littleFeatureBlockBodys: [
                {
                    titleIconUrl: './svgTemplate/icon/SvgIconPencil',
                    titleText: '文字品質',
                    descriptionText: `了解你的過往經歷
                        打造客製化的文字內容
                        完美體現你的個人優勢
                    `
                },
                {
                    titleIconUrl: './svgTemplate/icon/SvgIconHeart',
                    titleText: '用心製作',
                    descriptionText: `詳細閱讀欲報考學系簡章
                        深入了解學系特色與課程
                        撰寫出最符合該科系的備審資料
                    `
                },
                {
                    titleIconUrl: './svgTemplate/icon/SvgIconThumbUp',
                    titleText: '五星好評',
                    descriptionText: `製作過上百件備審資料
                        收到許多真實的五星評價
                        高達九成的申請上榜率
                    `
                },
                {
                    titleIconUrl: './svgTemplate/icon/SvgIconFolder',
                    titleText: '檔案類型',
                    descriptionText: `成品提供PPT及PDF檔
                        讓顧客可以自行對資料進行修改
                        省下製作不同學校的備審資料費用
                    `
                },
                {
                    titleIconUrl: './svgTemplate/icon/SvgIconMoney',
                    titleText: '多元付款',
                    descriptionText: `提供多種付款方式
                        蝦皮商城支付、直接轉帳
                        無卡存款、超商代碼繳費
                    `
                },
                {
                    titleIconUrl: './svgTemplate/icon/SvgIconPhone',
                    titleText: '即時客服',
                    descriptionText: `全年無休的09:00-21:00在線客服
                        任何諮詢都會在五個小時內回覆
                    `
                }
            ]
        }
    },
    components: {
        SectionTitle,
        LittleFeatureBlock
    }
}
</script>
<style scoped>
    .section-little-feature-block {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>