import { IUserInfo } from "../definitions/userDefinition";

export interface IUsersState {
  users: any[];
  userCreationErrors: any;
  currentUser: IUserInfo;
}

export const DefaultUsersState = (): IUsersState => {
  return {
    users: [],
    userCreationErrors: {},
    currentUser: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      province: "",
      superUser: false
    }
  };
};
