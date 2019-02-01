<template>
  <div class="whyWeAre">
    <header class="whyWeAre-header">
      <h1 class="is-size-3">Почему мы?</h1>
    </header>
    <div class="columns whyWeAre-content">
      <div
        class="column"
        v-for="(card, index) in cards"
        :key="index"
      >
        <WhyWeAreCard
          :icon="card.icon"
          :headline="card.headline"
          :text="card.text"
        />
      </div>
    </div>
  </div>
</template>

<script>
import headIcon from "../../assets/head-icon.svg";
import supportIcon from "../../assets/support-icon.svg";
import rocketIcon from "../../assets/rocket-icon.svg";

import WhyWeAreCard from "./cards/WhyWeAreCard";

export default {
  name: "WhyWeAre",
  components: {
    WhyWeAreCard
  },
  data() {
    return {
      cards: [
        {
          icon: headIcon,
          headline: "Experience",
          text:
            "We have extensive experience and can be proud of 10 000+ completed projects."
        },
        {
          icon: supportIcon,
          headline: "Support",
          text:
            "We value each client and always respond to feedback throughout our cooperation."
        },
        {
          icon: rocketIcon,
          headline: "Technologies",
          text:
            "We create our products using the latest technologies to ensure the best experience."
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.whyWeAre {
  padding: 40px 0;
  &-header {
    text-align: center;
    margin-bottom: 30px;
  }
}
</style>
