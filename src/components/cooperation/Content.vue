<template>
  <div class="content">
    <h1 class="content__header is-size-3">Контактная информация</h1>
    <h2 class="content__subheader is-size-4">
      Если у вас интересные идеи, предложения о сотрудничестве или же вы просто хотите заказать у нас разработку сайта или приложения - заполните форму и мы ответим вам!
    </h2>
    <div class="content__address columns">
      <p class="column is-one-third is-size-4">Адрес</p>
      <p class="column is-two-thirds">Страна Россия, город Москва</p>
    </div>
    <div class="content__time columns">
      <p class="column is-one-third is-size-4">Часы</p>
      <p class="column is-two-thirds">Ежедневно с 8:00 до 24:00</p>
    </div>
    <div class="content__contact-data columns">
      <p class="column is-one-third is-size-4">Контактные данные</p>
      <p class="column is-two-thirds">
        <span>8987654321</span>
        <br>
        <span>mail@example.ru</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content"
};
</script>

<style lang="less" scoped>
.content {
  &__header,
  &__subheader {
    font-weight: normal;
  }
  &__address, &__time, &__contact-data {
    display: flex;
    align-items: baseline;
  }
}
</style>
