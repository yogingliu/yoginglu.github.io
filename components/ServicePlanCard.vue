<template>
    <div class="service-plan-card">
        <div class="service-plan-border-bottom-block text-left">
            <div class="font-size-2 py-3">NT$6000</div>
            <div :style="{ color: `#6BB7FF` }" class="font-size-1-point-4 my-2">完整備審資料代製</div>
            <p class="white-space-pre-line my-3 text-description-service-plan-card">依照學校簡章要求製作完整的備審資料
                完成後的檔案可以直接上傳至學校報名系統
                檔案格式符合校方規章可以直接至影印店輸出
                製作時間為十日內交付電子檔</p>
        </div>
        <div class="service-plan-border-bottom-block pb-3">
            123
        </div>
    </div>
</template>
<style scoped>
    .service-plan-card {
        width: 345px;
        height: 625px;
        border-radius: 42px;
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    }

    .service-plan-border-bottom-block {
        margin: 0 35px 0 35px;
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
</style>