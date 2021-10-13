<template>
  <div class="flex-grow d-flex flex-column justify-content-center p-4">
    <div class="row" align="center" height="v100">
      <br />
      <img
        alt="logo Audit+"
        width="80"
        height="80"
        src="../assets/logoAudit.svg"
      />
    </div>
    <div class="container mx-auto d-flex p-4">
      <form class="row mx-auto g-3">
        <h4 class="text-center">Ingresar</h4>
        <input
          id="email-field"
          type="email"
          class="form-control text-center"
          placeholder="Nombre de Usuario"
        />

        <input
          id="password-field"
          type="password"
          class="form-control text-center"
          placeholder="Contraseña"
        />
        <button type="submit" class="btn btn-primary w-100">
          <b><a href="/parametrizacion" class="text-white">Enviar</a></b>
        </button>
      </form>
    </div>
  </div>
</template>

  <script>
export default {};
</script>


<style>
</style>
