<template>
  <div class="form content">
    <div class="form__name">
      <p><span>Имя*</span></p>
      <p><input
          class="input"
          type="text"
          placeholder="Введите ваше имя*"
        ></p>
    </div>
    <div class="form__phone">
      <p><span>Телефон*</span></p>
      <p><input
          class="input"
          type="tel"
          placeholder="Введите ваш номер телефона*"
        ></p>
    </div>
    <div class="form__mail">
      <p><span>E-mail*</span></p>
      <p><input
          class="input"
          type="email"
          placeholder="Введите ваш e-mail*"
        ></p>
    </div>
    <div class="form__message">
      <p><span>E-mail*</span></p>
      <p><textarea
          name="message"
          class="textarea"
          placeholder="Опишите вашу идею, предложение, заказ, чтобы мы могли подготовить для вас подробный ответ"
        ></textarea></p>
    </div>
    <div class="buttons">
      <button class="button is-link is-fullwidth">Отправить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form"
};
</script>

<style lang="less" scoped>
.form {
  padding: 60px 17.5%;
  background-color: #e9e9e9;
  &__name,
  &__phone,
  &__mail,
  &__message {
    margin-bottom: 20px;
  }
}
</style>
