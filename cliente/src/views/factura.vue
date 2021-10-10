<template>
    <div class="container">
        <h1>Facturas Radicadas</h1>

        <b-alert
            :show="dismissCountDown"
            dismissible
            :variant="mensaje.color"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged">
        {{mensaje.texto}}
</b-alert>



        <form @submit.prevent="radicarfactura()">
            <h3>Radicar Nuevas Facturas</h3>

            <input type="text" class="form-control my-2" placeholder="No. Radicacion" v-model ="facturar.noradicacion">
            <input type="text" class="form-control my-2" placeholder="Nit" v-model ="facturar.nit">
            <input type="text" class="form-control my-2" placeholder="Prefijo" v-model ="facturar.prefijo">
            <input type="text" class="form-control my-2" placeholder="No. Factura" v-model ="facturar.nofactura">
            <input type="text" class="form-control my-2" placeholder="Nivel" v-model ="facturar.nivel">
            <input type="text" class="form-control my-2" placeholder="Tipo Id" v-model ="facturar.tipoid">
            <input type="text" class="form-control my-2" placeholder="Id Paciente" v-model ="facturar.idpaciente">
            <input type="text" class="form-control my-2" placeholder="Nombre Paciente" v-model ="facturar.nombrepaciente">
            <input type="text" class="form-control my-2" placeholder="Fecha Factura" v-model ="facturar.fechafactura">
            <input type="text" class="form-control my-2" placeholder="Valor Factura" v-model ="facturar.valorfactura">
            <input type="text" class="form-control my-2" placeholder="Estado" v-model ="facturar.estado">
            <b-button class="btn-success my-2" type="submit">Radicar Factura</b-button>


        </form>

        <table class="table">
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">No. radicacion</th>
        <th scope="col">Nit ips</th>
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
    <th scope="row">{{item._id}}</th>
    <td>{{item.noradicacion}}</td>
    <td>{{item.nit}}</td>
    <td>{{item.prefijo}}</td>
    <td>{{item.nofactura}}</td>
    <td>{{item.nivel}}</td>
    <td>{{item.tipoid}}</td>
    <td>{{item.idpaciente}}</td>
    <td>{{item.nombrepaciente}}</td>
    <td>{{item.fechafactura}}</td>
    <td>{{item.valorfactura}}</td>
    <td>{{item.estado}}</td>
    </tr>   
</tbody>
</table>

    </div>

</template>

<script>

export default {
    data() {
        return{

            factura: [],

            mensaje: {color: 'success', texto: ''},
            dismissSecs: 5,
            dismissCountDown: 0,


            facturar:{noradicacion:"",nit:"",prefijo:"",nofactura:"",nivel:"",tipoid:"",idpaciente:"",nombrepaciente:"",fechafactura:"",valorfactura:"",estado:""}

        }
    },

    created() {

        this.listarfactura();
    },

    methods: {

        listarfactura(){
        
            this.axios.get('/factura')
            .then(res=>{

                    this.factura=res.data;

            })
            .catch(e=>{
                console.log(e.response)
            })

        },

        radicarfactura(){

            this.axios.post('/nueva-factura',this.facturar)
            .then(res=>{
                
                this.factura.push(res.data);
                this.facturar.noradicacion="";
                this.facturar.nit="";
                this.facturar.prefijo="";
                this.facturar.nofactura="";
                this.facturar.nivel="";
                this.facturar.tipoid="";
                this.facturar.idpaciente="";
                this.facturar.nombrepaciente="";
                this.facturar.fechafactura="";
                this.facturar.valorfactura="";
                this.facturar.estado="";
                this.mensaje.color="success";
                this.mensaje.texto="Factura agregada";
                this.showAlert();



            })
            .catch(e=>{
                console.log(e.response)
        })
        },

        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        }

    }
}
</script>

    
