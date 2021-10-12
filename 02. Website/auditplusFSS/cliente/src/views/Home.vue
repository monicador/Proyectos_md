<template>
  <div class="h-100">
    <Barra />
    <div class="container">
      <div class="row" align="center">
        <br />
        <img
          alt="logo Audit+"
          width="80"
          height="80"
          src="../assets/logoAudit.svg"
        />
      </div>
      <HelloWorld msg="Software" administrativo de glosas />
      <br />
      <br />
      <br />
      <h4 class="text-left">Ingresar</h4>

      <form>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label"
            ><b>Nombre de usuario</b></label
          >
          <div class="col-sm-4">
            <input type="email" class="form-control" id="inputEmail3" />
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label"
            ><b>Contraseña</b></label
          >
          <div class="col-sm-4">
            <input type="password" class="form-control" id="inputPassword3" />
          </div>
        </div>
        <div class="row mb-3-left">
          <div class="col-sm-10 offset-sm-2"></div>
        </div>
        <button type="submit" class="btn btn-primary">
          <b><a href="/parametrizacion">Enviar</a></b>
        </button>
      </form>
    </div>
  </div>
</template>

  <script>
import Barra from "../components/Barra.vue";
export default {
  components: { Barra },
};
</script>


<style>
h4 {
  font-size: 1em;
  margin: 0.1em 0;
  color: rgb(25, 6, 94);
  margin-left: 450px;
  text-decoration: none;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

h5 {
  font-size: 1em;
  margin: 0.1em 0;
  color: rgb(25, 6, 94);
  margin-left: 50px;
  text-decoration: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
