<template>
  <div class="ourTeamCard">
    <div class="ourTeamCard-media">
      <figure class="ourTeamCard-media__photo image is-square">
        <img
          class="is-rounded"
          :src="photo"
          alt="photo"
        >
      </figure>
      <p class="ourTeamCard-media__socials">
        <SocialIcon
          v-for="(icon, index) in icons"
          :key="index"
          :icon="icon"
        />
      </p>
    </div>
    <div class="ourTeamCard-content">
      <h3 class="ourTeamCard-content__name is-size-4">Patrick Pool</h3>
      <p class="ourTeamCard-content__specialization">CEO | 10 years of experience</p>
      <p class="ourTeamCard-content__mail">pool@a.weblium.com</p>
      <p class="ourTeamCard-content__description">
        Patrick Pool has more than 10 years of experience in IT development and marketing. He successfully leads our team to create one-of-a-kind digital solutions.
      </p>
      <p class="ourTeamCard-content__link">
        <a href="#">Learn more</a>
      </p>
    </div>
  </div>
</template>

<script>
import SocialIcon from "../../reusable/SocialIcon";
import defaultPhoto from "../../../assets/default.jpg";

export default {
  name: "OurTeamCard",
  components: {
    SocialIcon
  },
  props: {
    photo: {
      type: String,
      default: defaultPhoto
    }
  },
  data() {
    return {
      icons: ["fab fa-facebook-f", "fab fa-twitter", "fab fa-instagram", "fab fa-linkedin-in"]
    };
  }
};
</script>

<style lang="less" scoped>
.ourTeamCard {
  display: flex;
  width: 50%;
  margin-bottom: 30px;
  &-media {
    max-width: 200px;
    min-width: 200px;
    padding: 0 15px;
    &__photo {
      margin-bottom: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__socials {
      display: flex;
      justify-content: space-between;
    }
  }
  &-content {
    padding: 0 15px;
    &__mail {
      padding: 5px 0;
    }
    &__description {
      margin-bottom: 10px;
    }
  }
}
</style>
