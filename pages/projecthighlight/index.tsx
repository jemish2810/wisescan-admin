import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import * as s from "../../styles/common.style";
// import { Sidebar } from "../sidebar";
import Sidebar from "../sidebar";

import HomeIcon from "../../public/assets/home-icon.svg";

const Projecthighlight = () => {
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
            <s.CommonForm className="common-form-block">
              <div className="form-group">
                <label>
                  Project Name <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                ></input>
              </div>
              <div className="form-group">
                <label>
                  Rank Priority <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Rank Priority"
                ></input>
              </div>
              <div className="form-group">
                <label>
                  Project Write Up <span>*</span>
                </label>
                <textarea
                  name=""
                  id=""
                  className="form-control"
                  placeholder="Message here"
                ></textarea>
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
