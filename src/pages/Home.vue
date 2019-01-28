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
        <p class="has-text-centered">
          <button class="button is-info is-outlined">Узнать больше</button>
        </p>
      </section>
      <section class="news-cards">

      </section>
    </div>
  </div>
</template>

<script>
import NewsTile from "../components/home/NewsTile";

export default {
  name: "Home",
  components: {
    NewsTile
  }
};
</script>


<style lang="less" scoped>
.page-home {
  padding: 20px 0;

  .main-news {
    .news-tiles {
      margin: 0 -0.75rem;
      margin-bottom: 15px;
    }
  }


}
</style>

