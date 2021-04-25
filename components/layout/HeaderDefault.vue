<template>
    <div class="header-container-default">
        <div class="header-default">
            <div class="header-flex-block-default">
                <div class="header-logo-block-default">
                    <img src="雨耕2 1.png" alt="logo" class="header-logo-img-default">
                </div>
                <div class="header-nav-bar-default">
                    <div class="header-nav-block-default">
                        <a href="" class="header-nav-link-deafault">
                            商品特色
                        </a>
                    </div>
                    <div class="header-nav-block-default">
                        <a href="" class="header-nav-link-deafault">
                            服務流程
                        </a>
                    </div>
                    <div class="header-nav-block-default">
                        <a href="" class="header-nav-link-deafault">
                            服務項目
                        </a>
                    </div>
                    <div class="header-nav-block-default">
                        <a href="" class="header-nav-link-deafault">
                            經典範例
                        </a>
                    </div>
                    <div class="header-nav-block-default">
                        <a href="" class="header-nav-link-deafault">
                            顧客回饋
                        </a>
                    </div>
                    <div class="header-nav-block-default">
                        <a href="" class="header-nav-link-deafault">
                            Q&A
                        </a>
                    </div>
                </div>
                <div class="header-cta-link-block-default">
                    <a href="" class="cta-link-default">
                        <span class="cta-link-text">前往</span><img class="cta-shopee-logo-default" src="Shopee.png" alt="Shopee Logo"><span class="cta-link-text" style="color: #ee4d2d;">蝦皮購物</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="fixed-header-back">
            不該看到這段文字
        </div>
    </div>
</template>
<style scoped>

    .header-default {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 95px;
        background: #FFFFFF;
        box-shadow: 0px 1px 0px #E5E9F2;
    }

    .header-flex-block-default {
        width: 100%;
        height: 95px;
        background: #FFFFFF;
        display: flex;
    }

    .header-cta-link-block-default {
        width: 195px;
        height: 95px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 70px;
    }

    .cta-link-default {
        display: block;
        width: 175px;
        height: 58.33px;

        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cta-link-text {
        font-size: 18px;
        font-weight: bold;
    }

    .cta-shopee-logo-default {
        width: 15px;
        height: 20.8px;
        margin: 3px 3px 0 3px;
    }

    .header-nav-bar-default {
        flex: 1;
        display: flex;
        justify-content: flex-end;
    }

    .header-nav-block-default {
        height: 95px;
        width: 76px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }

    .header-nav-link-deafault {
        width: 100%;
        text-align: center;
        font-weight: bold;
        font-size: 14px;
    }

    .fixed-header-back {
        width: 100%;
        height: 95px;
    }

    .header-logo-block-default {
        width: 265px;
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
    }

    .header-logo-img-default {
        
        width: 113px;
        height: 39px;
    }
</style>