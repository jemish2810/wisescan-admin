import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import * as s from "../../styles/common.style";
// import { Sidebar } from "../sidebar";
import Sidebar from "../sidebar";

import HomeIcon from "../../public/assets/home-icon.svg";

const Newsline = () => {
  return (
    <>
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
            <s.CommonForm className="common-form-block">
              <div className="form-group">
                <label>Add News Line</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="News Line Information"
                ></input>
              </div>
              <div className="form-group">
                <label>
                  Start Date <span>*</span>
                </label>
                <div className="form-group-day">
                  <div className="form-group-day-inner">
                    <select>
                      <option selected disabled>
                        Day
                      </option>
                      <option>1</option>
                    </select>
                  </div>
                  <div className="form-group-day-inner">
                    <select>
                      <option selected disabled>
                        Month
                      </option>
                      <option>1</option>
                    </select>
                  </div>
                  <div className="form-group-day-inner">
                    <select>
                      <option selected disabled>
                        Year
                      </option>
                      <option>1</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group full-width">
                <label>
                  News Description <span>*</span>
                </label>
                <textarea
                  name=""
                  id=""
                  className="form-control"
                  placeholder="Message here"
                ></textarea>
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
