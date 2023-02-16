import Api from "@/services/Api";
import { localStorageKeys } from "@/utils/constants";
import { createCookie, eraseCookie } from "@/utils/cookieCreator";
import Router from "next/router";

const api = new Api();

export const asyncUserLogin = async (payload: any) => {
  try {
    const { usnme, pwd } = payload;
    let params = { usnme, pwd };

    const response = await api
      .post("/signIn", params)
      .then(async (res: any) => {
        if (res && res?.isSuccess) {
          createCookie(
            localStorageKeys.authKey,
            res.data?.tokens?.access?.token || "",
            0
          );
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
    const response = await api.post("/signOut").then(async (res: any) => {
      if (res && res?.isSuccess) {
        localStorage.clear();
        eraseCookie(localStorageKeys.authKey);
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
      .post("/changePwd", params)
      .then(async (res: any) => {
        if (res && res?.isSuccess) {
          console.log(res);
        }
        return res;
      });
    return response;
  } catch (e: any) {
    return e.message;
  }
};
