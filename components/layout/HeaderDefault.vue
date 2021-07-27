<template>
    <div class="header-container-default">
        <div class="header-default">
            <div class="header-flex-block-default justify-content-between justify-content-sm-start">
                <div class="header-logo-block-default">
                    <SvgLogoYugengWithName class="header-logo-img-default" />
                </div>
                <div
                    :class="{
                        'header-nav-bar-default': true,
                        'd-sm-flex': true,
                        'd-none' : !isDisplayNavbarOnSmallSize
                    }"
                >
                    <div class="sm-border-header-nav-bar">
                        <div class="header-nav-block-default">
                            <a href="#ProductFeature" class="header-nav-link-deafault" @click="toggleNavBar()">
                                商品特色
                            </a>
                        </div>
                        <div class="header-nav-block-default">
                            <a href="#ServiceProcess" class="header-nav-link-deafault" @click="toggleNavBar()">
                                服務流程
                            </a>
                        </div>
                        <div class="header-nav-block-default">
                            <a href="#ServicePlanBlock" class="header-nav-link-deafault" @click="toggleNavBar()">
                                服務項目
                            </a>
                        </div>
                        <div class="header-nav-block-default">
                            <a href="#ClassicSampleBlock" class="header-nav-link-deafault" @click="toggleNavBar()">
                                經典範例
                            </a>
                        </div>
                        <div class="header-nav-block-default">
                            <a href="#CustomerFeedback" class="header-nav-link-deafault" @click="toggleNavBar()">
                                顧客回饋
                            </a>
                        </div>
                        <div class="header-nav-block-default">
                            <a href="#CommonQuestion" class="header-nav-link-deafault" @click="toggleNavBar()">
                                Q&amp;A
                            </a>
                        </div>
                    </div>
                    
                </div>
                <!-- 前往蝦皮賣場按鈕 -->
                <div class="header-cta-link-block-default">
                    <a href="https://shopee.tw/concisewriter?categoryId=68&itemId=8423664475" class="cta-link-default">
                        <span class="cta-link-text">前往</span>
                        <SvgLogoShopee class="cta-shopee-logo-default" />
                        <span class="cta-link-text text-color-shopp">蝦皮</span><span class="cta-link-text text-color-shopp">賣場</span>
                    </a>
                </div>
                <!-- 手機板選單按鈕 -->
                <div class="d-sm-none horizontal-vertical-center-flex mr-4">
                    <button
                        class="header-menu-icon-block p-4"
                        @click="toggleNavBar()"
                    >
                        <SvgIconMenu class="header-menu-icon horizontal-vertical-center-flex" />
                    </button>
                    
                </div>
            </div>
        </div>
        <div class="fixed-header-back">
            不該看到這段文字
        </div>
    </div>
</template>
<script>
import SvgLogoYugengWithName from '../svgTemplate/SvgLogoYugengWithName.vue'
import SvgLogoShopee from '../svgTemplate/SvgLogoShopee.vue'
import SvgIconMenu from '../svgTemplate/icon/SvgIconMenu.vue'
export default {
    data() {
        return {
            isDisplayNavbarOnSmallSize: false
        }
    },
    components: {
        SvgLogoYugengWithName,
        SvgLogoShopee,
        SvgIconMenu
    },
    methods: {
        toggleNavBar() {
            this.isDisplayNavbarOnSmallSize = !this.isDisplayNavbarOnSmallSize
        }
    }
}
</script>

<style scoped>
    .header-container-default {
        width: 100%;
    }

    

    .header-menu-icon-block {

    }

    .header-menu-icon {
        width: 20px;
        height: 16px;
    }

    .header-default {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 95px;
        background: #FFFFFF;
        box-shadow: 0px 1px 0px #E5E9F2;
        z-index: 1;
    }

    /* @media screen and (max-width: 576px) {
        .header-default {
            width: 576px;
            max-width: 576px;
            padding-right: 60px;
        }

        
    } */

    .header-flex-block-default {
        width: 100%;
        height: 95px;
        background: #FFFFFF;
        display: flex;
    }

    @media screen and (max-width: 576px) {
        .header-flex-block-default {
            width: 400px;
            margin: 0 auto;
        }

    }

    @media screen and (max-width: 420px) {
        .header-flex-block-default {
            width: 340PX;
        }
    }

    
    
    .header-cta-link-block-default {
        width: 195px;
        height: 95px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 70px;

        
    }

    @media screen and (max-width: 576px) {
        .header-cta-link-block-default {

            position: fixed;
            right: 0.3rem;
            bottom: 0.3rem;
            margin: 0;
        }

        
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

    /* @media screen and (max-width: 576px) {
        .cta-link-default {
            width: 8rem;
            height: 4rem;
        }
    } */

    .cta-link-text {
        font-size: 18px;
        font-weight: bold;
    }


    .cta-shopee-logo-default {
        width: 15px;
        height: 20.8px;
        margin: 0 3px;
    }

    /* @media screen and (max-width: 576px) {
        .cta-shopee-logo-default {
            width: 1.8rem;
            height: 2rem;
            margin-top: 5px
        }
    } */

    .header-nav-bar-default {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        
    }

    .sm-border-header-nav-bar {
        flex: 1;
        display: flex;
        justify-content: flex-end;
    }

    @media screen and (max-width: 576px) {
        .header-nav-bar-default {
            /* display: none; */
            flex-direction: column;
            position: absolute;
            right: 0;
            top: 96px;
            /* background-color: #4F4F4F;
            color: #ffffff; */
            background-color: #ffffff;
            color: #4F4F4F;
            /* padding-left: 4rem; */
            
        }

        .sm-border-header-nav-bar {
            margin: 3rem;
            padding: 1rem;
            border-top: 1px solid #4F4F4F;
            border-bottom: 1px solid #4F4F4F;
            flex-direction: column;
        }
    }

    .header-nav-block-default {
        height: 95px;
        width: 76px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }

    @media screen and (max-width: 576px) {
        .header-nav-block-default {
            width: 6rem;
            /* border-bottom: 1px solid #4F4F4F; */
            word-spacing: 0.3rem;
            height: 3rem;
        }
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