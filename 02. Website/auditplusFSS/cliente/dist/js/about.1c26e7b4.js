(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0b42":function(t,a,r){var e=r("e8b5"),c=r("68ee"),s=r("861d"),i=r("b622"),o=i("species");t.exports=function(t){var a;return e(t)&&(a=t.constructor,c(a)&&(a===Array||e(a.prototype))?a=void 0:s(a)&&(a=a[o],null===a&&(a=void 0))),void 0===a?Array:a}},"1cb3":function(t,a,r){t.exports=r.p+"img/amparo.c92a7072.jpg"},"1dde":function(t,a,r){var e=r("d039"),c=r("b622"),s=r("2d00"),i=c("species");t.exports=function(t){return s>=51||!e((function(){var a=[],r=a.constructor={};return r[i]=function(){return{foo:1}},1!==a[t](Boolean).foo}))}},"248c":function(t,a,r){t.exports=r.p+"img/monicado.4f1a6b21.png"},"30e6":function(t,a,r){t.exports=r.p+"img/francy.b585e9c0.png"},"3de5":function(t,a,r){"use strict";r("42dc")},"42dc":function(t,a,r){},4757:function(t,a,r){"use strict";r.r(a);var e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("br"),r("br"),r("div",{staticClass:"container"},[t._m(0),r("br"),r("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:t.mensaje.color},on:{dismissed:function(a){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.mensaje.texto)+" ")]),t.editar?r("form",{on:{submit:function(a){return a.preventDefault(),t.editarfactura(t.facturaEditar)}}},[r("h3",[t._v("Modificar Facturas")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.facturaEditar.noradicacion,expression:"facturaEditar.noradicacion"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"No. Radicacion"},domProps:{value:t.facturaEditar.noradicacion},on:{input:function(a){a.target.composing||t.$set(t.facturaEditar,"noradicacion",a.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.facturaEditar.nit,expression:"facturaEditar.nit"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Nit"},domProps:{value:t.facturaEditar.nit},on:{input:function(a){a.target.composing||t.$set(t.facturaEditar,"nit",a.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.facturaEditar.prefijo,expression:"facturaEditar.prefijo"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Prefijo"},domProps:{value:t.facturaEditar.prefijo},on:{input:function(a){a.target.composing||t.$set(t.facturaEditar,"prefijo",a.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.facturaEditar.nofactura,expression:"facturaEditar.nofactura"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"No. Factura"},domProps:{value:t.facturaEditar.nofactura},on:{input:function(a){a.target.composing||t.$set(t.facturaEditar,"nofactura",a.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.facturaEditar.nivel,expression:"facturaEditar.nivel"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Nivel"},domProps:{value:t.facturaEditar.nivel},on:{input:function(a){a.target.composing||t.$set(t.facturaEditar,"nivel",a.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.facturaEditar.tipoid,expression:"facturaEditar.tipoid"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Tipo Id"},domProps:{value:t.facturaEditar.tipoid},on:{input:function(a){a.target.composing||t.$set(t.facturaEditar,"tipoid",a.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.facturaEditar.idpaciente,expression:"facturaEditar.idpaciente"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Id Paciente"},domProps:{value:t.facturaEditar.idpaciente},on:{input:function(a){a.target.composing||t.$set(t.facturaEditar,"idpaciente",a.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.facturaEditar.nombrepaciente,expression:"facturaEditar.nombrepaciente"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Nombre Paciente"},domProps:{value:t.facturaEditar.nombrepaciente},on:{input:function(a){a.target.composing||t.$set(t.facturaEditar,"nombrepaciente",a.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.facturaEditar.fechafactura,expression:"facturaEditar.fechafactura"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Fecha Factura"},domProps:{value:t.facturaEditar.fechafactura},on:{input:function(a){a.target.composing||t.$set(t.facturaEditar,"fechafactura",a.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.facturaEditar.valorfactura,expression:"facturaEditar.valorfactura"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Valor Factura"},domProps:{value:t.facturaEditar.valorfactura},on:{input:function(a){a.target.composing||t.$set(t.facturaEditar,"valorfactura",a.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.facturaEditar.estado,expression:"facturaEditar.estado"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Estado"},domProps:{value:t.facturaEditar.estado},on:{input:function(a){a.target.composing||t.$set(t.facturaEditar,"estado",a.target.value)}}}),r("b-button",{staticClass:"btn-success my-2 mx-2",attrs:{type:"submit"}},[t._v("Editar Factura")]),r("b-button",{staticClass:"my-2",attrs:{type:"submit"},on:{click:function(a){t.editar=!1}}},[t._v("Cancelar")])],1):t._e(),r("table",{staticClass:"table"},[t._m(1),r("tbody",t._l(t.factura,(function(a,e){return r("tr",{key:e},[r("th",{attrs:{scope:"row"}},[t._v(t._s(a._id))]),r("td",[t._v(t._s(a.noradicacion))]),r("td",[t._v(t._s(a.nit))]),r("td",[t._v(t._s(a.prefijo))]),r("td",[t._v(t._s(a.nofactura))]),r("td",[t._v(t._s(a.nivel))]),r("td",[t._v(t._s(a.tipoid))]),r("td",[t._v(t._s(a.idpaciente))]),r("td",[t._v(t._s(a.nombrepaciente))]),r("td",[t._v(t._s(a.fechafactura))]),r("td",[t._v(t._s(a.valorfactura))]),r("td",[t._v(t._s(a.estado))]),r("td",[r("b-button",{staticClass:"btn-danger my-2",on:{click:function(r){return t.eliminar(a._id)}}},[t._v("Eliminar")])],1),r("td",[r("b-button",{staticClass:"btn-primary my-2",on:{click:function(r){return t.actvaredicion(a._id)}}},[t._v("Editar")])],1)])})),0)])],1)])},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row",attrs:{align:"center"}},[e("img",{attrs:{alt:"logo Audit+",width:"80",height:"80",src:r("90b3")}})])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("#")]),r("th",{attrs:{scope:"col"}},[t._v("No. radicacion")]),r("th",{attrs:{scope:"col"}},[t._v("Nit ips")]),r("th",{attrs:{scope:"col"}},[t._v("Prefijo")]),r("th",{attrs:{scope:"col"}},[t._v("No. factura")]),r("th",{attrs:{scope:"col"}},[t._v("Nivel")]),r("th",{attrs:{scope:"col"}},[t._v("Tipo id")]),r("th",{attrs:{scope:"col"}},[t._v("Id paciente")]),r("th",{attrs:{scope:"col"}},[t._v("Nombre paciente")]),r("th",{attrs:{scope:"col"}},[t._v("Fecha Factura")]),r("th",{attrs:{scope:"col"}},[t._v("Valor Factura")]),r("th",{attrs:{scope:"col"}},[t._v("Estado")]),r("th",{attrs:{scope:"col"}},[t._v("Acciones")])])])}],s=(r("c740"),r("a434"),{data:function(){return{factura:[],mensaje:{color:"success",texto:""},dismissSecs:5,dismissCountDown:0,facturar:{noradicacion:"",nit:"",prefijo:"",nofactura:"",nivel:"",tipoid:"",idpaciente:"",nombrepaciente:"",fechafactura:"",valorfactura:"",estado:""},editar:!1,facturaEditar:{}}},created:function(){this.listarfactura()},methods:{listarfactura:function(){var t=this;this.axios.get("/factura").then((function(a){t.factura=a.data})).catch((function(t){console.log(t.response)}))},radicarfactura:function(){var t=this;this.axios.post("/nueva-factura",this.facturar).then((function(a){t.factura.push(a.data),t.facturar.noradicacion="",t.facturar.nit="",t.facturar.prefijo="",t.facturar.nofactura="",t.facturar.nivel="",t.facturar.tipoid="",t.facturar.idpaciente="",t.facturar.nombrepaciente="",t.facturar.fechafactura="",t.facturar.valorfactura="",t.facturar.estado="",t.mensaje.color="success",t.mensaje.texto="Factura agregada",t.showAlert()})).catch((function(t){console.log(t.response)}))},eliminar:function(t){var a=this;this.axios.delete("/factura/".concat(t)).then((function(t){var r=a.factura.findIndex((function(a){return a._id===t.data._id}));a.factura.splice(r,1),a.mensaje.color="success",a.mensaje.texto="Factura eliminada",a.showAlert()})).catch((function(t){console.log(t.response)}))},actvaredicion:function(t){var a=this;this.editar=!0,this.axios.get("/factura/".concat(t)).then((function(t){a.facturaEditar=t.data})).catch((function(t){console.log(t.response)}))},editarfactura:function(t){var a=this;this.axios.put("/factura/".concat(t._id),t).then((function(t){var r=a.factura.findIndex((function(a){return a._id===t.data._id}));a.factura[r].noradicacion=t.data.noradicacion,a.factura[r].nit=t.data.nit,a.factura[r].prefijo=t.data.prefijo,a.factura[r].nofactura=t.data.nofactura,a.factura[r].nivel=t.data.nivel,a.factura[r].tipoid=t.data.tipoid,a.factura[r].idpaciente=t.data.idpaciente,a.factura[r].nombrepaciente=t.data.nombrepaciente,a.factura[r].fechafactura=t.data.fechafactura,a.factura[r].valorfactura=t.data.valorfactura,a.factura[r].estado=t.data.estado,a.mensaje.color="success",a.mensaje.texto="Factura Actualizada",a.showAlert(),a.editar=!1})).catch((function(t){console.log(t.response)}))},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}}}),i=s,o=r("2877"),n=Object(o["a"])(i,e,c,!1,null,null,null);a["default"]=n.exports},4794:function(t,a,r){"use strict";r.r(a);var e=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"parametrizacion"}},[e("div",{attrs:{flex:"",container:"",align:"center",height:"100"}},[e("img",{attrs:{alt:"logo Audit+",src:r("90b3")}})])])}],s={},i=s,o=r("2877"),n=Object(o["a"])(i,e,c,!1,null,null,null);a["default"]=n.exports},"65f0":function(t,a,r){var e=r("0b42");t.exports=function(t,a){return new(e(t))(0===a?0:a)}},"754b":function(t,a,r){"use strict";r.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("br"),e("br"),t._m(0),e("h3",[t._v("Conozca nuestro Equipo Scrum")]),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row justify-content-center mb-5"},[e("div",{staticClass:"col-sm-6 col-xs-12 col-lg-4 mt-5"},[e("div",{staticClass:"card"},[e("div",{staticClass:"d-flex justify-content-center p-2"},[e("div",[e("path",{attrs:{"fill-rule":"evenodd"}}),e("img",{staticClass:"img-thumbnail",attrs:{src:r("c6d8"),alt:"fernando"}})])]),t._m(1)])]),e("div",{staticClass:"col-sm-6 col-xs-12 col-lg-4 mt-5"},[e("div",{staticClass:"card"},[e("div",{staticClass:"d-flex justify-content-center p-2"},[e("div",[e("path",{attrs:{"fill-rule":"evenodd"}}),e("img",{staticClass:"img-thumbnail",attrs:{src:r("248c"),alt:"..."}})])]),t._m(2)])]),e("div",{staticClass:"col-sm-6 col-xs-12 col-lg-4 mt-5"},[e("div",{staticClass:"card"},[e("div",{staticClass:"d-flex justify-content-center p-2"},[e("div",[e("path",{attrs:{"fill-rule":"evenodd"}}),e("img",{staticClass:"img-thumbnail",attrs:{src:r("df64"),alt:"edith"}})])]),t._m(3)])])])]),t._m(4)])},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"row",attrs:{align:"center"}},[e("br"),e("img",{attrs:{alt:"logo Audit+",width:"80",height:"80",src:r("90b3")}})])])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"card-body text-center"},[r("h5",{staticClass:"card-title"},[t._v("Vilmary Muñoz")]),r("p",{staticClass:"card-text"},[r("b",[t._v("Product Owner")])]),r("p",[t._v("vilmarymuñoz1967@gmail.com.")]),r("div",{staticClass:"card-footer"},[r("a",{staticClass:"btn btn-primary btn-center",attrs:{href:"#"}},[t._v("Contactar")]),r("small",{staticClass:"text-muted"},[r("p",[t._v("Móvil +57 317333333")])])])])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"card-body text-center"},[r("h5",{staticClass:"card-title"},[t._v("Mónica Lorieth Dorado")]),r("p",{staticClass:"card-text"},[r("b",[t._v("Scrum Máster")])]),r("p",[t._v("monicador@gmail.com.")]),r("div",{staticClass:"card-footer"},[t._v(" > "),r("a",{staticClass:"btn btn-primary btn-center",attrs:{href:"#"}},[t._v("Contactar")]),r("small",{staticClass:"text-muted"},[r("p",[t._v("Móvil +57 317333333")])])])])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"card-body text-center"},[r("h5",{staticClass:"card-title"},[t._v("Edith María Betancourt")]),r("p",{staticClass:"card-text"},[r("b",[t._v("Integrante del equipo de desarrollo Scrum")])]),r("p",[t._v('"Cerebrito", editb@gmail.com')]),r("div",{staticClass:"card-footer"},[r("a",{staticClass:"btn btn-primary btn-center",attrs:{href:"#"}},[t._v("Contactar")]),r("small",{staticClass:"text-muted"},[r("p",[t._v("Móvil +57 317333333")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row justify-content-center mb-5"},[e("div",{staticClass:"col-sm-6 col-xs-12 col-lg-4 mt-5"},[e("div",{staticClass:"card"},[e("div",{staticClass:"d-flex justify-content-center p-2"},[e("div",[e("img",{staticClass:"img-thumbnail",attrs:{src:r("1cb3"),alt:"luzamparo.."}})])]),e("div",{staticClass:"card-body text-center"},[e("h5",{staticClass:"card-title"},[t._v("Luz Amparo Moreno")]),e("p",{staticClass:"card-text"},[e("b",[t._v("Integrante del Equipo de desarrollo Scrum")])]),e("p",[t._v("lamorenove@gmail.com")]),e("div",{staticClass:"card-footer"},[e("a",{staticClass:"btn btn-primary btn-center",attrs:{href:"#"}},[t._v("Contactar")]),e("small",{staticClass:"text-muted"},[e("p",[t._v("Móvil +57 317333333")])])])])])]),e("div",{staticClass:"col-sm-6 col-xs-12 col-lg-4 mt-5"},[e("div",{staticClass:"card"},[e("div",{staticClass:"d-flex justify-content-center p-2"},[e("div",[e("img",{staticClass:"img-thumbnail",attrs:{src:r("30e6"),alt:"francy.."}})])]),e("div",{staticClass:"card-body text-center"},[e("h5",{staticClass:"card-title"},[t._v("Francy Stella Salgado D")]),e("p",{staticClass:"card-text"},[e("b",[t._v("Integrante del equipo de desarrollo Scrum")])]),e("p",[t._v("francystellasalgado@gmail.com.")]),e("div",{staticClass:"card-footer"},[e("a",{staticClass:"btn btn-primary btn-center",attrs:{href:"#"}},[t._v("Contactar")]),e("small",{staticClass:"text-muted"},[e("p",[t._v("Móvil +57 317333333")])])])])])]),e("div",{staticClass:"col-sm-6 col-xs-12 col-lg-4 mt-5"},[e("div",{staticClass:"card"},[e("div",{staticClass:"d-flex justify-content-center p-2"},[e("div",[e("img",{staticClass:"img-thumbnail",attrs:{src:r("ac50"),alt:"Marisol.."}})]),e("div",{staticClass:"card-body text-center"},[e("h5",{staticClass:"card-title"},[t._v("Marisol Ruíz")]),e("p",{staticClass:"card-text"},[e("b",[t._v("Integrante del equipo de desarrollo de Scrum")])]),e("p",[t._v("marisol1021@gmail.com")]),e("div",{staticClass:"card-footer"},[e("a",{staticClass:"btn btn-primary btn-center",attrs:{href:"#"}},[t._v("Contactar")]),e("small",{staticClass:"text-muted"},[e("p",[t._v("Móvil +57 317333333")])])])])])])])])])}],s={},i=s,o=(r("3de5"),r("2877")),n=Object(o["a"])(i,e,c,!1,null,null,null);a["default"]=n.exports},8418:function(t,a,r){"use strict";var e=r("a04b"),c=r("9bf2"),s=r("5c6c");t.exports=function(t,a,r){var i=e(a);i in t?c.f(t,i,s(0,r)):t[i]=r}},"84a5":function(t,a,r){"use strict";r("f25e")},a434:function(t,a,r){"use strict";var e=r("23e7"),c=r("23cb"),s=r("5926"),i=r("07fa"),o=r("7b0b"),n=r("65f0"),l=r("8418"),u=r("1dde"),d=u("splice"),f=Math.max,m=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";e({target:"Array",proto:!0,forced:!d},{splice:function(t,a){var r,e,u,d,h,b,g=o(this),A=i(g),C=c(t,A),_=arguments.length;if(0===_?r=e=0:1===_?(r=0,e=A-C):(r=_-2,e=m(f(s(a),0),A-C)),A+r-e>p)throw TypeError(v);for(u=n(g,e),d=0;d<e;d++)h=C+d,h in g&&l(u,d,g[h]);if(u.length=e,r<e){for(d=C;d<A-e;d++)h=d+e,b=d+r,h in g?g[b]=g[h]:delete g[b];for(d=A;d>A-e+r;d--)delete g[d-1]}else if(r>e)for(d=A-e;d>C;d--)h=d+e-1,b=d+r-1,h in g?g[b]=g[h]:delete g[b];for(d=0;d<r;d++)g[d+C]=arguments[d+2];return g.length=A-e+r,u}})},ac50:function(t,a,r){t.exports=r.p+"img/Marisol.98f219ae.jpg"},b727:function(t,a,r){var e=r("0366"),c=r("44ad"),s=r("7b0b"),i=r("07fa"),o=r("65f0"),n=[].push,l=function(t){var a=1==t,r=2==t,l=3==t,u=4==t,d=6==t,f=7==t,m=5==t||d;return function(p,v,h,b){for(var g,A,C=s(p),_=c(C),x=e(v,h,3),y=i(_),w=0,E=b||o,j=a?E(p,y):r||f?E(p,0):void 0;y>w;w++)if((m||w in _)&&(g=_[w],A=x(g,w,C),t))if(a)j[w]=A;else if(A)switch(t){case 3:return!0;case 5:return g;case 6:return w;case 2:n.call(j,g)}else switch(t){case 4:return!1;case 7:n.call(j,g)}return d?-1:l||u?u:j}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},c6d8:function(t,a){t.exports="data:image/jpeg;base64,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"},c740:function(t,a,r){"use strict";var e=r("23e7"),c=r("b727").findIndex,s=r("44d2"),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),e({target:"Array",proto:!0,forced:o},{findIndex:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),s(i)},df64:function(t,a,r){t.exports=r.p+"img/edith.554c3d0a.png"},e893d:function(t,a,r){"use strict";r.r(a);var e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("br"),r("div",{staticClass:"container"},[t._m(0),r("br"),r("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:t.mensaje.color},on:{dismissed:function(a){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.mensaje.texto)+" ")]),r("form",{on:{submit:function(a){return a.preventDefault(),t.radicarfactura()}}},[r("br"),r("div",{staticClass:"container"},[r("div",{staticClass:"row g-3"},[t._m(1),r("div",{staticClass:"col-sm-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.facturar.noradicacion,expression:"facturar.noradicacion"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"No. Radicacion"},domProps:{value:t.facturar.noradicacion},on:{input:function(a){a.target.composing||t.$set(t.facturar,"noradicacion",a.target.value)}}})])]),r("div",{staticClass:"row mb-7"},[t._m(2),r("div",{staticClass:"col-sm-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.facturar.nit,expression:"facturar.nit"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Nit"},domProps:{value:t.facturar.nit},on:{input:function(a){a.target.composing||t.$set(t.facturar,"nit",a.target.value)}}})])]),r("div",{staticClass:"row mb-7"},[t._m(3),r("div",{staticClass:"col-sm-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.facturar.prefijo,expression:"facturar.prefijo"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Prefijo"},domProps:{value:t.facturar.prefijo},on:{input:function(a){a.target.composing||t.$set(t.facturar,"prefijo",a.target.value)}}})])]),r("div",{staticClass:"row mb-7"},[t._m(4),r("div",{staticClass:"col-sm-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.facturar.nofactura,expression:"facturar.nofactura"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"No. Factura"},domProps:{value:t.facturar.nofactura},on:{input:function(a){a.target.composing||t.$set(t.facturar,"nofactura",a.target.value)}}})])]),r("div",{staticClass:"row mb-7"},[t._m(5),r("div",{staticClass:"col-sm-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.facturar.nivel,expression:"facturar.nivel"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Nivel"},domProps:{value:t.facturar.nivel},on:{input:function(a){a.target.composing||t.$set(t.facturar,"nivel",a.target.value)}}})])]),r("div",{staticClass:"row mb-7"},[t._m(6),r("div",{staticClass:"col-sm-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.facturar.tipoid,expression:"facturar.tipoid"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Tipo Id"},domProps:{value:t.facturar.tipoid},on:{input:function(a){a.target.composing||t.$set(t.facturar,"tipoid",a.target.value)}}})])]),r("div",{staticClass:"row mb-7"},[t._m(7),r("div",{staticClass:"col-sm-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.facturar.idpaciente,expression:"facturar.idpaciente"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Id Paciente"},domProps:{value:t.facturar.idpaciente},on:{input:function(a){a.target.composing||t.$set(t.facturar,"idpaciente",a.target.value)}}})])]),r("div",{staticClass:"row mb-7"},[t._m(8),r("div",{staticClass:"col-sm-5"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.facturar.nombrepaciente,expression:"facturar.nombrepaciente"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Nombre Paciente"},domProps:{value:t.facturar.nombrepaciente},on:{input:function(a){a.target.composing||t.$set(t.facturar,"nombrepaciente",a.target.value)}}})])]),r("div",{staticClass:"row mb-7"},[t._m(9),r("div",{staticClass:"col-sm-2"},[r("b-form-datepicker",{staticClass:"mb-2",model:{value:t.facturar.fechafactura,callback:function(a){t.$set(t.facturar,"fechafactura",a)},expression:"facturar.fechafactura"}})],1)]),r("div",{staticClass:"row mb-3"},[t._m(10),r("div",{staticClass:"col-sm-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.facturar.valorfactura,expression:"facturar.valorfactura"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Valor Factura"},domProps:{value:t.facturar.valorfactura},on:{input:function(a){a.target.composing||t.$set(t.facturar,"valorfactura",a.target.value)}}})])]),r("div",{staticClass:"row mb-3"},[t._m(11),r("div",{staticClass:"col-sm-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.facturar.estado,expression:"facturar.estado"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Estado"},domProps:{value:t.facturar.estado},on:{input:function(a){a.target.composing||t.$set(t.facturar,"estado",a.target.value)}}})])])]),t._m(12),r("br"),r("br")]),r("h2",[t._v("Facturas Radicadas")]),r("table",{staticClass:"table table-bordered border-primary"},[t._m(13),r("tbody",t._l(t.factura,(function(a,e){return r("tr",{key:e},[r("th",{attrs:{scope:"row"}},[t._v(t._s(a._id))]),r("td",[t._v(t._s(a.noradicacion))]),r("td",[t._v(t._s(a.nit))]),r("td",[t._v(t._s(a.prefijo))]),r("td",[t._v(t._s(a.nofactura))]),r("td",[t._v(t._s(a.nivel))]),r("td",[t._v(t._s(a.tipoid))]),r("td",[t._v(t._s(a.idpaciente))]),r("td",[t._v(t._s(a.nombrepaciente))]),r("td",[t._v(t._s(a.fechafactura))]),r("td",[t._v(t._s(a.valorfactura))]),r("td",[t._v(t._s(a.estado))])])})),0)])],1)])},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row",attrs:{align:"center"}},[e("img",{attrs:{alt:"logo Audit+",width:"80",height:"80",src:r("90b3")}})])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("label",{staticClass:"col-sm-2 col-form-label text-bold",attrs:{for:"inputText"}},[r("b",[t._v(" Número de Radicación")])])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputText"}},[r("b",[t._v("Nit")])])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("label",{staticClass:"col-sm-2 col-form-label text-bold",attrs:{for:"inputText"}},[r("b",[t._v("Prefijo")])])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputText"}},[r("b",[t._v("N° Facturat")])])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputText"}},[r("b",[t._v("Nivel")])])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputText"}},[r("b",[t._v("Tipo Id")])])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputText"}},[r("b",[t._v("Id Paciente")])])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputText"}},[r("b",[t._v("Nombre Paciente")])])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputDate"}},[r("b",[t._v("Fecha factura")])])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputNumber"}},[r("b",[t._v("Valor Factura")])])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputText"}},[r("b",[t._v("Estado")])])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("button",{staticClass:"btn btn-primary btn-lg",attrs:{type:"submit"}},[r("b",[t._v("Radicar Factura")])])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("#")]),r("th",{attrs:{scope:"col"}},[t._v("No. radicación")]),r("th",{attrs:{scope:"col"}},[t._v("Nit Ips")]),r("th",{attrs:{scope:"col"}},[t._v("Prefijo")]),r("th",{attrs:{scope:"col"}},[t._v("No. factura")]),r("th",{attrs:{scope:"col"}},[t._v("Nivel")]),r("th",{attrs:{scope:"col"}},[t._v("Tipo id")]),r("th",{attrs:{scope:"col"}},[t._v("Id paciente")]),r("th",{attrs:{scope:"col"}},[t._v("Nombre paciente")]),r("th",{attrs:{scope:"col"}},[t._v("Fecha Factura")]),r("th",{attrs:{scope:"col"}},[t._v("Valor Factura")]),r("th",{attrs:{scope:"col"}},[t._v("Radicar")])])])}],s={data:function(){return{factura:[],mensaje:{color:"success",texto:""},dismissSecs:5,dismissCountDown:0,facturar:{noradicacion:"",nit:"",prefijo:"",nofactura:"",nivel:"",tipoid:"",idpaciente:"",nombrepaciente:"",fechafactura:"",valorfactura:"",estado:""}}},created:function(){this.listarfactura()},methods:{listarfactura:function(){var t=this;this.axios.get("/factura").then((function(a){t.factura=a.data})).catch((function(t){console.log(t.response)}))},radicarfactura:function(){var t=this;this.axios.post("/nueva-factura",this.facturar).then((function(a){t.factura.push(a.data),t.facturar.noradicacion="",t.facturar.nit="",t.facturar.prefijo="",t.facturar.nofactura="",t.facturar.nivel="",t.facturar.tipoid="",t.facturar.idpaciente="",t.facturar.nombrepaciente="",t.facturar.fechafactura="",t.facturar.valorfactura="",t.facturar.estado="",t.mensaje.color="success",t.mensaje.texto="Factura agregada",t.showAlert()})).catch((function(t){console.log(t.response)}))},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}}},i=s,o=(r("84a5"),r("2877")),n=Object(o["a"])(i,e,c,!1,null,null,null);a["default"]=n.exports},e8b5:function(t,a,r){var e=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==e(t)}},f25e:function(t,a,r){}}]);
//# sourceMappingURL=about.1c26e7b4.js.map