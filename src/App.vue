<template>
  <div id="app">
    <Header />
    <Content>
      <router-view></router-view>
    </Content>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/reusable/Header";
import Content from "./components/reusable/Content";
import Footer from "./components/reusable/Footer";

export default {
  components: {
    Header,
    Content,
    Footer
  }
};
</script>

<style lang="less">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
