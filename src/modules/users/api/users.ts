import axios from "axios";

export const getUsers = () => {
  return axios.get("/api/users");
};

export const deleteUser = (id: number) => {
  return axios.delete(`/api/users/${id}`);
};

export const addUser = (firstName: string, lastName: string, email: string) => {
  return axios.post("/api/users", { firstName, lastName, email });
};
