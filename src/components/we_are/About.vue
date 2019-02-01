<template>
  <div class="about">
    <header class="about-header">
      <h1 class="is-size-3">О нашей компании</h1>
      <h3 class="is-size-5">Мы создаем уникальные и амбициозные решения в сфере IT</h3>
    </header>
    <div class="columns about-content">
      <div class="column about-content__text">
        <p>Our team consists of highly motivated and skilled specialists who know how to deal with any issue that you may come across. This creates a basis for lasting relationships with our clients built on trust and mutual understanding. We are devoted to creating unique and innovative solutions along with the high-quality supporting services.</p>
        <div class="buttons">
          <button class="button is-link is-outlined">Сотрудничество</button>
        </div>
      </div>
      <div class="column about-content__image">
        <figure>
          <img src="https://static.addtoany.com/images/dracaena-cinnabari.jpg" alt="img">
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.about {
  padding: 40px 0;
  &-header {
    text-align: center;
    margin-bottom: 30px;
  }
  &-content {
    &__text {
      p {
        margin-bottom: 30px;
      }
    }
  }
}
</style>
