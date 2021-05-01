<template>
  <div class="container">
    <DescriptionTopBlock />
  </div>
</template>

<script>
import DescriptionTopBlock from '../components/DescriptionTopBlock'
export default {
  components: {
    DescriptionTopBlock
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
