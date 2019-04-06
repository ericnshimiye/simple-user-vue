export interface IUsersState {
  users: any[];
}

export const DefaultUsersState = (): IUsersState => {
  return {
    users: []
  };
};
