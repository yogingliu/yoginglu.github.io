<template>
    <div>
        <SectionTitle :titleText="'服務項目'"/>
        <div class="service-plan-card-section">
            <template
                v-for="servicePlanCardViewModel in servicePlanCardViewModels"
            >
                <ServicePlanCard
                    :key="servicePlanCardViewModel.planId"
                    v-bind="servicePlanCardViewModel"
                />
            </template>
            
        </div>
    </div>
</template>
<script>
import SectionTitle from './baseComponents/SectionTitle.vue'
import ServicePlanCard from './ServicePlanCard.vue'
export default {
    data() {
        return {
            servicePlanCardViewModels: [
                // 1 完整備審資料代製
                {
                    planId: 1,
                    planTitle: '完整備審資料代製',
                    planRepresentColor: '#4981B6',
                    planPrice: 6000,
                    planDescription: `依照學校簡章要求製作完整的備審資料
                        完成後的檔案可以直接上傳至學校報名系統
                        檔案格式符合校方規章可以直接至影印店輸出
                        製作時間為十日內交付電子檔
                    `,
                    featuresOfProject: [
                        {
                            isHavingFeature: true,
                            featureText: '撰寫自傳',
                            featureId: '1'
                        },
                        {
                            isHavingFeature: true,
                            featureText: '撰寫讀書計畫',
                            featureId: '2'
                        },
                        {
                            isHavingFeature: true,
                            featureText: '撰寫申請動機',
                            featureId: '3'
                        },
                        {
                            isHavingFeature: true,
                            featureText: '製作封面',
                            featureId: '4'
                        },
                        {
                            isHavingFeature: true,
                            featureText: '製作目錄',
                            featureId: '5'
                        },
                        {
                            isHavingFeature: true,
                            featureText: '文字內容排版',
                            featureId: '6'
                        },
                        {
                            isHavingFeature: true,
                            featureText: '有利審査資料排版',
                            featureId: '7'
                        },
                    ],
                    extraPriceConditions: [
                        {
                            id: 1,
                            isPlus: true,
                            price: 1500,
                            conditionText: '碩士班'
                        },
                        {
                            id: 2,
                            isPlus: true,
                            price: 2000,
                            conditionText: '急件'
                        },
                    ],
                    suitableText: '此方案適合所有申請者'
                },

                // 2 文字代撰
                {
                    planId: 2,
                    planTitle: '文字代撰',
                    planRepresentColor: '#FFC278',
                    planPrice: 3500,
                    planDescription: `填寫學校所發放的個人資料表或申請書
                        撰寫引導式或開放式問題
                        製作時間為十日內交付電子檔
                    `,
                    featuresOfProject: [
                        {
                            isHavingFeature: true,
                            featureText: '撰寫自傳',
                            featureId: '1'
                        },
                        {
                            isHavingFeature: true,
                            featureText: '撰寫讀書計畫',
                            featureId: '2'
                        },
                        {
                            isHavingFeature: true,
                            featureText: '撰寫申請動機',
                            featureId: '3'
                        },
                        {
                            isHavingFeature: false,
                            featureText: '製作封面',
                            featureId: '4'
                        },
                        {
                            isHavingFeature: false,
                            featureText: '製作目錄',
                            featureId: '5'
                        },
                        {
                            isHavingFeature: false,
                            featureText: '文字內容排版',
                            featureId: '6'
                        },
                        {
                            isHavingFeature: false,
                            featureText: '有利審査資料排版',
                            featureId: '7'
                        },
                    ],
                    extraPriceConditions: [
                        {
                            id: 1,
                            isPlus: true,
                            price: 1000,
                            conditionText: '碩士班'
                        },
                        {
                            id: 2,
                            isPlus: true,
                            price: 1000,
                            conditionText: '急件'
                        },
                    ],
                    suitableText: '適合有規定格式的申請者'
                },

                // 3 資料排版
                {
                    planId: 3,
                    planTitle: '資料排版',
                    planRepresentColor: '#4A8872',
                    planPrice: 3000,
                    planDescription: `將資料整理成學校要求的格式
                        完成後的檔案可以直接上傳至學校
                        檔案格式符合校方規章可以直接至影印店輸出
                        製作時間為十日內交付電子檔
                    `,
                    featuresOfProject: [
                        {
                            isHavingFeature: false,
                            featureText: '撰寫自傳',
                            featureId: '1'
                        },
                        {
                            isHavingFeature: false,
                            featureText: '撰寫讀書計畫',
                            featureId: '2'
                        },
                        {
                            isHavingFeature: false,
                            featureText: '撰寫申請動機',
                            featureId: '3'
                        },
                        {
                            isHavingFeature: true,
                            featureText: '製作封面',
                            featureId: '4'
                        },
                        {
                            isHavingFeature: true,
                            featureText: '製作目錄',
                            featureId: '5'
                        },
                        {
                            isHavingFeature: true,
                            featureText: '文字內容排版',
                            featureId: '6'
                        },
                        {
                            isHavingFeature: true,
                            featureText: '有利審査資料排版',
                            featureId: '7'
                        },
                    ],
                    extraPriceConditions: [
                        {
                            id: 1,
                            isPlus: true,
                            price: 500,
                            conditionText: '碩士班'
                        },
                        {
                            id: 2,
                            isPlus: true,
                            price: 1000,
                            conditionText: '急件'
                        },
                    ],
                    suitableText: '適合有規定格式的申請者'
                },


            ]
        }
        
    },
    components: {
        SectionTitle,
        ServicePlanCard
    },
}
</script>
<style scoped>
    .service-plan-card-section {
        display: flex;
        justify-content: space-around;
    }

    @media screen and (max-width: 576px) {
        .service-plan-card-section {
            flex-direction: column;
        }
    }
</style>