import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import * as s from "../../styles/common.style";
// import { Sidebar } from "../sidebar";
import Sidebar from "../sidebar";
import Select from "react-select";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import moment from "moment-mini";
import {
  asyncAddProject,
  asyncGetProject,
  asyncUpdateProject,
} from "@/services/project/project.service";
import { DAYS, DUMMY_CLIENTS, MONTHS, YEARS } from "@/utils/constants";
import { useEffect, useRef, useState } from "react";
import { asyncGetAllClients } from "@/services/client/client.service";
import Router from "next/router";
import { checkIsAuth } from "@/utils/globalFunctions";

const addProjectValidationSchema = yup.object({
  code: yup.string(),
  startDay: yup.number().required("Start date is required"),
  startMonth: yup.number().required("Start date is required"),
  startYear: yup.number().required("Start date is required"),
  endDay: yup.number().required("End date is required"),
  endMonth: yup.number().required("End date is required"),
  endYear: yup.number().required("End date is required"),
  p_name: yup.string().required("Project name is required"),
  dev: yup.string().required("Developer is required"),
  const: yup.string().required("Consultant is required"),
  cont: yup.string().required("Main Contractor  is required"),
  period: yup.string().required("Contractual Period is required"),
  geo: yup.string().required("Geo-technical is required"),
});

const AddProject = ({ editData }: any) => {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addProjectValidationSchema),
  });
  const dataFetchedRef = useRef(false);

  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [options, setOptions] = useState<any>([]);

  const handleChange = (selected: any) => {
    setSelectedOption(selected);
  };

  useEffect(() => {
    if (editData) {
      setValue("code", editData?.code);
      setValue("cont", editData?.cont);
      setValue("const", editData?.const);
      setValue("dev", editData?.dev);
      setValue("geo", editData?.geo);
      setValue("p_name", editData?.p_name);
      setValue("period", editData?.period);
    }
  }, [editData, setValue]);

  useEffect(() => {
    if (!checkIsAuth()) {
      Router.push("/");
      return;
    }
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchClients();
  }, []);

  const fetchClients = async () => {
    const response = await asyncGetAllClients();
    if (response && response.data) {
      const newOptions = response.data.map((item: any) => {
        return { value: item.c_name, label: item.c_name };
      });
      setOptions(newOptions);
    }
  };

  console.log("errors", errors);
  const onSubmitProduct = async (data: any) => {
    const {
      code,
      startDay,
      startMonth,
      startYear,
      endDay,
      endMonth,
      endYear,
      p_name,
      dev,
      cont,
      period,
      geo,
    } = data;
    if (!selectedOption) {
      setError("clients", {
        message: "Please select at least one client",
      });
      return;
    }
    const a_cnames = selectedOption?.map((item: any) => {
      return item.c_name;
    });
    console.log("selectedOption :>> ", selectedOption);
    let start_date = startDay + "-" + startMonth + "-" + startYear;
    let end_date = endDay + "-" + endMonth + "-" + endYear;
    console.log("start_date :>> ", start_date);
    const isStartDateValid = moment(start_date, "DD-M-YYYY").isValid();
    const isEndDateValid = moment(end_date, "DD-M-YYYY").isValid();
    console.log("isStartDateValid :>> ", isStartDateValid);
    if (!isStartDateValid) {
      setError("invalidStartDate", {
        message: "Please enter valid start date",
      });
      return;
    }
    if (!isEndDateValid) {
      setError("invalidEndDate", {
        message: "Please enter valid end date",
      });
      return;
    }
    if (editData) {
      const response = asyncUpdateProject({
        code,
        p_name,
        start_date,
        end_date,
        dev,
        cont,
        period,
        geo,
        a_cnames,
      });
    } else {
      const response = asyncAddProject({
        code,
        p_name,
        start_date,
        end_date,
        dev,
        cont,
        period,
        geo,
        a_cnames,
      });
      console.log("response :>> ", response);
    }
  };
  return (
    <>
      <Sidebar />
      <s.CommonDashboardBlock>
        <div className="dashboard-block-inner">
          <div className="title-block flex-block-inner">
            <h3>Add Projects</h3>
            <p>
              <span>* </span> Denotes compulsory fields
            </p>
          </div>
          <div className="change-password-block">
            <s.CommonForm
              onSubmit={handleSubmit(onSubmitProduct)}
              className="common-form-block-main"
            >
              <div className="common-form-block-inner">
                <div className="form-group">
                  <label>Code</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter code"
                    {...register("code")}
                  ></input>
                </div>
                <div className="form-group">
                  <label>
                    Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    {...register("p_name", { required: true })}
                  ></input>
                  {errors?.p_name && (
                    <s.ErrorMessageBlock>
                      {errors?.p_name?.message}
                    </s.ErrorMessageBlock>
                  )}
                </div>
                <div className="form-group">
                  <label>
                    Owner/Developer <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Owner/Developer"
                    {...register("dev", { required: true })}
                  ></input>
                  {errors?.dev && (
                    <s.ErrorMessageBlock>
                      {errors?.dev?.message}
                    </s.ErrorMessageBlock>
                  )}
                </div>
                <div className="form-group">
                  <label>
                    Consultant <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Consultant"
                    {...register("const", { required: true })}
                  ></input>
                  {errors?.const && (
                    <s.ErrorMessageBlock>
                      {errors?.const?.message}
                    </s.ErrorMessageBlock>
                  )}
                </div>
              </div>
              <div className="common-form-block-inner">
                <div className="form-group">
                  <label className="d-flex justify-content">
                    Client(s) <span> (Ctrl-click to select multiple)</span>
                  </label>
                  <Select
                    className="basic-multi-select"
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                    isMulti
                  />
                  {errors?.clients && (
                    <s.ErrorMessageBlock>
                      {errors?.clients?.message}
                    </s.ErrorMessageBlock>
                  )}
                </div>
              </div>
              <div className="common-form-block-inner">
                <div className="form-group">
                  <label>
                    Main Contractor <span> *</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter code"
                    {...register("cont", { required: true })}
                  ></input>
                  {errors?.cont && (
                    <s.ErrorMessageBlock>
                      {errors?.cont?.message}
                    </s.ErrorMessageBlock>
                  )}
                </div>
              </div>
              <div className="common-form-block-inner">
                <div className="form-group">
                  <label>
                    Geotechnical <span> *</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Geotechnical"
                    {...register("geo", { required: true })}
                  ></input>
                  {errors?.geo && (
                    <s.ErrorMessageBlock>
                      {errors?.geo?.message}
                    </s.ErrorMessageBlock>
                  )}
                </div>
              </div>
              <div className="common-form-block-inner">
                <div className="form-group">
                  <label>
                    Contractual Period <span> *</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Contractual Period "
                    {...register("period", { required: true })}
                  ></input>
                  {errors?.period && (
                    <s.ErrorMessageBlock>
                      {errors?.period?.message}
                    </s.ErrorMessageBlock>
                  )}
                </div>
              </div>
              <div className="common-form-block-inner">
                <div className="form-group">
                  <label>
                    Start Date <span> *</span>
                  </label>
                  <div className="form-group-day">
                    <div className="form-group-day-inner">
                      <select {...register("startDay", { required: true })}>
                        <option selected disabled>
                          Day
                        </option>
                        {DAYS.map((value) => (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group-day-inner">
                      <select {...register("startMonth", { required: true })}>
                        <option selected disabled>
                          Month
                        </option>
                        {MONTHS.map((value) => (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group-day-inner">
                      <select {...register("startYear", { required: true })}>
                        <option selected disabled>
                          Year
                        </option>
                        {YEARS.map((value) => (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {(errors?.startDay ||
                    errors?.startMonth ||
                    errors?.startYear ||
                    errors?.invalidStartDate) && (
                    <s.ErrorMessageBlock>
                      Please enter valid start date
                    </s.ErrorMessageBlock>
                  )}
                </div>
              </div>
              <div className="common-form-block-inner">
                <div className="form-group">
                  <label>
                    End Date <span> *</span>
                  </label>
                  <div className="form-group-day">
                    <div className="form-group-day-inner">
                      <select {...register("endDay", { required: true })}>
                        <option selected disabled>
                          Day
                        </option>
                        {DAYS.map((value) => (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group-day-inner">
                      <select {...register("endMonth", { required: true })}>
                        <option selected disabled>
                          Month
                        </option>
                        {MONTHS.map((value) => (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group-day-inner">
                      <select {...register("endYear", { required: true })}>
                        <option selected disabled>
                          Year
                        </option>
                        {YEARS.map((value) => (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {(errors?.endDay ||
                    errors?.endMonth ||
                    errors?.endYear ||
                    errors?.invalidEndDate) && (
                    <s.ErrorMessageBlock>
                      Please enter valid end date
                    </s.ErrorMessageBlock>
                  )}
                </div>
              </div>
              <div className="common-form-block-inner">
                <div className="last-btn">
                  <button type="submit" className="btn common-button-yellow">
                    Add New Project
                  </button>
                </div>
              </div>
            </s.CommonForm>
          </div>
        </div>
      </s.CommonDashboardBlock>
    </>
  );
};
export default AddProject;

AddProject.getInitialProps = async ({ query }: any) => {
  const { code } = query;
  let editData = null;
  if (code) {
    editData = await asyncGetProject({ code });
  }
  return { editData };
};
