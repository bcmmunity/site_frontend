<template>
  <div class="cooperation container">
    <div class="columns">
      <div class="column">
        <Content />
      </div>
      <div class="column">
        <Form />
      </div>
    </div>
  </div>
</template>

<script>
import Content from "../components/cooperation/Content";
import Form from "../components/cooperation/Form";

export default {
  components: {
    Content,
    Form
  }
};
</script>

<style lang="less" scoped>
.cooperation {
  padding: 40px 0;
}
</style>
