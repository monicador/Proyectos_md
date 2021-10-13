<template>
  <nav class="nav">
    <ul class="list">
      <li class="list__item">
        <div class="list__button">
          <img src="../assets/home.svg" class="list__img" />
          <a href="#" class="nav__link"> Inicio</a>
        </div>
      </li>

      <li class="listitem listitem--click">
        <div class="listbutton listbutton--click">
          <img src="../assets/diente.svg" class="list__img" />
          <a href="#" class="nav__link">PARAMETRIZACION</a>
          <img src="../assets/arrow.svg" class="list__arrow" />
        </div>

        <ul class="list__show">
          <li class="list__inside">
            <a href="#" class="navlink navlink--inside"
              ><img src="../assets/clinica.svg" /> IPS</a
            >
          </li>

          <li class="list__inside">
            <a href="#" class="navlink navlink--inside"
              ><img src="../assets/contrato.svg" /> Contratos</a
            >
          </li>

          <li class="list__inside">
            <a href="#" class="navlink navlink--inside"
              ><img src="../assets/roles.svg" /> Roles</a
            >
          </li>

          <li class="list__inside">
            <a href="#" class="navlink navlink--inside"
              ><img src="../assets/usuario.svg" /> Usuarios</a
            >
          </li>

          <li class="list__inside">
            <a href="#" class="navlink navlink--inside"
              ><img src="../assets/tipocontrato.svg" /> Tipos de Contrato</a
            >
          </li>

          <li class="list__inside">
            <a href="#" class="navlink navlink--inside"
              ><img src="../assets/codigo.svg" /> Códigos de devolución</a
            >
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>



<style scoped>
.nav {
  width: 300px;
}

.nav__link {
  color: #050f2e;
  display: block;
  padding: 15px 0;
  text-decoration: none;
}

.nav__link--inside {
  border-radius: 6px;
  padding-left: 20px;
  text-align: left;
}

.nav__link--inside:hover {
  background: #d180f1;
}

.list {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 0 16px 16px 0;
  background: #7198ec;
}

.list__item {
  list-style: none;
  width: 100%;
  text-align: center;
  overflow: hidden;
}

.list__item--click {
  cursor: pointer;
}

.list__button {
  display: flex;
  align-items: center;
  gap: 1em;
  width: 70%;
  margin: 0 auto;
}

.arrow .list__arrow {
  transform: rotate(90deg);
}

.list__arrow {
  margin-left: auto;
  transition: transform 0.3s;
}

.list__show {
  width: 80%;
  margin-left: auto;
  border-left: 2px solid #000000;
  list-style: none;
  transition: height 0.4s;
  height: 0;
}

.boton {
  border: 1px solid #2e518b; /*anchura, estilo y color borde*/
  padding: 10px; /*espacio alrededor texto*/
  background-color: #2e518b; /*color botón*/
  color: #ffffff; /*color texto*/
  text-decoration: none; /*decoración texto*/
  text-transform: uppercase; /*capitalización texto*/
  font-family: "Helvetica", sans-serif; /*tipografía texto*/
  border-radius: 50px; /*bordes redondos*/
}
</style>
