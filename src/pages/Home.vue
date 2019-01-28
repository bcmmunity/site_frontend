<template>
  <div class="page-home">
    <div class="container">
      <section class="main-news">
        <h1 class="is-size-3">Новости</h1>
        <div class="news-tiles">
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
      <section class="news-cards">
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
.page-home {
  padding: 20px 0;

  .main-news {
    margin-bottom: 60px;
    .news-tiles {
      margin: 0 -0.75rem;
      margin-bottom: 30px;
    }
  }
  .news-cards {
    margin-bottom: 60px;

    .columns {
      margin-bottom: 30px;
    }
  }
}
</style>

