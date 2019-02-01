<template>
  <div class="ourTeam">
    <header class="ourTeam-header">
      <h1 class="is-size-3">Наша команда</h1>
    </header>
    <div class="ourTeam-content">
      <p class="ourTeam-content__navigation is-size-4">
        <span>Вся команда</span>
        <span>1 команда</span>
        <span>2 команда</span>
        <span>3 команда</span>
      </p>
      <div class="ourTeam-content__cards">
        <OurTeamCard />
        <OurTeamCard />
        <OurTeamCard />
        <OurTeamCard />
      </div>
    </div>
  </div>
</template>

<script>
import OurTeamCard from "./cards/OurTeamCard";

export default {
  name: "OurTeam",
  components: {
    OurTeamCard
  }
};
</script>

<style lang="less" scoped>
.ourTeam {
  padding: 40px 0;
  &-header {
    text-align: center;
  }
  &-content {
    &__navigation {
      text-align: center;
      margin-bottom: 40px;
      span {
        cursor: pointer;
        margin-right: 15px;
        &:hover {
          text-decoration: underline;
        }
        &:last-child {
          margin: 0;
        }
      }
    }
    &__cards {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -15px;
    }
  }
}
</style>
