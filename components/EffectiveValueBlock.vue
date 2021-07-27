<template>
    <div class="d-flex effective-value-block-section">
        <template v-for="(effectiveValueBody, effectiveValueIndex) in effectiveValueBodys">
            <div
                :key="`effective-value-block-${effectiveValueIndex}`"
                class="effective-block"
            >
                <div class="value-text-block">
                    <span>{{effectiveValueBody.count}}</span><span>{{effectiveValueBody.suffix}}</span>
                </div>
                <div class="text-center text-sm-left font-size-point-nine">
                    <span>{{effectiveValueBody.name}}</span>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
export default {
    data() {
        return {
            effectiveValueBodys: [
                {
                    count: 90,
                    suffix: '%',
                    name: '放榜錄取率'
                },
                {
                    count: 200,
                    suffix: '+',
                    name: '滿意顧客'
                },
                {
                    count: 10000,
                    suffix: '+',
                    name: '洽談訊息'
                },
                {
                    count: 1000000,
                    suffix: '+',
                    name: '敲擊鍵盤的次數'
                },
            ]
        }
        
    }
}
</script>
<style scoped>

    .effective-block {
        border-left: 2px solid #4981B6;
        padding: 0 1rem;
        flex: 1;
        margin: 0 3rem;
    }

    @media screen and (max-width: 576px) {
        .effective-block {
            width: 50%;
            margin: 4rem auto;
            padding: 0;
            border-left: none;
            border-top: 2px solid #4981B6;
        }
    }

    .effective-value-block-section {
        width: 100%;
        margin: 7rem 1.5rem;
    }

    @media screen and (max-width: 576px) {
        .effective-value-block-section {
            flex-direction: column;
            justify-content: space-around;
            margin: 7rem auto;

            
        }
        
    }



    .value-text-block {
        font-size: 1.5rem;
        text-align: left;
        margin: .3rem 0;
    }

    @media screen and (max-width: 576px) {
        .value-text-block {
            text-align: center;
            margin-top: 3rem;
        }
    }
</style>