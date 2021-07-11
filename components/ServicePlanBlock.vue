<template>
    <div>
        <SectionTitle :titleText="'服務項目'"/>
        <div class="service-plan-card-section">
            <ServicePlanCard />
        </div>
    </div>
</template>
<script>
import SectionTitle from './baseComponents/SectionTitle.vue'
import ServicePlanCard from './ServicePlanCard.vue'
export default {
    
    components: {
        SectionTitle,
        ServicePlanCard
    },
}
</script>
<style scoped>
    .service-plan-card-section {
        display: flex;
    }
</style>