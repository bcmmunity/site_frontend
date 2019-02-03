<template>
  <div class="projectsCard">
    <div class="projectsCard-media">
      <figure class="projectsCard-media__image image is-square">
        <img
          :src="photo"
          alt="img"
        >
      </figure>
      <span class="projectsCard-media__label">members only</span>
    </div>
    <div class="projectsCard-content">
      <div class="projectsCard-content__header">
        <h3 class="is-size-5">UX design</h3>
        <p>September, 12, 2017</p>
      </div>
      <div class="projectsCard-content__name">
        <h1 class="is-size-4">LandLord</h1>
      </div>
      <div class="projectsCard-content__footer">
        <span>Quantum company</span>
        <span><a href="#">learn more</a></span>
      </div>
    </div>
  </div>
</template>

<script>
import defaultPhoto from "../../../assets/default.jpg";

export default {
  name: "ProjectsCard",
  props: {
    photo: {
      type: String,
      default: defaultPhoto
    }
  }
};
</script>

<style lang="less" scoped>
.projectsCard {
  display: flex;
  width: 50%;
  padding: 0 15px;
  margin-bottom: 30px;
  &-media {
    width: 50%;
    position: relative;
    &__label {
      position: absolute;
      top: 0;
      left: 20px;
      text-align: center;
      width: 82px;
      padding: 15px 6px;
      background-color: #e9e9e9;
      box-sizing: border-box;
      &::after {
        position: absolute;
        bottom: -15px;
        left: 0;
        content: '';
        width: 100%;
        border-top: 15px solid #e9e9e9;
        border-right: 41px solid transparent;
        border-left: 41px solid transparent;
      }
    }
  }
  &-content {
    width: 50%;
    padding: 10px 20px;
    position: relative;
    display: flex;
    align-items: center;
    background-color: #e9e9e9;
    &__header {
      position: absolute;
      top: 10px;
      left: 20px;
      right: 20px;
    }
    &__name {

    }
    &__footer {
      position: absolute;
      bottom: 0;
      left: 20px;
      right: 20px;
      display: flex;
      padding-bottom: 10px;
      span {
        display: flex;
        align-items: flex-end;
        width: 50%;
        &:last-child {
          justify-content: flex-end;
        }
      }
    }
  }
}
</style>

