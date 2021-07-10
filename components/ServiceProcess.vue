<template>
    <div>
        <SectionTitle :titleText="'服務流程'"/>
        <div class="service-process-section-block">
            <template v-for="(serviceProcessCardBody, serviceProcessCardIndex) in serviceProcessCardBodys">
                <div 
                    :key="`ServiceProcessCard-${serviceProcessCardBody.indexNum}`"
                    :style="{ marginLeft: `${serviceProcessCardIndex * 200}px` }"
                >
                    <ServiceProcessCard
                        v-bind="serviceProcessCardBody"
                    />
                    <br/>
                </div>
            </template> 
        </div>
    </div>
</template>
<script>
import SectionTitle from '../components/baseComponents/SectionTitle.vue'
import ServiceProcessCard from '../components/ServiceProcessCard.vue'
export default {
    components: {
        SectionTitle,
        ServiceProcessCard
    },
    data() {
        return {
            serviceProcessCardBodys: [
                {
                    indexNum: '01',
                    titleIconUrl: './svgTemplate/icon/SvgIconPhonePlus',
                    titleText: '專業諮詢',
                    descriptionText: `透過蝦皮賣場聯繫雨耕書堂
                        討論最適合你的製作方案  
                    `
                },
                {
                    indexNum: '02',
                    titleIconUrl: './svgTemplate/icon/SvgIconMoney',
                    titleText: '下單付款',
                    descriptionText: `雨耕書堂提供多種付款方式
                        蝦皮付款、銀行轉帳、
                        無卡存款及超商代碼繳費
                    `
                },
                {
                    indexNum: '03',
                    titleIconUrl: './svgTemplate/icon/SvgIconPencil',
                    titleText: '填寫表單',
                    descriptionText: `填寫雨耕書堂設計的問卷
                        提供個人資料及特殊經歷
                    `
                },
                {
                    indexNum: '04',
                    titleIconUrl: './svgTemplate/icon/SvgIconFile',
                    titleText: '傳送資料',
                    descriptionText: `將需要放入備審的證明文件
                        都一併傳給雨耕書堂
                    `
                },
                {
                    indexNum: '05',
                    titleIconUrl: './svgTemplate/icon/SvgIconTick',
                    titleText: '完成製作',
                    descriptionText: `完成客製化備審資料製作
                        提供一個月的售後服務
                    `
                }
            ]
        }
    }
}
</script>
<style scoped>
    .service-process-section-block {
        display: inline-block;
    }
</style>