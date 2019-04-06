import axios from "axios";

export const getUsers = () => {
  return axios.get("/api/users");
};

export const deleteUser = (id: number) => {
  return axios.delete(`/api/users/${id}`);
};
