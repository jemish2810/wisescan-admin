/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import * as s from "../../styles/common.style";
import Sidebar from "../sidebar";
import Router, { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  asyncGetProjectHighlights,
  asyncSearchProjectHighlights,
} from "@/services/project/project.service";
import { PAGE_SIZE } from "@/utils/constants";
import Pagination from "@/src/components/Pagination";
import Loader from "@/src/components/Loader";
import { checkIsAuth } from "@/utils/globalFunctions";

const ProjectManagement = () => {
  const router = useRouter();
  const dataFetchedRef = useRef(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [projectsData, setProjectsData] = useState<any>([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!checkIsAuth()) {
      Router.push("/");
      return;
    }
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchProjectHighlight();
  }, []);

  const fetchProjectHighlight = async () => {
    setIsLoading(true);
    const response = await asyncGetProjectHighlights();
    setIsLoading(false);
    if (response && response.data) {
      setProjectsData(response.data);
    }
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    setTotalCount(lastPageIndex);
    console.log("projectsData :>> ", projectsData);
    return projectsData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, projectsData]);

  const handleOnChangeSearch = (event: any) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleOnClickSearch = async () => {
    if (searchValue) {
      const response = await asyncSearchProjectHighlights({
        p_name: searchValue,
      });
      console.log("response :>> ", response);
      if (response && response.data) {
        setProjectsData(response.data);
      }
    }
  };
  return (
    <>
      <Sidebar />
      <s.CommonDashboardBlock>
        <div className="dashboard-block-inner">
          <div className="title-block flex-block-inner">
            <h3>Project Highlight Management</h3>
            <button
              type="submit"
              onClick={() => router.push("/projecthighlight")}
              className="btn common-button-yellow"
            >
              Add Project Highlight
            </button>
          </div>
          <div className="table-block-common">
            <div className="title-block-list">
              <p>
                Project, Listing 1 to 10 of 27 [Page {currentPage} of{" "}
                {totalCount}]
              </p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search client by name"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  value={searchValue}
                  onChange={handleOnChangeSearch}
                ></input>
                <div className="input-group-append">
                  <button
                    className="btn "
                    type="button"
                    id="button-addon2"
                    onClick={handleOnClickSearch}
                  >
                    <img src="assets/search-icon.svg" alt="people-icon"></img>
                  </button>
                </div>
              </div>
            </div>
            <s.TableCommon className="table-project-management">
              <table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Project name</th>
                    <th>Rank Priority</th>
                    <th>Project Write Up</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTableData.map((item: any, index: number) => {
                    return (
                      <tr key={index}>
                        <td>
                          <div className="profile-img">
                            <img
                              src="assets/profile1.jpg"
                              alt="img-profile"
                            ></img>
                          </div>
                        </td>
                        <td>{item?.p_name}</td>
                        <td>{item?.rank}</td>
                        <td>{item?.desc}</td>
                        <td>
                          <div className="action-block">
                            <Link href="#">
                              <img
                                src="assets/edit-icon.svg"
                                alt="edit-icon"
                              ></img>
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
                    );
                  })}
                </tbody>
              </table>
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={projectsData.length}
                pageSize={PAGE_SIZE}
                onPageChange={(page: any) => setCurrentPage(page)}
              />
              <div className="last-table-block">
                <button type="submit" className="btn common-button-black">
                  View All
                </button>
              </div>
            </s.TableCommon>
          </div>
        </div>
        <Loader isLoading={isLoading} />
      </s.CommonDashboardBlock>
    </>
  );
};
export default ProjectManagement;
