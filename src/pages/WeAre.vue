<template>
  <div class="weAre">
    <Container>
      <About />
      <WhyWeAre />
      <OurTeam />
      <Projects />
      <JoinUs />
    </Container>
  </div>
</template>

<script>
import Container from "../components/reusable/Container";
import About from "../components/we_are/About";
import WhyWeAre from "../components/we_are/WhyWeAre";
import OurTeam from "../components/we_are/OurTeam";
import Projects from "../components/we_are/Projects";
import JoinUs from "../components/we_are/JoinUs";

export default {
  name: "WeAre",
  components: {
    Container,
    About,
    WhyWeAre,
    OurTeam,
    Projects,
    JoinUs
  }
}
</script>

<style lang="less" scoped>

</style>
