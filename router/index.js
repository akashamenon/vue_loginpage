import Vue from "vue";
import VueRouter from "vue-router";
import login from "../src/page/login"
import registration from "../src/page/registration"
import dashboard from "../src/page/dashboard"

Vue.use(VueRouter);
let routes = [
    {
      path: "/",
      name: "Login",
      component: login
    },
  
    {
      path: "/signup",
      name: "Signup",
      component: registration
    },

    {
    path: "/dashboard",
      name: "Dashboard",
      component: dashboard
    },

]
  const router = new VueRouter({
    mode: "history",
    base: "/",
    routes,
  });
  export default router;