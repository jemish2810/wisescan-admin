const apiPath = {
  v1: "/",
};

const getEnvironment = () => {
  switch (process.env.NEXT_PUBLIC_ENV_MODE) {
    case "production":
      return "production";
    case "development":
      return "development";
    default:
      return "local";
  }
};

const getLiveUrl = () => {
  switch (process.env.NEXT_PUBLIC_ENV_MODE) {
    case "production":
      return "http://localhost:3000";
    case "development":
      return "http://localhost:3000";
    default:
      return "http://localhost:3000";
  }
};

const getBaseUrl = () => {
  switch (process.env.NEXT_PUBLIC_ENV_MODE) {
    case "production":
      return `http://188.166.199.103:4000`;
    case "development":
      return `http://188.166.199.103:4000`;
    default:
      return `http://188.166.199.103:4000`;
  }
};

const Url = {
  baseUrl: getBaseUrl(),
  liveUrl: getLiveUrl(),
};

const appConfig = {
  BASE_URL: `${Url.baseUrl}${apiPath.v1}`,
  environment: getEnvironment(),
  getBaseUrl: getBaseUrl(),
};

export default appConfig;
