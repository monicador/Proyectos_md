<template>
  <div class="container">
    <div class="row" align="center">
      <img
        alt="logo Audit+"
        width="80"
        height="80"
        src="../assets/logoAudit.svg"
      />
    </div>
    <HelloWorld msg="Software" administrativo de glosas />
    <br />

    <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="mensaje.color"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      {{ mensaje.texto }}
    </b-alert>

    <form @submit.prevent="radicarfactura()">
      <br />

      <div class="container">
        <div class="row g-3">
          <label for="inputText" class="col-sm-2 col-form-label text-bold"
            ><b> Número de Radicación</b></label
          >
          <div class="col-sm-3">
            <input
              type="text"
              class="form-control my-2"
              placeholder="No. Radicacion"
              v-model="facturar.noradicacion"
            />
          </div>
        </div>

        <div class="row mb-7">
          <label for="inputText" class="col-sm-2 col-form-label"
            ><b>Nit</b></label
          >
          <div class="col-sm-3">
            <input
              type="text"
              class="form-control my-2"
              placeholder="Nit"
              v-model="facturar.nit"
            />
          </div>
        </div>

        <div class="row mb-7">
          <label for="inputText" class="col-sm-2 col-form-label text-bold"
            ><b>Prefijo</b></label
          >
          <div class="col-sm-3">
            <input
              type="text"
              class="form-control my-2"
              placeholder="Prefijo"
              v-model="facturar.prefijo"
            />
          </div>
        </div>

        <div class="row mb-7">
          <label for="inputText" class="col-sm-2 col-form-label"
            ><b>N° Facturat</b></label
          >
          <div class="col-sm-3">
            <input
              type="text"
              class="form-control my-2"
              placeholder="No. Factura"
              v-model="facturar.nofactura"
            />
          </div>
        </div>

        <div class="row mb-7">
          <label for="inputText" class="col-sm-2 col-form-label"
            ><b>Nivel</b></label
          >
          <div class="col-sm-3">
            <input
              type="text"
              class="form-control my-2"
              placeholder="Nivel"
              v-model="facturar.nivel"
            />
          </div>
        </div>

        <div class="row mb-7">
          <label for="inputText" class="col-sm-2 col-form-label"
            ><b>Tipo Id</b></label
          >
          <div class="col-sm-3">
            <input
              type="text"
              class="form-control my-2"
              placeholder="Tipo Id"
              v-model="facturar.tipoid"
            />
          </div>
        </div>

        <div class="row mb-7">
          <label for="inputText" class="col-sm-2 col-form-label"
            ><b>Id Paciente</b></label
          >
          <div class="col-sm-3">
            <input
              type="text"
              class="form-control my-2"
              placeholder="Id Paciente"
              v-model="facturar.idpaciente"
            />
          </div>
        </div>

        <div class="row mb-7">
          <label for="inputText" class="col-sm-2 col-form-label"
            ><b>Nombre Paciente</b></label
          >
          <div class="col-sm-5">
            <input
              type="text"
              class="form-control my-2"
              placeholder="Nombre Paciente"
              v-model="facturar.nombrepaciente"
            />
          </div>
        </div>

        <div class="row mb-7">
          <label for="inputDate" class="col-sm-2 col-form-label"
            ><b>Fecha factura</b></label
          >
          <div class="col-sm-2">
            <!-- <input type="text" class="form-control my-2" placeholder="Fecha Factura" v-model ="facturar.fechafactura">-->
            <b-form-datepicker v-model="facturar.fechafactura" class="mb-2">
            </b-form-datepicker>
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputNumber" class="col-sm-2 col-form-label"
            ><b>Valor Factura</b></label
          >
          <div class="col-sm-3">
            <input
              type="text"
              class="form-control my-2"
              placeholder="Valor Factura"
              v-model="facturar.valorfactura"
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputText" class="col-sm-2 col-form-label"
            ><b>Estado</b></label
          >
          <div class="col-sm-2">
            <input
              type="text"
              class="form-control my-2"
              placeholder="Estado"
              v-model="facturar.estado"
            />
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-lg">
        <b>Radicar Factura</b>
      </button>
      <br />
      <br />
    </form>
    <h2>Facturas Radicadas</h2>
    <table class="table table-bordered border-primary">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">No. radicación</th>
          <th scope="col">Nit Ips</th>
          <th scope="col">Prefijo</th>
          <th scope="col">No. factura</th>
          <th scope="col">Nivel</th>
          <th scope="col">Tipo id</th>
          <th scope="col">Id paciente</th>
          <th scope="col">Nombre paciente</th>
          <th scope="col">Fecha Factura</th>
          <th scope="col">Valor Factura</th>
          <th scope="col">Radicar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in factura" :key="index">
          <th scope="row">{{ item._id }}</th>
          <td>{{ item.noradicacion }}</td>
          <td>{{ item.nit }}</td>
          <td>{{ item.prefijo }}</td>
          <td>{{ item.nofactura }}</td>
          <td>{{ item.nivel }}</td>
          <td>{{ item.tipoid }}</td>
          <td>{{ item.idpaciente }}</td>
          <td>{{ item.nombrepaciente }}</td>
          <td>{{ item.fechafactura }}</td>
          <td>{{ item.valorfactura }}</td>
          <td>{{ item.estado }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      factura: [],

      mensaje: { color: "success", texto: "" },
      dismissSecs: 5,
      dismissCountDown: 0,

      facturar: {
        noradicacion: "",
        nit: "",
        prefijo: "",
        nofactura: "",
        nivel: "",
        tipoid: "",
        idpaciente: "",
        nombrepaciente: "",
        fechafactura: "",
        valorfactura: "",
        estado: "",
      },
    };
  },

  created() {
    this.listarfactura();
  },

  methods: {
    listarfactura() {
      this.axios
        .get("/factura")
        .then((res) => {
          this.factura = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    radicarfactura() {
      this.axios
        .post("/nueva-factura", this.facturar)
        .then((res) => {
          this.factura.push(res.data);
          this.facturar.noradicacion = "";
          this.facturar.nit = "";
          this.facturar.prefijo = "";
          this.facturar.nofactura = "";
          this.facturar.nivel = "";
          this.facturar.tipoid = "";
          this.facturar.idpaciente = "";
          this.facturar.nombrepaciente = "";
          this.facturar.fechafactura = "";
          this.facturar.valorfactura = "";
          this.facturar.estado = "";
          this.mensaje.color = "success";
          this.mensaje.texto = "Factura agregada";
          this.showAlert();
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

<style>
h2 {
  font-size: 2, 8em;
  margin: 0.67em 0;
  color: rgb(22, 6, 94);
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
</style>
    
