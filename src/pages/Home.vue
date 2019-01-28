<template>
  <div class="homePage">
    <div class="container">
      <section class="homePage-mainNews">
        <h1 class="is-size-3">Новости</h1>
        <div class="mainNews-newsTiles">
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
        </div>
        <div class="buttons is-centered">
          <button class="button is-link is-outlined">Learn more</button>
        </div>
      </section>
      <section class="homePage-newsCards">
        <div class="columns">
          <div class="column">
            <NewsCard />
          </div>
          <div class="column">
            <NewsCard />
          </div>
          <div class="column">
            <NewsCard />
          </div>
        </div>
        <div class="buttons is-centered">
          <button class="button is-link is-outlined">Read more</button>
          <button class="button is-link">Request a quote</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NewsTile from "../components/home/NewsTile";
import NewsCard from "../components/home/NewsCard";

export default {
  name: "Home",
  components: {
    NewsTile,
    NewsCard
  }
};
</script>


<style lang="less" scoped>
.homePage {
  padding: 20px 0;

  &-mainNews {
    margin-bottom: 60px;
    .mainNews-newsTiles {
      margin: 0 -0.75rem;
      margin-bottom: 30px;
    }
  }
  &-newsCards {
    margin-bottom: 60px;

    .columns {
      margin-bottom: 30px;
    }
  }
}
</style>

