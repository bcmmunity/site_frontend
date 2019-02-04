<template>
  <div class="homePage">
    <div class="container">
      <section class="homePage-news">
        <div class="homePage-news-tiles">
          <div class="tile">
            <div class="tile is-parent is-8">
              <div class="tile is-child">
                <NewsTile
                  v-if="articles.length"
                  :description="articles[0].description"
                  :tags="articles[0].tags"
                  :author="articles[0].author"
                  :date="new Date(articles[0].date)"
                />
              </div>
            </div>
            <div class="tile is-parent is-vertical is-4">
              <div class="tile is-child">
                <NewsTile
                  small
                  v-if="articles.length"
                  :description="articles[1].description"
                  :tags="articles[1].tags"
                  :author="articles[1].author"
                  :date="new Date(articles[1].date)"
                />
              </div>
              <div class="tile is-child">
                <NewsTile
                  small
                  v-if="articles.length"
                  :description="articles[2].description"
                  :tags="articles[2].tags"
                  :author="articles[2].author"
                  :date="new Date(articles[2].date)"
                />
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
              v-for="(article, index) in articles"
              :key="index"
            >
              <NewsCard
                infoTheme="theme"
                :infoDate="new Date([2012, 5, 6])"
                contentHeader="lorem ipsum dolor"
                contentText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat error totam aliquid inventore ea, asperiores voluptatum temporibus porro pariatur modi?"
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
    this.loadNews();
  },
  computed: {
    ...mapGetters("home", ["articles"])
  },
  methods: {
    ...mapActions("home", ["loadNews"])
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

