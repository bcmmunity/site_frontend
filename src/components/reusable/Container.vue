<template>
  <div class="customContainer">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container"
}
</script>

<style lang="less" scoped>
.customContainer {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
