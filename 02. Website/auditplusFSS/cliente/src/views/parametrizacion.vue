<template>
  <div class="about">
    <img alt="logo Audit+" src="src\assets\logoAudit.svg" />
    <HelloWorld msg="Software administrativo de glosas" />
    <h1>Software Administrativo de Glosas</h1>
    <nav class="nav">
      <ul class="list">
        <li class="list__item">
          <div class="list__button">
            <img src="src\assets\home.svg" class="list__img" />
            <a href="#" class="nav__link"> Inicio</a>
          </div>
        </li>

        <li class="listitem listitem--click">
          <div class="listbutton listbutton--click">
            <img src="src\assets\diente.svg" class="list__img" />
            <a href="#" class="nav__link">PARAMETRIZACION</a>
            <img src="src\assets\arrow.svg" class="list__arrow" />
          </div>

          <ul class="list__show">
            <li class="list__inside">
              <a href="#" class="navlink navlink--inside"
                ><img src="src\assets\clinica.svg" /> IPS</a
              >
            </li>

            <li class="list__inside">
              <a href="#" class="navlink navlink--inside"
                ><img src="src\assets\contrato.svg" /> Contratos</a
              >
            </li>

            <li class="list__inside">
              <a href="#" class="navlink navlink--inside"
                ><img src="src\assets\roles.svg" /> Roles</a
              >
            </li>

            <li class="list__inside">
              <a href="#" class="navlink navlink--inside"
                ><img src="src\assets\usuario.svg" /> Usuarios</a
              >
            </li>

            <li class="list__inside">
              <a href="#" class="navlink navlink--inside"
                ><img src="src\assets\tipocontrato.svg" /> Tipos de Contrato</a
              >
            </li>

            <li class="list__inside">
              <a href="#" class="navlink navlink--inside"
                ><img src="src\assets\codigo.svg" /> Códigos de devolución</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
