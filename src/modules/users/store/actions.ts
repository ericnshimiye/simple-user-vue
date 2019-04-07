import { ActionContext } from "vuex";
import { IState } from "@/store/state";
import { IUsersState } from "../store/state";
import * as usersApi from "../api/users";
import { AxiosResponse } from "axios";

export interface IUsersActions {
  getUsers(context: ActionContext<IUsersState, IState>): Promise<any>;
  addUser(context: ActionContext<IUsersState, IState>, data: any): Promise<any>;
  deleteUser(
    context: ActionContext<IUsersState, IState>,
    data: any
  ): Promise<any>;
}

export const UsersActions: IUsersActions = {
  getUsers({ commit }): any {
    usersApi.getUsers().then((response: AxiosResponse<any>) => {
      const payload: any[] = response && response.data;
      commit("setUsers", payload);
    });
  },
  addUser({ commit }, { firstName, lastName, email }): any {
    const addUserPromise = usersApi.addUser(firstName, lastName, email);
    addUserPromise.then((response: AxiosResponse<any>) => {
      const payload: any[] = response && response.data;
      commit("addUser", { user: payload });
    });
    return addUserPromise;
  },
  deleteUser({ commit }, { idUser }): any {
    usersApi.deleteUser(idUser).then((response: AxiosResponse<any>) => {
      const payload: any[] = response && response.data;
      commit("setUsers", payload);
    });
  }
};
