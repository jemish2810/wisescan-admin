import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import * as s from "../../styles/common.style";
// import { Sidebar } from "../sidebar";
import Sidebar from "../sidebar";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import data from "../../utils/mockData.json";
import Pagination from "@/src/components/Pagination";
import {
  asyncDeleteClient,
  asyncGetAllClients,
  asyncSearchClient,
} from "@/services/client/client.service";
import { DUMMY_CLIENTS } from "@/utils/constants";
let PAGE_SIZE = 15;

const Clients = () => {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [clientData, setClientData] = useState<any>([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    const response = await asyncGetAllClients();
    if (response && response.data) {
      setClientData(response.data);
    }
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    setTotalCount(lastPageIndex);
    console.log("clientData :>> ", clientData);
    return clientData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, clientData]);

  const handleOnClickDelete = async (data: any) => {
    // console.log("data :>> ", data);
    const deleteData = await asyncDeleteClient({ usname: data.usrnme });
  };

  const handleOnClickUpdate = async (data: any) => {
    router.push({
      pathname: "/addClient",
      query: { username: data.usrnme },
    });
  };

  const handleOnChangeSearch = (event: any) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleOnClickSearch = async () => {
    if (searchValue) {
      const deleteData = await asyncSearchClient({ c_name: searchValue });
    }
  };

  return (
    <>
      <Sidebar />
      <s.CommonDashboardBlock>
        <div className="dashboard-block-inner">
          <div className="title-block flex-block-inner">
            <h3>Client Management</h3>
            <button
              type="submit"
              className="btn common-button-yellow"
              onClick={() => router.push("/addClient")}
            >
              Add Client
            </button>
          </div>
          <div className="table-block-common">
            <div className="title-block-list">
              <p>
                Client, Listing 1 to 15 of 27 [Page {currentPage} of{" "}
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
                    <img src="assets/search-icon.svg" alt="people-icon" />
                  </button>
                </div>
              </div>
            </div>
            <s.TableCommon>
              <table>
                <thead>
                  <tr>
                    <th>
                      <div className="form-group">
                        <input type="checkbox" checked></input>
                        <label></label>
                      </div>
                    </th>
                    <th>Organization</th>
                    <th>Status</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTableData.map((item: any, index: number) => {
                    return (
                      <tr key={index}>
                        <td>
                          <div className="form-group">
                            <input type="checkbox"></input>
                            <label></label>
                          </div>
                        </td>
                        <td>{item?.org_name}</td>
                        <td>{item?.status}</td>
                        <td>{item?.c_name}</td>
                        <td>
                          <span className="highlight">{item?.usrnme}</span>
                        </td>
                        <td>
                          <div className="action-block">
                            <Link
                              href=""
                              onClick={() => handleOnClickUpdate(item)}
                            >
                              <img src="assets/edit-icon.svg" alt="edit-icon" />
                            </Link>
                            <Link
                              href=""
                              className="delete-icon"
                              onClick={() => handleOnClickDelete(item)}
                            >
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
                totalCount={clientData.length}
                pageSize={PAGE_SIZE}
                onPageChange={(page: any) => setCurrentPage(page)}
              />
              <div className="last-table-block">
                <button type="submit" className="btn common-button-black">
                  Add Client
                </button>
              </div>
            </s.TableCommon>
          </div>
        </div>
      </s.CommonDashboardBlock>
    </>
  );
};
export default Clients;
