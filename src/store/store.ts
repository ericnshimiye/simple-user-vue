import Vue from "vue";
import Vuex, { Module, Store } from "vuex";
import merge from "deepmerge";
import { IState } from "./state";
import { UsersModule } from "@/modules/users/module";

Vue.use(Vuex);

const appState: IState = {};

export const store = new Store({
  state: appState,
  mutations: {},
  actions: {}
});

export const registerModule = (
  moduleName: string,
  module: Module<any, any>
) => {
  const moduleIsRegistered: boolean =
    (store as any)._modules.root._children[moduleName] !== undefined;
  const stateExists: boolean = store.state[moduleName] !== undefined;

  if (stateExists) {
    module.state = merge(module.state, store.state[moduleName], {
      clone: false,
      arrayMerge: (target: any, source: any) => {
        return source;
      }
    });
  }

  if (!moduleIsRegistered) {
    store.registerModule(moduleName, module, { preserveState: false });
  }
};

registerModule("users", UsersModule);
