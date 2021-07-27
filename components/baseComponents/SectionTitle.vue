<template>
    <div class="section-title-block">
        <h2 class="section-title-text">{{ titleText }}</h2>
    </div>
</template>
<script>
export default {
    props: {
        titleText: String
    }
}
</script>

<style scoped>
    .section-title-block {
        width: 540px;
        height: 64px;
        margin: 80px auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 576px) {
        .section-title-block {
            width: auto;
        }
    }
</style>