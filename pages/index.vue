<template>
  <div>
    <DescriptionTopBlock />
    <div class="container">
      
      <TipDemoBlock />
      <ProductFeature />
      <ServiceProcess />
    </div>
  </div>
</template>

<script>
import DescriptionTopBlock from '../components/DescriptionTopBlock.vue'
import TipDemoBlock from '../components/TipDemoBlock.vue'
import ProductFeature from '../components/ProductFeature.vue'
import ServiceProcess from '../components/ServiceProcess.vue'
export default {
  components: {
    DescriptionTopBlock,
    TipDemoBlock,
    ProductFeature
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

</style>
