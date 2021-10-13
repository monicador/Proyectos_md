<template>
  <b-navbar type="dark" id="nav-bar" class="bg-navbar">
    <b-navbar-nav class="mx-auto">
      <b-nav-item href="/">Inicio</b-nav-item>
      <b-nav-item href="/About">Quiénes somos</b-nav-item>
      <b-nav-item href="#">Contáctenos</b-nav-item>

      <b-nav-item-dropdown text="Parametrización" right>
        <b-dropdown-item href="#">IPS</b-dropdown-item>
        <b-dropdown-item href="#">Tipo Contrato</b-dropdown-item>
        <b-dropdown-item href="#">Contrato</b-dropdown-item>
        <b-dropdown-item href="#">Roles</b-dropdown-item>
        <b-dropdown-item href="#">Usuario</b-dropdown-item>
        <b-dropdown-item href="#">Código de Devolución </b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="Facturas" right>
        <b-dropdown-item href="/factura">Radicar Factura</b-dropdown-item>
        <b-dropdown-item href="/modificar_factura"
          >Modificar Factura</b-dropdown-item
        >
      </b-nav-item-dropdown>
      <b-nav-item v-on:click="logout" href="#">Logout</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "BarraNav",
  methods: {
    logout: function () {
      localStorage.clear();
      this.$router.push({ name: Home });
    },
  },
};
</script>
<style scoped>
.bg-navbar {
  background-color: #1b3c8d;
}
</style>