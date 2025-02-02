import { ResABC, ResPos, ResRFM } from "@/types";
import axios, { AxiosInstance } from "axios";

const API_URL: string = process.env.API_URL || "http://localhost:8000";

const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
});

// 一定時間内にサーバーとの接続ができるか確認する
export const checkConnection = async (
  timeout: number = 5000
): Promise<boolean> => {
  try {
    const source = axios.CancelToken.source();
    const timer = setTimeout(() => {
      source.cancel();
    }, timeout);

    const res = await apiClient.get("/connection", {
      cancelToken: source.token,
    });
    clearTimeout(timer);

    if (res.status !== 200) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};

export const getAllData = async (table_name: string): Promise<ResPos[]> => {
  const res = await apiClient.get(`read/${table_name}`).then((res) => res.data);
  return res;
};

export const getABCData = async (table_name: string): Promise<ResABC[]> => {
  const res = await apiClient
    .get(`read/${table_name}/abc`)
    .then((res) => res.data);
  return res;
};

export const getRFMData = async (table_name: string): Promise<ResRFM[]> => {
  const res = await apiClient
    .get(`read/${table_name}/rfm`)
    .then((res) => res.data);
  return res;
};
