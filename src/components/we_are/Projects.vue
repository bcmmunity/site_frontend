<template>
  <div class="projects">
    <header class="projects-header">
      <h1 class="is-size-3">Проекты</h1>
    </header>
    <div class="projects-content">
      <ProjectsCard />
      <ProjectsCard />
      <ProjectsCard />
      <ProjectsCard />
    </div>
    <div class="projects-buttons buttons is-centered">
      <button class="button is-link is-outlined">Learn more</button>
      <button class="button is-link">Request a quote</button>
    </div>
  </div>
</template>

<script>
import ProjectsCard from "./cards/ProjectsCard";

export default {
  name: "Projects",
  components: {
    ProjectsCard
  }
};
</script>

<style lang="less" scoped>
.projects {
  padding: 40px 0;
  &-header {
    text-align: center;
    margin-bottom: 30px;
  }
  &-content {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
  }
}
</style>
