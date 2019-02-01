<template>
  <div class="whyWeAreCard">
    <div class="whyWeAreCard-icon">
      <img
        :src="icon"
        alt="icon"
      >
    </div>
    <h1 class="whyWeAreCard-headline is-size-4">{{headline}}</h1>
    <p class="whyWeAreCard-text">{{text}}</p>
  </div>
</template>

<script>
export default {
  name: "WhyWeAreCard",
  props: {
    icon: {
      type: String,
      required: true
    },
    headline: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
.whyWeAreCard {
  width: 100%;
  text-align: center;
  &-icon {
    width: 100px;
    margin: 0 auto;
  }
}
</style>
