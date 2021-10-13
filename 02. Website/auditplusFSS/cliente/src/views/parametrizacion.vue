<template>
  <div id="parametrizacion">
    <a v-on:click="logout" href="#">Logout</a>
    <BarraNav />
    <div flex container align="center" height="100">
      <img alt="logo Audit+" src="../assets/logoAudit.svg" />
    </div>
  </div>
</template>

<script>
import BarraNav from "../components/BarraNav.vue";
export default {
  components: {
    BarraNav,
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