<template>
  <header>
    <div class="header-top">
      <div class="container">
        <div class="left">
          <div class="phone">
            <span>+ 1-687-704-2511</span>
          </div>
        </div>
        <div class="right">
          <div class="socials">
            <div
              class="icon"
              v-for="(icon, index) in icons"
              :key="index"
            >
              <i :class="`fab fa-${icon}`"></i>
            </div>
          </div>
          <div class="language">
            <div class="dropdown is-hoverable">
              <div
                class="dropdown-trigger"
                @click="toggleLanguageDropdown"
              >
                <button class="button is-white">
                  <span class="icon">
                    <i class="fas fa-globe"></i>
                  </span>
                  <span>English</span>
                  <span class="icon">
                    <i class="fas fa-angle-down"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu">
                <div class="dropdown-content">
                  <a
                    href="javascript:void(0)"
                    class="dropdown-item"
                  >Russian</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom">
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
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      icons: ["twitter", "facebook-f", "instagram"],
      pageLinks: ["Главная", "Мы", "Сотрудничество"],
      showLanguageDropdown: false
    };
  },
  methods: {
    toggleLanguageDropdown() {
      this.showLanguageDropdown = !this.showLanguageDropdown;
    }
  }
};
</script>


<style lang="less" scoped>
.header-top {
  padding: 15px 0;
  border-bottom: 1px solid #555;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .right {
      display: flex;
      align-items: center;
    }

    .phone {
      text-decoration: underline;
    }

    .socials {
      margin-right: 20px;
      .icon {
        width: 30px;
        height: 30px;
        margin-right: 10px;
        background-color: #555;
        border-radius: 5px;
        color: #ffffff;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}

.header-bottom {
  padding: 15px 0;
  background-color: #f5f5f5;

  .logo {
    font-weight: bold;
    padding: 5px 15px;
    background-color: #555;
    color: #ffffff;
    border-radius: 5px;
  }
}
</style>

