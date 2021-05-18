import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Clients from "../views/Clients.vue";
import PageNotFound from "../views/PageNotFound.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Dashboard,
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/Clients",
    name: "Clients",
    component: Clients,
  },
  {
    path: "*",
    component: PageNotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
