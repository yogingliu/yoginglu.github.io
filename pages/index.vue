<template>
  <div class="position-relative web-background">
    <DescriptionTopBlock id="DescriptionTopBlock"/>
    <div class="container">

      <TipDemoBlock id="TipDemoBlock" />
      <ProductFeature id="ProductFeature" />
      <ServiceProcess id="ServiceProcess" />
      <ServicePlanBlock id="ServicePlanBlock" />
      <ClassicSampleBlock id="ClassicSampleBlock" />
      <CustomerFeedback id="CustomerFeedback" />
      <EffectiveValueBlock id="EffectiveValueBlock" />
      <CommonQuestion id="CommonQuestion" />
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
import EffectiveValueBlock from '../components/EffectiveValueBlock.vue'
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
    EffectiveValueBlock,
    CommonQuestion
  },
}
</script>
<style scoped>
@media screen and (max-width: 576px) {
  .web-background {
    background-image: url('/yugeng/sm-background.svg');
    background-size: cover;

  }
}
</style>


