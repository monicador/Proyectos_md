<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">Inicio</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/about">Quiénes somos</b-nav-item>
          <b-nav-item href="/contactenos" disabled>Contáctenos</b-nav-item>
          <a v-on:click="logout" href="#">Logout</a>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form> </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Barra",
  methods: {
    logout: function () {
      localStorage.clear();
      this.$router.push({ name: Home });
    },
  },
};
</script>

<style scoped>
@import "../assets/css/menu.css";
@import "../assets/css/estilos.css";
</style>