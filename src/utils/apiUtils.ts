import { PosResponse } from "@/types";
import axios, { AxiosInstance } from "axios";

const API_URL = process.env.API_URL || "http://localhost:8000";

const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
});

export const checkConnection = async (): Promise<boolean> => {
  try {
    await apiClient.get("/").then((res) => res.data);
    return true;
  } catch (e) {
    return false;
  }
};

export const getAllData = async (table_name: string): Promise<PosResponse> => {
  const res = await apiClient.get(`read/${table_name}`).then((res) => res.data);
  return res;
};
