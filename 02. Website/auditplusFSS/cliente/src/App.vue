<template>
  <!-- Heading-->

  <v-app>
    <Header />
    <div id="nav">
      <router-link to="/">Inicio Sesión</router-link> |
      <router-link to="/menu-parametrizacion">Parametrización</router-link> |
      <router-link to="/factura">Radicar Factura</router-link> |
      <router-link to="/modificar_factura">Modificar Factura</router-link> |
      <router-link to="/about">Quienes somos</router-link>
    </div>
    <Barra />
    <v-main>
      <router-view />
    </v-main>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <Footer />
  </v-app>
</template>
 
<script>
import Barra from "./components/Barra.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Barra,
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
