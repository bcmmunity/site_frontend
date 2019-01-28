<template>
  <div class="news-card">
    <figure
      class="image is-square"
      :style="`background-image: url('${url}')`"
    ></figure>
    <div class="news-info">
      <p class="news-theme">UX Design</p>
      <h1 :class="{'news-headline': true, 'is-size-4': !small, 'is-size-6': small}">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, excepturi?
      </h1>
      <div class="news-data">
        <div class="author">
          <figure
            class="image is-24x24 circle"
            :style="`background-image: url('${url}')`"
          ></figure>
          <span>Google</span>
        </div>
        <div class="date">
          <span class="icon">
            <i class="far fa-clock"></i>
          </span>
          <span class="time">20 hours ago</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsTile",
  data() {
    return {
      url:
        "https://static.addtoany.com/images/dracaena-cinnabari.jpg"
    };
  },
  props: {
    small: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style lang="less" scoped>
.circle {
  border-radius: 50%;
}

.news-card {
  position: relative;
  width: 100%;
  figure {
    background-size: cover;
    background-position: center center;
  }
  .news-info {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    padding: 10px 15px;
    background-color: rgba(51, 51, 51, 0.7);
    color: #ffffff;

    .news-headline {
      margin-bottom: 10px;
    }

    .news-data {
      display: flex;
      justify-content: space-between;

      .author,
      .date {
        display: flex;
        align-items: center;
      }

      .author {
        figure {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
