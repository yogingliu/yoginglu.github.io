<template>
    <div class="little-feature-block">
        <div class="little-feature-card-title-icon-block">
            <component :is="titleIconComponent" class="little-feature-card-title-icon"/>
        </div>
        <p class="little-feature-card-title-text">{{titleText}}</p>
        <p class="little-feature-card-decription-text">{{descriptionText}}</p>
    </div>
</template>
<script>
export default {
    props: {
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
    .little-feature-block {
        width: 300px;
        height: 230px;
        border-radius: 28px;
        box-shadow: 0 4.5px 4.5px rgba(0, 0, 0, 0.25);
        margin: 45px 0;
    }

    .little-feature-card-title-icon-block {
        padding-top: 20px 0;
        
    }

    .little-feature-card-title-icon {
        width: 40px;
        height: 40px;
        margin: 0 auto;
        fill: #4981B6;
    }

    .little-feature-card-title-text {
        font-size: 22px;
        margin: 18px 0;
    }

    .little-feature-card-decription-text {
        white-space: pre-line;
        font-size: 16px;
        margin: 20px 0;
    }
</style>