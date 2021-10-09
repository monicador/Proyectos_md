<template>
    <div class="container">
        <h1>Radicación</h1>
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

        }

    }
}
</script>

    
