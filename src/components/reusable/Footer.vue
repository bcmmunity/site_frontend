<template>
  <footer>
    <div class="footer-top">
      <div class="container">
        <div class="navbar-menu">
          <div class="navbar-start">
            <div class="logo">
              <span>Community</span>
            </div>
          </div>
          <div class="navbar-end">
            <a
              class="navbar-item"
              v-for="(link, index) in pageLinks"
              :key="index"
            >{{link}}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <span>Created by Community©</span>
        <span>All rights reserved</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      pageLinks: ["Главная", "Мы", "Сотрудничество"]
    };
  }
};
</script>

<style lang="less" scoped>
footer {
  .footer-top {
    padding: 15px 0;
    border-bottom: 1px solid #555;
    background-color: #f5f5f5;

    .logo {
      font-weight: bold;
      padding: 5px 15px;
      background-color: #555;
      color: #ffffff;
      border-radius: 5px;
    }
  }
  .footer-bottom {
    padding: 15px 0;

    .container {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>


