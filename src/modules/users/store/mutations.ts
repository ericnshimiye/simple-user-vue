import { IUsersState } from "./state";

export interface IUsersMutations {
  setUsers(state: IUsersState, users: any[]): void;
}

export const UsersMutations: IUsersMutations = {
  setUsers: (state, users) => {
    state.users = users;
  }
};
