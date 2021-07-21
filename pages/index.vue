<template>
  <div>
    <DescriptionTopBlock />
    <div class="container">
      
      <TipDemoBlock />
      <ProductFeature />
      <ServiceProcess />
      <ServicePlanBlock />
      <ClassicSampleBlock />
      <CustomerFeedback />
      <EffectiveValueBlock />
      <CommonQuestion />
      <div class="pb-5"></div>
    </div>
  </div>
</template>

<script>
import DescriptionTopBlock from '../components/DescriptionTopBlock.vue'
import TipDemoBlock from '../components/TipDemoBlock.vue'
import ProductFeature from '../components/ProductFeature.vue'
import ServiceProcess from '../components/ServiceProcess.vue'
import ServicePlanBlock from '../components/ServicePlanBlock.vue'
import ClassicSampleBlock from '../components/ClassicSampleBlock.vue'
import CustomerFeedback from '../components/CustomerFeedback.vue'
import CommonQuestion from '../components/CommonQuestion.vue'
export default {
  components: {
    DescriptionTopBlock,
    TipDemoBlock,
    ProductFeature,
    ServiceProcess,
    ServicePlanBlock,
    ClassicSampleBlock,
    CustomerFeedback,
    CommonQuestion
  },
}
</script>

<style>
.container {
  max-width: 1220px;
  margin: 0 auto;
  min-height: 100vh;
  /* display: flex; */
  justify-content: center;
  /* align-items: center; */
  text-align: center;
}

.horizontal-vertical-center-flex {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
