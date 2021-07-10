<template>
    <div class="service-process-card row">
        <div class="left-index-block-service-process col-4">
            <div class="circle-index-service-process">{{indexNum}}</div>
        </div>
        <div class="right-main-block-service-process col-8">
            <!-- 抄商品特色來改的 要修改 -->
            <div class="title-block-service-process">
                <div class="service-process-card-icon-block">
                    <component :is="titleIconComponent" class="card-title-icon-service-process"/>
                </div>
                <p class="card-title-text-service-process">{{titleText}}</p>
            </div>
            <div class="card-decription-text-block-service-process">
                <p class="card-decription-text-service-process">{{descriptionText}}</p>
            </div>
            
        </div>
        
    </div>
</template>
<script>
export default {
    props: {
        indexNum: String,
        titleIconUrl: String,
        titleText: String,
        descriptionText: String
    },
    computed: {
        titleIconComponent() {
            return () => import(`${this.titleIconUrl}.vue`)
        }
    }
}
</script>
<style scoped>
    .service-process-card {
        width: 355px;
        height: 180px;
        border-radius: 24px;
        box-shadow: 0px 24px 48px rgba(57, 57, 57, 0.1);
        margin: 15px 0;
    }

    .service-process-card-icon-block {
        width: 20px;
        height: 100%;
        margin: 0 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card-title-icon-service-process {
        width: 20px;
        height: 20px;
        fill: #000000;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .circle-index-service-process {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: #FFF0DE;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        font-weight: normal;
    }
    
    .left-index-block-service-process {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .title-block-service-process {
        display: flex;
        justify-content: center;
        margin-top: 35px;
        height: 40px;
    }

    .card-title-text-service-process {
        font-size: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card-decription-text-service-process {
        font-size: 15px;
        white-space: pre-line;
    }

    .card-decription-text-block-service-process {
        margin-top: 6px;
    }

    .right-main-block-service-process {
        padding-left: 0;
    }
</style>