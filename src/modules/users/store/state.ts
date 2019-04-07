export interface IUsersState {
  users: any[];
  userCreationErrors: any;
}

export const DefaultUsersState = (): IUsersState => {
  return {
    users: [],
    userCreationErrors: {}
  };
};
