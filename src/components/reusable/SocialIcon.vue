<template>
  <span class="socialIcon">
    <i :class="icon"></i>
  </span>
</template>

<script>
export default {
  name: "SocialIcon",
  props: {
    icon: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
.socialIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #555;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
}
</style>
