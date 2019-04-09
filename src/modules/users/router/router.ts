import { RouteConfig } from "vue-router/types/router";

export const UsersRoutes: RouteConfig[] = [
  {
    path: "/users",
    name: "users",
    component: () =>
      import(/* webpackChunkName: "users" */ "../components/UsersList.vue").then(
        (m: any) => m.default
      )
  },
  {
    path: "/edit/:idUser",
    name: "edit",
    props: true,
    component: () =>
      import(/* webpackChunkName: "edit" */ "../components/UserEdition.vue").then(
        (m: any) => m.default
      )
  }
];
