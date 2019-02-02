<template>
  <div id="app">
    <section class="jumbotron text-center"></section>
    <Restaurant/>
  </div>
</template>

<script>
import Restaurant from "./components/RestaurantComponent.vue";

export default {
  name: "app",
  components: {
    Restaurant
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.jumbotron {
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-bottom: 0;
  background-color: #fff;
  background: url("./assets/650970.jpg") no-repeat center center;
  border-radius: 0;
  width: 100%;
  min-height: 280px;
  display: block;
  background-size: cover;
}
</style>
