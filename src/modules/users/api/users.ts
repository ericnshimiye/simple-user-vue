import axios from "axios";
import { IUserCreationInfo } from "../definitions/userDefinition";

export const getUsers = () => {
  return axios.get("/api/users");
};

export const deleteUser = (id: number) => {
  return axios.delete(`/api/users/${id}`);
};

export const addUser = (user: IUserCreationInfo) => {
  return axios.post("/api/users", user);
};
