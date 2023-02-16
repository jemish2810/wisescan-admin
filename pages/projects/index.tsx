import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import * as s from "../../styles/common.style";
// import { Sidebar } from "../sidebar";
import Sidebar from "../sidebar";
import { useRouter } from "next/router";

const Project = () => {
  const router = useRouter();
  return (
    <>
      <Sidebar />
      <s.CommonDashboardBlock>
        <div className="dashboard-block-inner">
          <div className="title-block flex-block-inner">
            <h3>Project Management</h3>
            <button
              type="submit"
              className="btn common-button-yellow"
              onClick={() => router.push("/addproject")}
            >
              Add Project
            </button>
          </div>
          <div className="table-block-common">
            <div className="title-block-list">
              <p>Client, Listing 1 to 15 of 27 [Page 1 of 2]</p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search project by name"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                ></input>
                <div className="input-group-append">
                  <button className="btn " type="button" id="button-addon2">
                    <img src="assets/search-icon.svg" alt="people-icon"></img>
                  </button>
                </div>
              </div>
            </div>
            <s.TableCommon className="table-project">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Code</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>20-STOREY MEDICAL BUILDING AT VICTORIA STREET - EB</td>
                    <td>
                      <span className="highlight">8242J</span>
                    </td>
                    <td>
                      <div className="action-block">
                        <Link href="#">
                          <img src="assets/edit-icon.svg" alt="edit-icon"></img>
                        </Link>
                        <Link href="#" className="delete-icon">
                          <img
                            src="assets/trash-icon.svg"
                            alt="trash-icon"
                          ></img>
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>20-STOREY MEDICAL BUILDING AT VICTORIA STREET - EB</td>
                    <td>
                      <span className="highlight">8242J</span>
                    </td>
                    <td>
                      <div className="action-block">
                        <Link href="#">
                          <img src="assets/edit-icon.svg" alt="edit-icon"></img>
                        </Link>
                        <Link href="#" className="delete-icon">
                          <img
                            src="assets/trash-icon.svg"
                            alt="trash-icon"
                          ></img>
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>20-STOREY MEDICAL BUILDING AT VICTORIA STREET - EB</td>
                    <td>
                      <span className="highlight">8242J</span>
                    </td>
                    <td>
                      <div className="action-block">
                        <Link href="#">
                          <img src="assets/edit-icon.svg" alt="edit-icon"></img>
                        </Link>
                        <Link href="#" className="delete-icon">
                          <img
                            src="assets/trash-icon.svg"
                            alt="trash-icon"
                          ></img>
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>20-STOREY MEDICAL BUILDING AT VICTORIA STREET - EB</td>
                    <td>
                      <span className="highlight">8242J</span>
                    </td>
                    <td>
                      <div className="action-block">
                        <Link href="#">
                          <img src="assets/edit-icon.svg" alt="edit-icon"></img>
                        </Link>
                        <Link href="#" className="delete-icon">
                          <img
                            src="assets/trash-icon.svg"
                            alt="trash-icon"
                          ></img>
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>20-STOREY MEDICAL BUILDING AT VICTORIA STREET - EB</td>
                    <td>
                      <span className="highlight">8242J</span>
                    </td>
                    <td>
                      <div className="action-block">
                        <Link href="#">
                          <img src="assets/edit-icon.svg" alt="edit-icon"></img>
                        </Link>
                        <Link href="#" className="delete-icon">
                          <img
                            src="assets/trash-icon.svg"
                            alt="trash-icon"
                          ></img>
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>20-STOREY MEDICAL BUILDING AT VICTORIA STREET - EB</td>
                    <td>
                      <span className="highlight">8242J</span>
                    </td>
                    <td>
                      <div className="action-block">
                        <Link href="#">
                          <img src="assets/edit-icon.svg" alt="edit-icon"></img>
                        </Link>
                        <Link href="#" className="delete-icon">
                          <img
                            src="assets/trash-icon.svg"
                            alt="trash-icon"
                          ></img>
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="last-table-block">
                <button type="submit" className="btn common-button-black">
                  View All
                </button>
              </div>
            </s.TableCommon>
          </div>
        </div>
      </s.CommonDashboardBlock>
    </>
  );
};
export default Project;
