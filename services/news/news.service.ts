import Api from "@/services/Api";
import { localStorageKeys } from "@/utils/constants";
import { createCookie, eraseCookie } from "@/utils/cookieCreator";
import Router from "next/router";

const api = new Api();

export const asyncGetNews = async () => {
  try {
    const response = await api.get("/getNews").then(async (res: any) => {
      if (res && res?.isSuccess) {
        return res;
      }
    });
    return response;
  } catch (e: any) {
    return e.message;
  }
};

export const asyncGetProject = async (payload: any) => {
  try {
    const response = await api
      .post("/getProjects", payload)
      .then(async (res: any) => {
        if (res && res?.isSuccess) {
          return res.data;
        }
      });
    return response;
  } catch (e: any) {
    return e.message;
  }
};

export const asyncAddNews = async (payload: any) => {
  try {
    const response = await api
      .post("/addNews", payload)
      .then(async (res: any) => {
        if (res && res?.isSuccess) {
          return res.data;
        }
      });
    return response;
  } catch (e: any) {
    return e.message;
  }
};

export const asyncSearchNews = async (payload: any) => {
  try {
    const response = await api
      .post("/searchNews", payload)
      .then(async (res: any) => {
        if (res && res?.isSuccess) {
          return res.data;
        }
      });
    return response;
  } catch (e: any) {
    return e.message;
  }
};
