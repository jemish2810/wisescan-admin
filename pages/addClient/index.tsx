import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import * as s from "../../styles/common.style";
// import { Sidebar } from "../sidebar";
import Sidebar from "../sidebar";
import Router, { useRouter } from "next/router";

import HomeIcon from "../../public/assets/home-icon.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  asyncAddClient,
  asyncGetClient,
  asyncUpdateClient,
} from "@/services/client/client.service";
import { useEffect, useState } from "react";
import { checkIsAuth } from "@/utils/globalFunctions";

const addClientValidationSchema = yup.object({
  org_nam: yup.string().required("Organization name is required"),
  sal: yup.string().required("Salutation is required"),
  c_name: yup.string().required("Name is required"),
  email: yup.string().required("Name is required"),
  usrnme: yup.string().required("Username is required"),
  phone: yup.string().required("Contact No is required"),
  pwd: yup.string().required("Password is required"),
  status: yup.string().required("Status is required"),
  // pdf_flag: yup.bool().oneOf([true], "Checkbox selection is required"),
});

const AddClient = ({ editData }: any) => {
  const router = useRouter();
  console.log('router: ', router);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addClientValidationSchema),
  });
  console.log("editData :>> ", editData);

  useEffect(() => {
    if (!checkIsAuth()) {
      Router.push("/");
      return;
    }
  }, []);

  useEffect(() => {
    if (editData) {
      setValue("org_nam", editData?.org_name);
      setValue("sal", editData?.sal);
      setValue("c_name", editData?.c_name);
      setValue("email", editData?.email);
      setValue("usrnme", editData?.usrnme);
      setValue("pwd", editData?.pwd);
      setValue("phone", editData?.phone);
      setValue("status", editData?.status);
      setValue("pdf_flag", editData?.pdf_flag);
      setValue("xls_flag", editData?.xls_flag);
      setValue("gdb_flag", editData?.gdb_flag);
      setValue("is_admin", editData?.is_admin);
    }
  }, [editData, setValue]);
  console.log("errors :>> ", errors);
  const onSubmitProjectHighlight = async (data: any) => {
    console.log("data :>> ", data);
    if (editData) {
      const response = await asyncUpdateClient({ ...data });
      if (response?.success) Router.back();
      return;
    }
    const response = await asyncAddClient({ ...data });
    if (response?.success) Router.back();
  };
  return (
    <>
      <Head>
        {router.query.username ? <title>WiseScan | Edit Client</title>  : <title>WiseScan | Add New Client</title>}
      </Head>
      <Sidebar />
      <s.CommonDashboardBlock>
        <div className="dashboard-block-inner">
          <div className="title-block flex-block-inner">
            <h3>{router.query.username ? "Edit Client" : "Add Client" }</h3>
            <p>
              <span>* </span>Denotes compulsory fields
            </p>
          </div>
          <div className="change-password-block">
            <s.CommonForm
              className="common-form-block"
              onSubmit={handleSubmit(onSubmitProjectHighlight)}
            >
              <div className="form-group">
                <label>
                  Organization <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Organization"
                  {...register("org_nam", { required: true })}
                ></input>
                {errors?.org_nam && (
                  <s.ErrorMessageBlock>
                    {errors?.org_nam?.message}
                  </s.ErrorMessageBlock>
                )}
              </div>
              <div className="form-group">
                <label>
                  Salutation | Name <span> *</span>
                </label>
                <div className="form-group-day">
                  <div className="form-group-day-inner">
                    <select {...register("sal", { required: true })}>
                      <option selected disabled>
                        Select
                      </option>
                      <option>123</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    {...register("c_name", { required: true })}
                  ></input>
                </div>
                {errors?.c_name && (
                  <s.ErrorMessageBlock>
                    {errors?.c_name?.message}
                  </s.ErrorMessageBlock>
                )}
                {errors?.sal && (
                  <s.ErrorMessageBlock>
                    {errors?.sal?.message}
                  </s.ErrorMessageBlock>
                )}
              </div>
              <div className="form-group">
                <label>
                  Email <span>*</span>
                </label>
                <input
                  id=""
                  className="form-control"
                  placeholder="Enter Email"
                  {...register("email", { required: true })}
                ></input>
                {errors?.email && (
                  <s.ErrorMessageBlock>
                    {errors?.email?.message}
                  </s.ErrorMessageBlock>
                )}
              </div>
              <div className="form-group">
                <label>
                  Contact No <span>*</span>
                </label>
                <input
                  id=""
                  className="form-control"
                  placeholder="Enter contact no"
                  {...register("phone", { required: true })}
                ></input>
                {errors?.phone && (
                  <s.ErrorMessageBlock>
                    {errors?.phone?.message}
                  </s.ErrorMessageBlock>
                )}
              </div>
              <div className="form-group">
                <label>
                  Username <span>*</span>
                </label>
                <input
                  id=""
                  className="form-control"
                  placeholder="Enter username"
                  {...register("usrnme", { required: true })}
                ></input>
                {errors?.usrnme && (
                  <s.ErrorMessageBlock>
                    {errors?.usrnme?.message}
                  </s.ErrorMessageBlock>
                )}
              </div>
              <div className="form-group">
                <label>
                  Password <span>*</span>
                </label>
                <input
                  id=""
                  className="form-control"
                  placeholder="Enter password"
                  {...register("pwd", { required: true })}
                ></input>
                {errors?.pwd && (
                  <s.ErrorMessageBlock>
                    {errors?.pwd?.message}
                  </s.ErrorMessageBlock>
                )}
              </div>
              <div className="form-group">
                <label className="pb-14">
                  File Type <span>*</span>
                </label>
                <div className="checkbox-control-main">
                  <div className="custom-checkbox">
                    <input
                      id="pdf_flag"
                      type="checkbox"
                      {...register("pdf_flag")}
                    />
                    <label htmlFor="pdf_flag">PDF</label>
                  </div>
                  <div className="custom-checkbox">
                    <input
                      id="xls_flag"
                      type="checkbox"
                      {...register("xls_flag")}
                    />
                    <label htmlFor="xls_flag">Excel(XLS)</label>
                  </div>
                  <div className="custom-checkbox">
                    <input
                      type="checkbox"
                      {...register("gdb_flag")}
                      id="gdb_flag"
                    />
                    <label htmlFor="gdb_flag">Excel(GDB)</label>
                  </div>
                  <div className="custom-checkbox">
                    <input type="checkbox" {...register("all")} id="all" />
                    <label htmlFor="all">All</label>
                  </div>
                </div>
              </div>
              <div className="form-group permission-form-group">
                <div className="checkbox-control-main">
                  <label className="pb-14">Permission</label>
                  <div className="custom-checkbox">
                    <input
                      type="checkbox"
                      {...register("is_admin")}
                      id="is_admin"
                    />
                    <label htmlFor="is_admin">Administrator</label>
                  </div>
                </div>
                <div className="check-block-permission">
                  <label>
                    Status <span> *</span>
                  </label>
                  <div className="form-group-day">
                    <div className="form-group-day-inner">
                      <select {...register("status", { required: true })}>
                        <option selected disabled>
                          Select
                        </option>
                        <option value="active">Active</option>
                        <option value="pending">Pending</option>
                        <option value="inActive">In Active</option>
                      </select>
                    </div>
                  </div>
                  {errors?.status && (
                    <s.ErrorMessageBlock>
                      {errors?.status?.message}
                    </s.ErrorMessageBlock>
                  )}
                </div>
              </div>
              <div className="last-btn">
                <button type="submit" className="btn common-button-yellow">
                  {editData ? `Update` : `Add`}
                </button>
              </div>
            </s.CommonForm>
          </div>
        </div>
      </s.CommonDashboardBlock>
    </>
  );
};
export default AddClient;

AddClient.getInitialProps = async ({ query }: any) => {
  const { username } = query;
  let editData = null;
  if (username) {
    editData = await asyncGetClient({ usrnme: username });
  }
  return { editData };
};
