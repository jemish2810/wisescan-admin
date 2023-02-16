import { APIResponse } from "@/types/axios";
import { errorString } from "@/utils/constants";
import instanceCreator from "@/services/Api/instanceCreator";

export default class Api {
  instance: any;

  constructor(baseUrl = null) {
    this.instance = instanceCreator(baseUrl);

    console.log(this.instance);
  }

  get(url: string, conf = {}, isErrorHandle = true, isSuccessHandle = true) {
    return this.instance
      .get(url, conf)
      .then((response: APIResponse) => {
        if (response.status === 200) {
          return Promise.resolve(
            Api.getSuccessData(response.data, isSuccessHandle)
          );
        }
        if (response.status === 401) {
          response.message = "Logout";
          return Promise.resolve(Api.getErrorData(response, isErrorHandle));
        }

        return Promise.resolve(Api.getErrorData(response, isErrorHandle));
      })
      .catch((error: any) => {
        return Promise.reject(
          Api.getErrorData(
            {
              message: error.message,
              code: error.response.data.errorCode || error.code,
            },
            isErrorHandle
          )
        );
      });
  }

  delete(
    url: string,
    data = {},
    conf = {},
    isErrorHandle = true,
    isSuccessHandle = true
  ) {
    return this.instance
      .delete(url, conf)
      .then((response: APIResponse) => {
        if (response.status === 200) {
          return Promise.resolve(
            Api.getSuccessData(response.data, isSuccessHandle)
          );
        }
        if (response.status === 401) {
          response.message = "Logout";
          return Promise.resolve(Api.getErrorData(response, isErrorHandle));
        }

        return Promise.resolve(Api.getErrorData(response, isErrorHandle));
      })
      .catch((error: any) => {
        return Promise.reject(
          Api.getErrorData(
            {
              message: error.message,
              code: error.response.data.errorCode || error.code,
            },
            isErrorHandle
          )
        );
      });
  }

  head(url: string, conf = {}) {
    return this.instance
      .head(url, conf)
      .then((response: APIResponse) => Promise.resolve(response))
      .catch((error: any) => Promise.reject(error));
  }

  options(url: string, conf = {}) {
    return this.instance
      .options(url, conf)
      .then((response: APIResponse) => Promise.resolve(response))
      .catch((error: any) => Promise.reject(error));
  }

  post(
    url: string,
    data = {},
    conf = {},
    isErrorHandle = true,
    isSuccessHandle = true
  ) {
    return this.instance
      .post(url, data, conf)
      .then((response: APIResponse) => {
        if (response.status === 200) {
          return Promise.resolve(
            Api.getSuccessData(response.data, isSuccessHandle)
          );
        }
        if (response.status === 401) {
          response.message = "Logout";
          return Promise.resolve(Api.getErrorData(response, isErrorHandle));
        }

        return Promise.resolve(Api.getErrorData(response, isErrorHandle));
      })
      .catch((error: any) => {
        return Promise.reject(
          Api.getErrorData(
            {
              message: error.message,
              code: error.response.data.errorCode || error.code,
            },
            isErrorHandle
          )
        );
      });
  }

  put(
    url: string,
    data = {},
    conf = {},
    isErrorHandle = true,
    isSuccessHandle = true
  ) {
    return this.instance
      .put(url, data, conf)
      .then((response: APIResponse) => {
        if (response.status === 200) {
          return Promise.resolve(
            Api.getSuccessData(response.data, isSuccessHandle)
          );
        }
        if (response.status === 401) {
          response.message = "Logout";
          return Promise.resolve(Api.getErrorData(response, isErrorHandle));
        }

        return Promise.resolve(Api.getErrorData(response, isErrorHandle));
      })
      .catch((error: any) => {
        return Promise.reject(
          Api.getErrorData(
            {
              message: error.message,
              code: error.response.data.errorCode || error.code,
            },
            isErrorHandle
          )
        );
      });
  }

  patch(
    url: string,
    data = {},
    conf = {},
    isErrorHandle = true,
    isSuccessHandle = true
  ) {
    return this.instance
      .patch(url, data, conf)
      .then((response: APIResponse) => {
        if (response.status === 200) {
          return Promise.resolve(
            Api.getSuccessData(response.data, isSuccessHandle)
          );
        }
        if (response.status === 401) {
          response.message = "Logout";
          return Promise.resolve(Api.getErrorData(response, isErrorHandle));
        }

        return Promise.resolve(Api.getErrorData(response, isErrorHandle));
      })
      .catch((error: any) => {
        return Promise.reject(
          Api.getErrorData(
            {
              message: error.message,
              code: error.response.data.errorCode || error.code,
            },
            isErrorHandle
          )
        );
      });
  }

  static getErrorData(data: any, isHandle = false) {
    if (isHandle) {
      if (data.code) {
        // errorAlert("error", data?.code);
        // errorAlert("error", data.code || errorString.catchError);
      }
    }
    return {
      isSuccess: false,
      isStore: false,
      message: data.code || errorString.catchError,
    };
  }

  static getSuccessData(data: any, isHandle: boolean) {
    if (isHandle) {
      // errorAlert("success", data?.successCode || errorString.catchError);
    }
    return {
      isSuccess: true,
      data: data || null,
    };
  }
}
