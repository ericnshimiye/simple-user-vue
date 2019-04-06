import { Module } from "vuex";
import { IState } from "@/store/state";
import { IUsersState, DefaultUsersState } from "./store/state";
import { UsersActions } from "./store/actions";
import { UsersMutations } from "./store/mutations";

export const UsersModule: Module<IUsersState, IState> = {
  namespaced: true,
  state: {
    ...DefaultUsersState()
  },
  actions: {
    ...UsersActions
  },
  mutations: {
    ...UsersMutations
  }
};
