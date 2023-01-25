import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import * as s from "../../styles/common.style";
// import { Sidebar } from "../sidebar";
import Sidebar from "../sidebar";

const Addproject = () => {
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
            <s.CommonForm className="common-form-block-main">
              <div className="common-form-block-inner">
                <div className="form-group">
                  <label>Code</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter code"
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
                  ></input>
                </div>
                <div className="form-group">
                  <label>
                    Owner/Developer <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Owner/Developer"
                  ></input>
                </div>
                <div className="form-group">
                  <label>
                    Consultant <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Consultant"
                  ></input>
                </div>
              </div>
              <div className="common-form-block-inner">
                <div className="form-group">
                  <label className="d-flex justify-content">
                    Client(s) <span> (Ctrl-click to select multiple)</span>
                  </label>
                  <textarea
                    name=""
                    id=""
                    className="form-control"
                    placeholder="3i - 3i
Aik Leong plumbing Construction Pte Ltd - Thazin Wint Nwe
Ban Chon Corportation & Trading Pte Ltd - Foo Kin Loong
Bureau Veritas - Tin Nandar Tun
Bureau Veritas - Zaw Lynn Ko
Continental Engineering - Gurudware - Prerit Sharma
ED ZUBLIN AG - David SCHREINER
GeoApplication Engineers Pte Ltd - Zhang Qing Hua
GS Engineering & Construction Co. - Ji Woo Seng
Continental Engineering - Gurudware - Prerit Sharma"
                  ></textarea>
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
                  ></input>
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
                  ></input>
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
                  ></input>
                </div>
              </div>
              <div className="common-form-block-inner">
                <div className="form-group">
                  <label>
                    Start Date <span> *</span>
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
              </div>
              <div className="common-form-block-inner">
                <div className="form-group">
                  <label>
                    End Date <span> *</span>
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
export default Addproject;
