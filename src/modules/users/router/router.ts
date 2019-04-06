import { RouteConfig } from "vue-router/types/router";

export const UsersRoutes: RouteConfig[] = [
  {
    path: "/users",
    name: "users",
    component: () =>
      import(/* webpackChunkName: "users" */ "../components/UsersList.vue").then(
        (m: any) => m.default
      )
  }
];
