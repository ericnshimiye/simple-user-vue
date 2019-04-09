import { IUsersState } from "./state";
import { IUserInfo } from "../definitions/userDefinition";

export interface IUsersMutations {
  setUsers(state: IUsersState, users: any[]): void;
  setUser(state: IUsersState, user: IUserInfo): void;
  addUser(state: IUsersState, user: any): void;
  setUserCreationErrors(state: IUsersState, errors: any): void;
  setUserUpdateErrors(state: IUsersState, errors: any): void;
}

export const UsersMutations: IUsersMutations = {
  setUsers: (state, users) => {
    state.users = users;
  },
  setUser: (state, user) => {
    state.currentUser = user;
  },
  addUser: (state, { user }) => {
    state.users.push(user);
  },
  setUserCreationErrors: (state, errors) => {
    state.userCreationErrors = errors || {};
  },
  setUserUpdateErrors: (state, errors) => {
    state.userUpdateErrors = errors || {};
  }
};
