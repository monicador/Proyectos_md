import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  ,
  {
    path: "/parametrizacion",
    name: "parametrizacion",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/parametrizacion.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/factura",
    name: "factura",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/factura.vue"),
  },

  {
    path: "/modificar_factura",
    name: "modificar_factura",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/modificar_factura.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;