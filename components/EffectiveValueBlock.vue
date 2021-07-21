<template>
    <div class="d-flex section-block-margin mx-4">
        <template v-for="(effectiveValueBody, effectiveValueIndex) in effectiveValueBodys">
            <div
                :key="`effective-value-block-${effectiveValueIndex}`"
                class="effective-block flex-grow-1 mx-5"
            >
                <div class="value-text-block">
                    <span>{{effectiveValueBody.count}}</span><span>{{effectiveValueBody.suffix}}</span>
                </div>
                <div class="text-left font-size-point-nine">
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
    .section-block-margin {
        margin: 7rem auto;
    }

    .effective-block {
        border-left: 2px solid #4981B6;
        padding: 0 1rem;
    }

    .value-text-block {
        font-size: 1.5rem;
        text-align: left;
        margin: .3rem 0;
    }
</style>