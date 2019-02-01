<template>
  <div class="homePage">
    <div class="container">
      <section class="homePage-news">
        <div class="homePage-news-tiles">
          <div class="tile">
            <div class="tile is-parent is-8">
              <div class="tile is-child">
                <NewsTile />
              </div>
            </div>
            <div class="tile is-parent is-vertical is-4">
              <div class="tile is-child">
                <NewsTile small />
              </div>
              <div class="tile is-child">
                <NewsTile small />
              </div>
            </div>
          </div>
          <div class="buttons is-centered">
            <button class="button is-link is-outlined">Learn more</button>
          </div>
        </div>
        <div class="homePage-news-cards">
          <div class="columns">
            <div
              class="column"
              v-for="(card, index) in newsCards"
              :key="index"
            >
              <NewsCard
                :imgUrl="card.url"
                :infoTheme="card.headline"
                :infoDate="card.date"
                :contentHeader="card.headline"
                :contentText="card.text"
              />
            </div>
          </div>
          <div class="buttons is-centered">
            <button class="button is-link is-outlined">Read more</button>
            <button class="button is-link">Request a quote</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NewsTile from "../components/home/NewsTile";
import NewsCard from "../components/home/NewsCard";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    NewsTile,
    NewsCard
  },
  created() {
    this.loadNewsCards();
  },
  computed: {
    ...mapGetters("home", ["newsCards"])
  },
  methods: {
    ...mapActions("home", ["loadNewsCards"])
  }
};
</script>


<style lang="less" scoped>
.homePage {
  padding: 30px 0;
  &-news {
    &-tiles {
      margin: -0.75rem;
      margin-bottom: 30px;
      .buttons {
        margin: 20px 0;
      }
    }
  }
}
</style>

