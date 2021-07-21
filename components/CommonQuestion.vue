<template>
    <div>
        <SectionTitle :titleText="'Q&amp;A'"/>
        <div class="mx-4">
            <template v-for="(questionAndAnswerBody, questionAndAnswerIndex) in questionAndAnswerBodys">
                <div
                    :key="`question-and-answer-block-${questionAndAnswerIndex}`"
                    class="question-and-answer-block text-left p-3 my-4"
                >
                    <div class="h5 mb-4">
                        <span>Q：{{questionAndAnswerBody.question}}</span>
                    </div>
                    <div class="font-size-point-nine">
                        <span>A：{{questionAndAnswerBody.answer}}</span>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
import SectionTitle from './baseComponents/SectionTitle.vue'
export default {
    components: {
        SectionTitle
    },
    data() {
        return {
            questionAndAnswerBodys: [
                {
                    question: '我沒有辦法使用蝦皮賣場，還可以怎麼付款？',
                    answer: '可以選擇銀行轉帳、無摺存款或超商代碼繳費。'
                },
                {
                    question: '我不清楚我該選擇哪一種製作方案，該怎麼辦呢？',
                    answer: '可以透過蝦皮商城與雨耕書堂聊聊，馬上會有客服協助你。'
                },
                {
                    question: '我可以只購買自傳、讀書心得或申請動機嗎？',
                    answer: '有提供分項單購。請透過蝦皮商城聯繫客服，客服將會依照你的特殊需求，討論最適合你的方案。'
                },
                {
                    question: '想知道備審資料排版會大概怎麼呈現？',
                    answer: '如同這個網頁一樣。雨耕書堂在備審資料排版上堅持使用白色作為背景，排版以簡單明瞭為主，不會有花俏的設計風格。'
                },
                {
                    question: '你們有提供排版範本可以參考嗎？',
                    answer: '為了維護顧客權益，雨耕書堂不提供排版樣式給非顧客査看。'
                },
                {
                    question: '我甚麼時候可以收到製作完成的商品呢？',
                    answer: '一般件製作時間為十天內，急件製作時間為三天內。'
                },
            ]
        }
    }
}
</script>
<style scoped>
    .question-and-answer-block {
        box-shadow: 0px .2rem .2rem rgba(0, 0, 0, 0.25);
        border-radius: .4rem;
    }
</style>