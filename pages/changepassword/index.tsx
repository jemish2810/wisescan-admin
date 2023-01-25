import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import * as s from "../../styles/common.style";
// import { Sidebar } from "../sidebar";
import Sidebar from "../sidebar";

import HomeIcon from "../../public/assets/home-icon.svg";

const Changepassword = () => {
  return (
    <>
      <Sidebar />
      <s.CommonDashboardBlock>
        <div className="dashboard-block-inner">
          <div className="title-block">
            <h3>Change Password</h3>
          </div>
          <div className="change-password-block">
            <s.CommonForm className="common-form-block">
              <div className="form-group">
                <label>
                  Current Password <span>*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter current password here"
                ></input>
              </div>
              <div className="form-group">
                <label>
                  New Password <span>*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter new password here"
                ></input>
              </div>
              <div className="form-group">
                <label>
                  Re-Enter New Password <span>*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter re-enter new password here"
                ></input>
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
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </s.CommonDashboardBlock>
    </>
  );
};
export default Changepassword;
