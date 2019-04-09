export interface IUserCreationInfo {
  firstName: String;
  lastName: String;
  email: String;
}

export interface IUserInfo {
  idUser?: number;
  firstName: String;
  lastName: String;
  email: String;
  birthday?: Date;
  gender: String;
  province: String;
  superUser: Boolean;
}
