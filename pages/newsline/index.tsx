import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import * as s from "../../styles/common.style";
// import { Sidebar } from "../sidebar";
import Sidebar from "../../src/components/sidebar";
import moment from "moment-mini";

import HomeIcon from "../../public/assets/home-icon.svg";
import { DAYS, MONTHS, YEARS } from "@/utils/constants";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { asyncAddClient } from "@/services/client/client.service";
import { asyncAddNews } from "@/services/news/news.service";
import { useEffect } from "react";
import { checkIsAuth } from "@/utils/globalFunctions";
import Router from "next/router";

const addNewsLineValidationSchema = yup.object({
  news: yup.string().required("News is required"),
  day: yup.number().required("Day is required"),
  month: yup.number().required("Month is required"),
  year: yup.number().required("Year is required"),
  desc: yup.string().required("Description is required"),
});

const Newsline = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addNewsLineValidationSchema),
  });

  useEffect(() => {
    if (!checkIsAuth()) {
      Router.push("/");
      return;
    }
  }, []);

  const onSubmitNewsLine = async (data: any) => {
    const { news, day, month, year, desc } = data;
    let start_date = day + "-" + month + "-" + year;
    const isDateValid = moment(start_date, "DD-M-YYYY").isValid();
    if (!isDateValid) {
      setError("invalidStartDate", {
        message: "Please enter valid start date",
      });
      return;
    } 
    const response = await asyncAddNews({ news, description: desc, start_date });
    if (response && response?.success) {
      Router.back();
    }
  };
  return (
    <>
      <Head>
        <title>WiseScan | Add NewsLine</title>
      </Head>
      <Sidebar />
      <s.CommonDashboardBlock>
        <div className="dashboard-block-inner">
          <div className="title-block flex-block-inner">
            <h3>News Line Management</h3>
            <p>
              <span>* </span>Denotes compulsory fields
            </p>
          </div>
          <div className="change-password-block">
            <s.CommonForm
              className="common-form-block"
              onSubmit={handleSubmit(onSubmitNewsLine)}
            >
              <div className="form-group">
                <label>Add News Line</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="News Line Information"
                  {...register("news", { required: true })}
                ></input>
                {errors?.news && (
                  <s.ErrorMessageBlock>
                    {errors?.news?.message}
                  </s.ErrorMessageBlock>
                )}
              </div>
              <div className="form-group">
                <label>
                  Start Date <span>*</span>
                </label>
                <div className="form-group-day">
                  <div className="form-group-day-inner">
                    <select {...register("day", { required: true })}>
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
                    <select {...register("month", { required: true })}>
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
                    <select {...register("year", { required: true })}>
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
              <div className="form-group full-width">
                <label>
                  News Description <span>*</span>
                </label>
                <textarea
                  id=""
                  className="form-control"
                  placeholder="Message here"
                  {...register("desc", { required: true })}
                ></textarea>
                {errors?.desc && (
                  <s.ErrorMessageBlock>
                    {errors?.desc?.message}
                  </s.ErrorMessageBlock>
                )}
              </div>
              <div className="last-btn">
                <button type="submit" className="btn common-button-yellow">
                  Add
                </button>
              </div>
            </s.CommonForm>
          </div>
        </div>
      </s.CommonDashboardBlock>
    </>
  );
};
export default Newsline;
