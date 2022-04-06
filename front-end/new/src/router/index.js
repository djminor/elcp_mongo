import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddView from "../views/AddView.vue";
import ExploreView from "../views/ExploreView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/add",
    name: "add",
    component: AddView,
  },
  {
    path: "/explore",
    name: "explore",
    component: ExploreView,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
