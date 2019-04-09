import { ActionContext } from "vuex";
import { IState } from "@/store/state";
import { IUsersState } from "../store/state";
import * as usersApi from "../api/users";
import { AxiosResponse } from "axios";
import {
  IUserCreationInfo,
  IUserInfo,
  DefaultUser
} from "../definitions/userDefinition";

export interface IUsersActions {
  getUsers(context: ActionContext<IUsersState, IState>): Promise<any>;
  getUser(
    context: ActionContext<IUsersState, IState>,
    data: number
  ): Promise<any>;
  setUser(context: ActionContext<IUsersState, IState>, data: IUserInfo): void;
  addUser(context: ActionContext<IUsersState, IState>, data: any): Promise<any>;
  deleteUser(
    context: ActionContext<IUsersState, IState>,
    data: any
  ): Promise<any>;
  resetUserCreationErrors(context: ActionContext<IUsersState, IState>): void;
  updateUser(context: ActionContext<IUsersState, IState>): Promise<any>;
  resetUserUpdateErrors(context: ActionContext<IUsersState, IState>): void;
}

export const UsersActions: IUsersActions = {
  getUsers({ commit }): any {
    usersApi.getUsers().then((response: AxiosResponse<any>) => {
      const payload: any[] = response && response.data;
      commit("setUsers", payload);
    });
  },
  getUser({ commit }, idUser: number): any {
    const getUserPromise = usersApi.getUser(idUser);
    getUserPromise.then((response: AxiosResponse<any>) => {
      const payload: any[] = response && response.data;
      const user = { ...DefaultUser, ...payload };
      commit("setUser", user);
    });
    return getUserPromise;
  },
  setUser({ commit }, user: IUserInfo): any {
    commit("setUser", user);
  },
  addUser({ commit }, user: IUserCreationInfo): any {
    const addUserPromise = usersApi.addUser(user);
    addUserPromise.then((response: AxiosResponse<any>) => {
      const payload: any = response && response.data;
      commit("addUser", { user: payload });
      commit("setUserCreationErrors", {});
    });
    addUserPromise.catch((error: any) => {
      commit("setUserCreationErrors", error.response.data);
    });
    return addUserPromise;
  },
  deleteUser({ commit }, { idUser }): any {
    usersApi.deleteUser(idUser).then((response: AxiosResponse<any>) => {
      const payload: any[] = response && response.data;
      commit("setUsers", payload);
    });
  },
  resetUserCreationErrors({ commit }): any {
    commit("setUserCreationErrors", {});
  },
  updateUser({ commit, state }): any {
    const updateUserPromise = usersApi.updateUser(state.currentUser);

    updateUserPromise.then((response: AxiosResponse<any>) => {
      const payload: any = response && response.data;
      commit("updateUser", payload);
    });

    updateUserPromise.catch((error: any) => {
      commit("setUserUpdateErrors", error.response.data);
    });

    return updateUserPromise;
  },
  resetUserUpdateErrors({ commit }): any {
    commit("setUserUpdateErrors", {});
  }
};
