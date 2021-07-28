<template>
    <div class="tip-demo-block">
        <h2 class="demo-block-title">做備審資料可以很簡單，只要 ......</h2>
        <div class="tip-process-block">
            <div class="tip-phone-block">
                <p class="text-move-for-phone-shadow">
                    拿起手機<br>
                    上網填寫表單
                </p>
                <div class="tip-phone-pic-block">
                </div>
            </div>
            <div class="tip-arrow-block">
                <div class="trangle-right-arrow"></div>
            </div>
            <div class="tip-phone-block">
                <p class="text-move-for-phone-shadow">
                    打開LINE<br>
                    把資料傳給雨耕書堂
                </p>
                <div class="tip-phone-pic-block">
                </div>
            </div>
            <div class="tip-arrow-block">
                <div class="trangle-right-arrow"></div>
            </div>
            <div class="tip-phone-block">
                <p class="text-move-for-phone-shadow">
                    完成製作！
                </p>
                <div class="tip-phone-pic-block">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>

    @media screen and (max-width: 576px) {
        .demo-block-title {
            font-size: 1.6rem;
            margin-top: 9rem;
        }
    }

    @media screen and (max-width: 420px) {
        .demo-block-title {
            font-size: 1rem;
            margin-top: 9rem;
        }
    }

    .tip-demo-block {
        /* max-height: 650px; */
    }

    .tip-process-block {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 80px;
    }

    @media screen and (max-width: 576px) {
        .tip-process-block {
            flex-direction: column;
        }
    }

    @media screen and (max-width: 420px) {
        .tip-process-block {
            margin-top: 30px;
        }
    }


    

    .tip-phone-block {
        width: 22%;
        /* height: 600px; */
    }

    @media screen and (max-width: 576px) {
        .tip-phone-block {
            display: flex;
            width: 100%;
        }
    }

    .tip-phone-pic-block {
        /* width: 320px; */
        height: 500px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    @media screen and (max-width: 576px) {
        .tip-phone-pic-block {
            width: 60%;
        }
    }

    .tip-phone-svg {
        width: 100%;
        height: 100%;
    }

    .tip-phone-block:nth-child(1) .tip-phone-pic-block {
        background-image: url('/tipPhone/tipPhone1.png');
    }

    .tip-phone-block:nth-child(3) .tip-phone-pic-block {
        background-image: url('/tipPhone/tipPhone2.png');
    }

    .tip-phone-block:nth-child(5) .tip-phone-pic-block {
        background-image: url('/tipPhone/tipPhone3.png');
    }

    .text-move-for-phone-shadow {
        padding-right: 25px;
        margin-bottom: 0;
    }

    @media screen and (max-width: 576px) {
        .text-move-for-phone-shadow {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
        }
    }

    .tip-arrow-block {
        /* width: 17%; */
        /* height: 600px; */
        margin: 0 50px;
    }

    @media screen and (max-width: 576px) {
        .tip-arrow-block {
            display: none;
        }
    }

    .trangle-right-arrow {
        width: 0; 
        height: 0; 
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
        border-left: 25px solid #92ACC6;
        /* border-right: 5px solid #92ACC6; */
        border-radius: 5px;
    }
</style>