<template>
  <!-- Heading-->

  <div class="min-vh-100 d-flex flex-column justify-content-between">
    <div class="align-self-stretch flex-fill">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
 
<script>
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Footer,
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 5px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #424ab9;
}
</style>
