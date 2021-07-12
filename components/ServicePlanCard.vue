<template>
    <div class="service-plan-card">
        <div class="service-plan-border-bottom-block text-left mx-4 px-3">
            <div class="font-size-2 py-3">NT$6000</div>
            <div :style="{ color: `#4981B6` }" class="font-size-1-point-4 my-2">完整備審資料代製</div>
            <p class="white-space-pre-line my-3 text-description-service-plan-card">依照學校簡章要求製作完整的備審資料
                完成後的檔案可以直接上傳至學校報名系統
                檔案格式符合校方規章可以直接至影印店輸出
                製作時間為十日內交付電子檔</p>
        </div>
        <div class="service-plan-border-bottom-block p-5  mx-4  text-left">
            <div
                v-for="feature in featuresOfProject"
                :key="`feature-${feature.featureId}`"
                class="d-flex"
            >
                <!-- 沒有打勾也要保留外框位置 -->
                <div class="feature-tick-icon-block mr-2">
                    <SvgIconTick class="feature-tick-icon" v-if="feature.isHavingFeature" />
                </div>
                <div>
                    <span :style="{ fontWeight: `${feature.isHavingFeature? 'bold' : 'normal'}`}">{{feature.featureText}}</span>
                </div>
            </div>
        </div>
        <div>
            <div class="mx-4 px-4 py-4">
                <div class="d-flex justify-content-around my-2">
                    <div v-for="extraPriceCondition in extraPriceConditions"
                        :key="extraPriceCondition.id"
                        
                    >
                        <span>{{extraPriceCondition.isPlus? '+':'-'}}</span><span>NT$</span><span>{{extraPriceCondition.price}}</span>
                        <p :style="{ color: `#4981B6` }" class="my-2">{{extraPriceCondition.conditionText}}</p>
                    </div>
                </div>
                <div :style="{ backgroundColor: `#4981B6` }" class="plan-suitable-for-customer-block">
                    <p>{{suitableText}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SvgIconTick from './svgTemplate/icon/SvgIconTick.vue'
export default {
    components: {
        SvgIconTick
    },
    data() {
        return {
            featuresOfProject: [
                {
                    isHavingFeature: true,
                    featureText: '撰寫自傳',
                    featureId: '1'
                },
                {
                    isHavingFeature: false,
                    featureText: '沒有打勾',
                    featureId: '2'
                }
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
        }
    }
}
</script>
<style scoped>
    .service-plan-card {
        width: 345px;
        height: 625px;
        border-radius: 42px;
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    }

    .service-plan-border-bottom-block {
        /* margin: 0 35px 0 35px; */
        border-bottom: 1px solid rgba(230, 230, 230, 1);
    }

    .font-size-2 {
        font-size: 2rem;
    }

    .font-size-1-point-4 {
        font-size: 1.4rem;
    }

    .text-description-service-plan-card {
        font-size: .8rem;
        line-height: 1.8rem;
    }

    .white-space-pre-line {
        white-space: pre-line;
    }

    .feature-tick-icon {
        width: 24px;
        height: 17px;
        fill: #F3B007;
    }

    .feature-tick-icon-block {
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .plan-suitable-for-customer-block {
        color: #ffffff;
        /* width: 225px; */
        width: 100%;
        height: 42px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>