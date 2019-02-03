<template>
  <div class="newsCard">
    <div class="newsCard-image">
      <figure class="image is-16by9">
        <img :src="photo" alt="news-image">
      </figure>
    </div>
    <div class="newsCard-info">
      <span>Creative Process | September 22, 2017</span>
    </div>
    <div class="newsCard-content">
      <h1 class="is-size-5">How to Hire the Best Employees to Your Company?</h1>
      <p>Our HR Director shares his experience how to fill positions with the best candidates, where to find talents, and how to attract professionals to your business.</p>
    </div>
    <div class="newsCard-button">
      <a>Read more</a>
    </div>
  </div>
</template>

<script>
import defaultImage from "../../assets/default.jpg"

export default {
  name: "NewsCard",
  props: {
    photo: {
      type: String,
      default: defaultImage
    },
    infoTheme: {
      type: String,
      required: true
    },
    infoDate: {
      type: String,
      required: true
    },
    contentHeader: {
      type: String,
      required: true
    },
    contentText: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.newsCard {
  &-image {
    margin-bottom: 15px;
  }
  &-info {
    margin-bottom: 10px;
  }
  &-content {
    margin-bottom: 15px;
  }
}
</style>
