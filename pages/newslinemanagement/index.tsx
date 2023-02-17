/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import * as s from "../../styles/common.style";
import Sidebar from "../sidebar";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { asyncGetNews, asyncSearchNews } from "@/services/news/news.service";
import data from "../../utils/mockData.json";
import Pagination from "@/src/components/Pagination";
import { PAGE_SIZE } from "@/utils/constants";

const NewsLineManagement = () => {
  //States
  const [currentPage, setCurrentPage] = useState(1);
  const [newsData, setNewsData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPageCount, setTotalPageCount] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  //Life cycle hooks
  useEffect(() => {
    fetchNews();
  }, []);

  //Fetch method
  const fetchNews = async () => {
    setIsLoading(true);
    const news = await asyncGetNews();
    setIsLoading(false);
    const totalPageCount = Math.ceil(data.length / PAGE_SIZE);
    setTotalPageCount(totalPageCount);
    if (news) {
      setNewsData(news);
    }
  };

  //Custom data for table
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;

    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  //Other methods
  const handleOnChangeSearch = (event: any) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleOnClickSearch = async () => {
    if (searchValue) {
      const searchData = await asyncSearchNews({ news: searchValue });
      setNewsData(searchData);
    }
  };

  //render methods
  return (
    <>
      <Sidebar />
      <s.CommonDashboardBlock>
        <div className="dashboard-block-inner">
          <div className="title-block flex-block-inner">
            <h3>News Line Management</h3>
            <button
              type="submit"
              onClick={() => router.push("/newsline")}
              className="btn common-button-yellow"
            >
              Add News Line
            </button>
          </div>
          <div className="table-block-common">
            <div className="title-block-list">
              <p>
                News, Listing 1 to {PAGE_SIZE} of 27 [Page {currentPage} of
                {totalPageCount}]
              </p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search news"
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
                    <th>News Title</th>
                    <th>Start Date</th>
                    <th>News Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTableData.map((item: any, index: number) => {
                    return (
                      <tr key={index}>
                        <td>{item?.news || item?.id}News Title Here</td>
                        <td>{item?.start_date}03-Dec-2022</td>
                        <td>{item?.desc}Lorem Ipsum is simply dummy</td>
                        <td>
                          <div className="action-block">
                            <Link href="">
                              <img src="assets/edit-icon.svg" alt="edit-icon" />
                            </Link>
                            <Link href="" className="delete-icon">
                              <img
                                src="assets/trash-icon.svg"
                                alt="trash-icon"
                              />
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
                totalCount={data.length}
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
      </s.CommonDashboardBlock>
    </>
  );
};
export default NewsLineManagement;
