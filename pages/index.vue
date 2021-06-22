<template>
  <div class="container">
    <DescriptionTopBlock />
    <TipDemoBlock />
  </div>
</template>

<script>
import DescriptionTopBlock from '../components/DescriptionTopBlock'
import TipDemoBlock from '../components/TipDemoBlock.vue'
export default {
  components: {
    DescriptionTopBlock,
    TipDemoBlock
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
