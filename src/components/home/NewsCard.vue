<template>
  <div class="newsCard">
    <div class="newsCard-image">
      <figure class="image is-16by9">
        <img
          :src="photo"
          alt="news-image"
        >
      </figure>
    </div>
    <div class="newsCard-info">
      <span>{{infoTheme}} | {{offsetDate(infoDate)}}</span>
    </div>
    <div class="newsCard-content">
      <h1 class="is-size-5">{{contentHeader}}</h1>
      <p>{{contentText}}</p>
    </div>
    <div class="newsCard-button">
      <a>Read more</a>
    </div>
  </div>
</template>

<script>
import defaultImage from "../../assets/default.jpg";
import moment from "moment";

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
      type: Date,
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
  },
  methods: {
    offsetDate() {
      return moment(this.infoDate)
        .locale("ru")
        .fromNow();
    }
  }
};
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
