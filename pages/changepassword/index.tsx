import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import * as s from "../../styles/common.style";
// import { Sidebar } from "../sidebar";
import Sidebar from "../sidebar";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { asyncChangePassword } from "@/services/auth/auth.service";
import { useEffect } from "react";
import { checkIsAuth } from "@/utils/globalFunctions";
import Router from "next/router";
import { readCookie } from "@/utils/cookieCreator";
import { localStorageKeys } from "@/utils/constants";

const addProjectValidationSchema = yup
  .object({
    cur_pass: yup
      .string()
      .trim("Enter valid old password")
      .required("Old password is required"),
    new_pass: yup
      .string()
      .trim("Enter valid new password")
      .required("New password is required"),
    re_pass: yup
      .string()
      .trim("Enter valid confirm password")
      .required("Confirm password is required")
      .oneOf(
        [yup.ref("new_pass")],
        "Confirm password must be same as new password"
      ),
  })
  .required()
  .strict();

const Changepassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addProjectValidationSchema),
  });
  console.log(errors);

  useEffect(() => {
    if (!checkIsAuth()) {
      Router.push("/");
      return;
    }
  }, []);

  const onSubmitChangePassword = async (data: any) => {
    const { cur_pass, new_pass, re_pass } = data;
    const usnme = readCookie(localStorageKeys.authKey);
    const response = await asyncChangePassword({
      cur_pass,
      new_pass,
      re_pass,
      usnme,
    });
    console.log("response :>> ", response);
  };

  return (
    <>
      <Sidebar />
      <s.CommonDashboardBlock>
        <div className="dashboard-block-inner">
          <div className="title-block">
            <h3>Change Password</h3>
          </div>
          <div className="change-password-block">
            <s.CommonForm
              className="common-form-block"
              onSubmit={handleSubmit(onSubmitChangePassword)}
            >
              <div className="form-group">
                <label>
                  Current Password <span>*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter current password here"
                  {...register("cur_pass", { required: true })}
                ></input>
                {errors?.cur_pass && (
                  <s.ErrorMessageBlock>
                    {errors?.cur_pass?.message}
                  </s.ErrorMessageBlock>
                )}
              </div>
              <div className="form-group">
                <label>
                  New Password <span>*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter new password here"
                  {...register("new_pass", { required: true })}
                ></input>
                {errors?.new_pass && (
                  <s.ErrorMessageBlock>
                    {errors?.new_pass?.message}
                  </s.ErrorMessageBlock>
                )}
              </div>
              <div className="form-group">
                <label>
                  Re-Enter New Password <span>*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter re-enter new password here"
                  {...register("re_pass", { required: true })}
                ></input>
                {errors?.re_pass && (
                  <s.ErrorMessageBlock>
                    {errors?.re_pass?.message}
                  </s.ErrorMessageBlock>
                )}
              </div>
              <div className="login-from-inner">
                <button type="submit" className="btn common-button">
                  Change Password
                </button>
              </div>
            </s.CommonForm>
          </div>
          <div className="note-block">
            <h4>Note:</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </s.CommonDashboardBlock>
    </>
  );
};
export default Changepassword;
