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
          <p class="socials">
            <SocialIcon
              v-for="(icon, index) in icons"
              :key="index"
              :icon="icon"
            />
          </p>
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
            <router-link
              v-for="({text, link}, index) in pageLinks"
              :to="link"
              class="navbar-item"
              :key="index"
            >{{text}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import SocialIcon from "./SocialIcon";

export default {
  name: "Header",
  components: {
    SocialIcon
  },
  data() {
    return {
      icons: ["fab fa-twitter", "fab fa-facebook-f", "fab fa-instagram"],
      pageLinks: [
        {
          text: "Главная",
          link: "/"
        },
        {
          text: "Мы",
          link: "/we_are"
        },
        {
          text: "Сотрудничество",
          link: "/cooperation"
        }
      ],
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

      .socials {
        width: 120px;
        display: flex;
        justify-content: space-between;
        margin-right: 20px;
      }
    }

    .phone {
      text-decoration: underline;
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

