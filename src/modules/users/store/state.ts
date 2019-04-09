import { IUserInfo } from "../definitions/userDefinition";

export interface IUsersState {
  users: any[];
  userCreationErrors: any;
  currentUser: IUserInfo;
  userUpdateErrors: any;
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
    },
    userUpdateErrors: {}
  };
};
