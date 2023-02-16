import { getYear } from "./globalFunctions";

export const errorString = {
  catchError: "SOMETHING_WENT_WRONG",
  authError: "INVALID_AUTH_CRED",
  userIsNotLoggedIn: "USER_IS_NOT_LOGGED_IN",
};

export const localStorageKeys = {
  authKey: "token",
  authAccountType: "accountType",
  userEmail: "user-email",
};
export const AUTH_COOKIE_EXPIRATION_TIME_IN_DAYS = 15;
export const PAGINATION_DEFAULT_LIMIT = 10; // Freelancers list, jobs list

export const DAYS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

export const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const YEARS = getYear();
