<template>
    <div class="w-100">
        <SectionTitle :titleText="'顧客回饋'"/>
        <div class="d-flex w-100">
            <template v-for="(customerFeedbackCardBodys, customerFeedbackCardIndex) in customerFeedbackCardBodys">
                <CustomerFeedbackCard
                    :key="`customerFeedbackCard-${customerFeedbackCardIndex}`"
                    v-bind="customerFeedbackCardBodys"
                    :customerFeedbackCardIndex="customerFeedbackCardIndex"
                />
            </template>
        </div>
    </div>
</template>
<script>
import SectionTitle from './baseComponents/SectionTitle.vue'
import CustomerFeedbackCard from './CustomerFeedbackCard.vue'
export default {
    components: {
        SectionTitle,
        CustomerFeedbackCard
    },
    data() {
        return {
            customerFeedbackCardBodys: [
                {
                    customerName: 'K*****6',
                    customerRemark: '顧客蝦皮賣場回饋',
                    feedbackContent: '一級棒的賣家，孩子因為要邊準備指考沒時間做資料，只好找代製的。真的是非常幫忙的賣家，一定幫你介紹客人！'
                },
                {
                    customerName: 'F*****s',
                    customerRemark: '顧客LINE回饋',
                    feedbackContent: '謝謝你們的協助，我順利上榜了！！！！謝謝你們在製作過程中不斷和我分享撰寫內容的小技巧，也幫我解決很多申請上的問題。'
                },
                {
                    customerName: 'W*****1',
                    customerRemark: '顧客蝦皮賣場回饋',
                    feedbackContent: '以前最不會寫自己的優缺點，但是賣家很有耐心的引導和我討論我的優點，並且把它描繪得非常好，感覺對我來說只是一件小小的事情，卻被寫得很凸顯自己並能在眾多自傳履歷中被看到的感覺。謝謝賣家，有機會會在光顧。'
                },
            ]
        }
    }
}
</script>