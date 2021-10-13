<template>
  <div>
    <b-navbar type="dark" variant="dark" bakground color="#3f93c9">
      <b-navbar-nav>
        <b-nav-item href="/Home">Inicio</b-nav-item>
        <b-nav-item href="/About">Quiénes somos</b-nav-item>
        <b-nav-item href="#">Contáctenos</b-nav-item>

        <!-- Navbar dropdowns -->
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
  </div>
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
<style>
BarraNav {
  background-color: #1b3c8d;
  height: 100px;
}
</style>