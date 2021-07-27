<template>
    <div class="customer-feedback-card flex-grow-1">
        <div class="d-flex w-100 p-4">
            <component class="customer-feedback-card-photo" :is="customerPhotoComponent" />
            <div class="ml-4 text-left d-flex">
                <div class="m-auto">
                    <div>
                        <span>{{customerName}}</span>
                    </div>
                    <div>
                        <span class="text-muted font-size-point-nine">{{customerRemark}}</span>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="d-flex px-5">
            <div class="mt-3 mx-2">
                <SvgIconQuote class="feedback-card-quote-icon" />
            </div>
            <div class="pl-4 py-4 text-left font-size-point-nine">
                {{feedbackContent}}
            </div>
        </div>
    </div>
</template>
<script>
import SvgIconQuote from './svgTemplate/icon/SvgIconQuote.vue'
export default {
    components: {
        SvgIconQuote
    },
    props: {
        customerFeedbackCardIndex: {
            type: Number,
            default: 1
        },
        customerName: {
            type: String,
            default: '顧客'
        },
        customerRemark: {
            type: String,
            default: ''
        },
        feedbackContent: {
            type: String,
            default: '載入內容錯誤'
        }
    },
    computed: {
        customerPhotoComponent() {
            let photoComponentName = ''
            if(this.customerFeedbackCardIndex % 3 === 0) {
                photoComponentName = 'SvgPersonFaceRightRound3'
            }
            else if (this.customerFeedbackCardIndex % 3 === 2) {
                photoComponentName = 'SvgPersonFaceRightRound2'
            }
            else {
                photoComponentName = 'SvgPersonFaceRightRound1'
            }
            return () => import(`./svgTemplate/${photoComponentName}.vue`) 
        }
    }
}
</script>
<style scoped>
    .customer-feedback-card {
        min-width: 5rem;
        min-height: 5rem;
        box-shadow: 0px .8rem 1.2rem rgba(41, 41, 42, 0.07);
        border-radius: .5rem;
        width: 100%;
        margin: 0 1rem;
    }

    @media screen and (max-width: 576px) {
        .customer-feedback-card {
            min-width: auto;
            width: 350px;
            margin: 15px auto;
        }
    }

    .customer-feedback-card-photo {
        width: 6rem;
        height: 6rem;
    }

    .feedback-card-quote-icon {
        fill: #2EC5CE;
        width: 1.6rem;
        height: 1.6rem;
    }

    
</style>