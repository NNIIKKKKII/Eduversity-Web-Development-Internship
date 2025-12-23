import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/students",
});

export const getStudents = () => API.get("/");
export const addStudent = (data) => API.post("/", data);
export const deleteStudent = (id) => API.delete(`/${id}`);
export const updateStudent = (id, data) => API.put(`/${id}`, data);
