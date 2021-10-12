<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#">Inicio</b-nav-item>
        <b-nav-item href="#">Quiénes somos</b-nav-item>
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
          <b-dropdown-item href="#">Radicar Factura</b-dropdown-item>
          <b-dropdown-item href="#">Modificar Factura</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>