<template>
  <div class="joinUs">
    <header class="joinUs-header">
      <h1 class="is-size-3">Присоединяйтесь</h1>
      <h3 class="is-size-4">Подписывайтесь на нас в социальных сетях и будьте в курсе событий!</h3>
    </header>
    <div class="joinUs-content">
      <p class="joinUs-content__socials">
        <SocialIcon
          v-for="(icon, index) in icons"
          :key="index"
          :icon="icon"
        />
      </p>
    </div>
  </div>
</template>

<script>
import SocialIcon from "../reusable/SocialIcon";

export default {
  name: "JoinUs",
  components: {
    SocialIcon
  },
  data() {
    return {
      icons: [
        "fab fa-facebook-f",
        "fab fa-twitter",
        "fab fa-instagram",
        "fab fa-youtube",
        "fab fa-linkedin-in",
        "fab fa-pinterest-p",
        "fab fa-google-plus-g"
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.joinUs {
  padding: 40px 0;
  &-header {
    text-align: center;
    margin-bottom: 30px;
  }
  &-content {
    &__socials {
      width: 300px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
