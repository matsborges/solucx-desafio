import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "SoluCX Test"
    }
  },
  
  {
    path: "/:id",
    name: "detalhes",
    component: Details,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
