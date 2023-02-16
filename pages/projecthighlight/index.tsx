import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import * as s from "../../styles/common.style";
// import { Sidebar } from "../sidebar";
import Sidebar from "../sidebar";

import HomeIcon from "../../public/assets/home-icon.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import moment from "moment-mini";
import { asyncAddProjectHighlights } from "@/services/project/project.service";

const addProjectHighlightValidationSchema = yup.object({
  p_name: yup.string().required("Project name is required"),
  rank: yup.string().required("Rank is required"),
  desc: yup.string().required("Description is required"),
});

const Projecthighlight = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addProjectHighlightValidationSchema),
  });
  console.log(errors);

  const onSubmitProjectHighlight = async (data: any) => {
    const { p_name, rank, desc } = data;
    const response = asyncAddProjectHighlights({ p_name, desc, rank });
  };
  return (
    <>
      <Sidebar />
      <s.CommonDashboardBlock>
        <div className="dashboard-block-inner">
          <div className="title-block flex-block-inner">
            <h3>Add New Project Highlight</h3>
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
                  Project Name <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
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
                  Rank Priority <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Rank Priority"
                  {...register("rank", { required: true })}
                ></input>
                {errors?.rank && (
                  <s.ErrorMessageBlock>
                    {errors?.rank?.message}
                  </s.ErrorMessageBlock>
                )}
              </div>
              <div className="form-group">
                <label>
                  Project Write Up <span>*</span>
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
              <div className="form-group">
                <label>
                  Photo <span>*</span>
                </label>
                <input type="file"></input>
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
export default Projecthighlight;
