import * as s from "../../styles/common.style";
import Sidebar from "../sidebar";
import Head from "next/head";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { asyncAddProjectHighlights } from "@/services/project/project.service";
import Router from "next/router";
import { errorAlert, successAlert } from "@/utils/alerts";
import { useEffect } from "react";
import { checkIsAuth } from "@/utils/globalFunctions";

const addProjectHighlightValidationSchema = yup.object().shape({
  p_name: yup.string().required("Project name is required"),
  rank: yup.string().required("Rank is required"),
  desc: yup.string().required("Description is required"),
  picture: yup
    .mixed()
    .test("required", "You need to provide a file", (value: any) => {
      return value && value.length;
    }),
});

const ProjectHighlight = () => {
  //hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addProjectHighlightValidationSchema),
  });

  useEffect(() => {
    if (!checkIsAuth()) {
      Router.push("/");
      return;
    }
  }, []);

  //Submit method
  const onSubmitProjectHighlight = async (data: any) => {
    const { p_name, rank, desc, picture } = data;
    const response = await asyncAddProjectHighlights({
      p_name,
      desc,
      rank,
      pic_url: picture?.[0]?.name,
    });
    if (response?.success) {
      successAlert("Project highlight added successfully");
      Router.back();
      return;
    }

    errorAlert(response);
  };

  //render method
  return (
    <>
      <Head>
        <title>WiseScan | Add Project Highlight</title>
      </Head>
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
                <input
                  type="file"
                  {...register("picture")}
                  // onChange={onChangeFile}
                />
                {errors?.picture && (
                  <s.ErrorMessageBlock>
                    {errors.picture.message}
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
export default ProjectHighlight;
