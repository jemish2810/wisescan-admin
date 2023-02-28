import * as s from "../../styles/common.style";
import Sidebar from "../../src/components/sidebar";
import Head from "next/head";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  asyncAddProjectHighlights,
  asyncGetProjectHighlight,
  asyncUpdateProjectHighlight,
} from "@/services/project/project.service";
import Router, { useRouter } from "next/router";
import { errorAlert, successAlert } from "@/utils/alerts";
import { useEffect, useState } from "react";
import { checkIsAuth } from "@/utils/globalFunctions";
import { errorString } from "@/utils/constants";

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
    setValue,
  } = useForm({
    resolver: yupResolver(addProjectHighlightValidationSchema),
  });

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [editData, setEditData] = useState<any>(null);

  useEffect(() => {
    if (!checkIsAuth()) {
      Router.push("/");
      return;
    }
  }, []);

  useEffect(() => {
    if (router?.query && router?.query?.phid) {
      fetchProject(router?.query?.phid);
    }
  }, [router]);

  const fetchProject = async (phid: any) => {
    if (phid) {
      setIsLoading(true);
      let response = await asyncGetProjectHighlight({ phid });
      setIsLoading(false);
      if (response && response.data && response?.data?.length > 0) {
        setEditData(response?.data?.[0]);
      } else {
        Router.push("projecthighlightmanagement");
      }
    }
  };

  useEffect(() => {
    if (editData) {
      setValue("p_name", editData?.p_name);
      setValue("rank", editData?.rank);
      setValue("desc", editData?.desc);
      setValue("phid", editData?.phid);
    }
  }, [editData, setValue]);

  //Submit method
  const onSubmitProjectHighlight = async (data: any) => {
    const { p_name, rank, desc, picture, phid } = data;

    const params = {
      p_name,
      desc,
      rank,
      pic_url: picture?.[0]?.name,
      phid,
    };

    const response = editData
      ? await asyncUpdateProjectHighlight(params)
      : await asyncAddProjectHighlights(params);

    if (response) {
      if (response?.data?.[0]?.success || response?.success) {
        successAlert(
          `Project highlight ${editData ? "updated" : "added"} successfully`
        );
        Router.back();
      } else {
        errorAlert(response || errorString.catchError);
      }
    }
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
            <h3>
              {editData
                ? `Update Project Highlight`
                : `Add New Project Highlight`}
            </h3>
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
export default ProjectHighlight;
