import Vue from "vue";
import Router from "vue-router";
import { UsersRoutes } from "../src/modules/users/router/router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [...UsersRoutes]
});
