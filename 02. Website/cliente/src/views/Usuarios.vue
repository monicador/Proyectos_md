<template>
  <div class="container">
    <h1>Usuarios</h1>

    <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="mensaje.color"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      {{ mensaje.texto }}
    </b-alert>

    <form @submit.prevent="editarUsuario(usuarioEditar)" v-if="editar">
      <h3>Editar usuario</h3>

      <input
        type="text"
        class="form-control my-2"
        placeholder="Idenfiticación"
        v-model="usuarioEditar.identificacion"
      />
      <input
        type="text"
        class="form-control my-2"
        placeholder="Nombre"
        v-model="usuarioEditar.nombre"
      />
      <input
        type="text"
        class="form-control my-2"
        placeholder="Descripcion"
        v-model="usuarioEditar.descripcion"
      />
      <b-button class="btn-success my-2 mx-2" type="submit">Editar</b-button>
      <b-button class="my-2" type="submit" @click="editar = false"
        >Cancelar</b-button
      >
    </form>
    <form @submit.prevent="agregarUsuario()" v-if="!editar">
      <h3>Agregar un nuevo usuario</h3>

      <input
        type="text"
        class="form-control my-2"
        placeholder="Nombre"
        v-model="usuario.nombre"
      />
      <input
        type="text"
        class="form-control my-2"
        placeholder="Descripcion"
        v-model="usuario.descripcion"
      />
      <b-button class="btn-success my-2" type="submit">Agregar</b-button>
    </form>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Usuario</th>
          <th scope="col">Identificacion</th>
          <th scope="col">Nombre</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in usuarios" :key="index">
          <th scope="row">{{ item._id }}</th>
          <td>{{ item.nombre }}</td>
          <td>{{ item.descripcion }}</td>
          <td>
            <b-button class="btn-danger mx-2" @click="eliminarUsuario(item._id)"
              >Eliminar</b-button
            >
            <b-button class="btn-warning mx-2" @click="activarEdicion(item._id)"
              >Editar</b-button
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarios: [],
      mensaje: { color: "success", texto: "" },
      dismissSecs: 5,
      dismissCountDown: 0,

      nota: { nombre: "", descripcion: "" },
      editar: false,
      notaEditar: {},
    };
  },

  created() {
    this.listarUsuarios();
  },

  methods: {
    listarUsuarios() {
      this.axios
        .get("/usuario")
        .then((res) => {
          console.log(res.data);
          this.usuarios = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    agregarUsuario() {
      this.axios
        .post("/nuevo-usuario", this.usuario)
        .then((res) => {
          this.usuarios.push(res.data);
          this.usuario.identificacion = "";
          this.usuario.nombre = "";
          this.mensaje.color = "success";
          this.mensaje.texto = "Usuario Agregado";
          this.showAlert();
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    eliminarUsuario(id) {
      this.axios
        .delete(`/usuario/${id}`)
        .then((res) => {
          const index = this.usuarios.findIndex(
            (item) => item._id === res.data._id
          );
          this.usuarios.splice(index, 1);
          this.mensaje.color = "success";
          this.mensaje.texto = "Usuario Eliminado";
          this.showAlert();
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    activarEdicion(id) {
      this.editar = true;
      this.axios
        .get(`/usuario/${id}`)
        .then((res) => {
          this.usuarioEditar = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    editarUsuario(item) {
      this.axios
        .put(`/usuario/${item._id}`, item)
        .then((res) => {
          const index = this.usuarios.findIndex((n) => n._id === res.data._id);
          this.usuarios[index].nombre = res.data.nombre;
          this.usuarios[index].descripcion = res.data.descripcion;
          this.mensaje.color = "success";
          this.mensaje.texto = "Usuario Editado";
          this.showAlert();
          this.editar = false;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>
