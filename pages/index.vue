<template>
  <div class="container">
    <DescriptionMainBlock />
  </div>
</template>

<script>
import DescriptionMainBlock from '../components/DescriptionMainBlock'
export default {
  components: {
    DescriptionMainBlock
  }
}
</script>

<style>
.container {
  max-width: 1220px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
