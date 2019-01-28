<template>
  <div id="content">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Content"
}
</script>

<style lang="less" scoped>
#content {
  flex-grow: 1;
}
</style>


