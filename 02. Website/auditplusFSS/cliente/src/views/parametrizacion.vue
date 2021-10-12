<template>
  <div id="parametrizacion">
    <a v-on:click="logout" href="#">Logout</a>
    <BarraNav />
    <BarraLateral />
    <img alt="logo Audit+" src="../assets/logoAudit.svg" />
    <HelloWorld msg="Software administrativo de glosas" />
    <h1>Software Administrativo de Glosas</h1>
  </div>
</template>

<script>
import BarraNav from "../components/BarraNav.vue";
import BarraLateral from "../components/BarraLateral.vue";
export default {
  components: {
    BarraNav,
    BarraLateral,
  },
  name: "Barra",
  methods: {
    logout: function () {
      localStorage.clear();
      this.$router.push({ name: "Home" });
    },
  },
};
</script>