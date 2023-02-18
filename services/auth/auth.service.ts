import Api from "@/services/Api";
import { errorAlert } from "@/utils/alerts";
import { localStorageKeys } from "@/utils/constants";
import { createCookie, eraseCookie } from "@/utils/cookieCreator";
import Router from "next/router";

const api = new Api();

export const asyncUserLogin = async (payload: any) => {
  try {
    const { usnme, pwd } = payload;
    let params = { usnme, pwd };
    createCookie(localStorageKeys.authKey, usnme, 0);
    const response = await api
      .post("/signIn", params)
      .then(async (res: any) => {
        if (res && res?.isSuccess) {
          Router.push(`/`);
        }
        return res;
      });
    return response;
  } catch (e: any) {
    return e.message;
  }
};

export const asyncLogout = async () => {
  try {
    eraseCookie(localStorageKeys.authKey);
    const response = await api.post("/signOut").then(async (res: any) => {
      if (res && res?.isSuccess) {
        localStorage.clear();
        Router.push(`/login`);
        return res.data;
      }
      return res;
    });
    return response;
  } catch (e: any) {
    return e.message;
  }
};

export const asyncChangePassword = async (payload: any) => {
  try {
    const { cur_pass, new_pass, re_pass, usnme } = payload;
    let params = { usnme, cur_pass, new_pass, re_pass };
    const response = await api
      .put("/changePwd", params)
      .then(async (res: any) => {
        if (res && res?.isSuccess) {
          return res;
        }
      });
    return response;
  } catch (e: any) {
    errorAlert(e.message);
    return e.message;
  }
};
