import { IUsersState } from "./state";

export interface IUsersMutations {
  setUsers(state: IUsersState, users: any[]): void;
  addUser(state: IUsersState, user: any): void;
  setUserCreationErrors(state: IUsersState, errors: any): void;
}

export const UsersMutations: IUsersMutations = {
  setUsers: (state, users) => {
    state.users = users;
  },
  addUser: (state, { user }) => {
    state.users.push(user);
  },
  setUserCreationErrors: (state, errors) => {
    state.userCreationErrors = errors || {};
  }
};
