import axios from "axios";
import { IUserCreationInfo, IUserInfo } from "../definitions/userDefinition";

export const getUsers = () => {
  return axios.get("/api/users");
};

export const deleteUser = (id: number) => {
  return axios.delete(`/api/users/${id}`);
};

export const addUser = (user: IUserCreationInfo) => {
  return axios.post("/api/users", user);
};

export const getUser = (id: number) => {
  return axios.get(`/api/users/${id}`);
};

export const updateUser = (user: IUserInfo) => {
  return axios.post(`/api/users/${user.idUser}`, user);
};
