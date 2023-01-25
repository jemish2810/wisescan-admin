import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import * as s from "../../styles/common.style";
import InlineSVG from "react-inlinesvg";

import HomeIcon from "../../public/assets/home-icon.svg";

const Sidebar = () => {
  return (
    <>
      <s.SidebarMain>
        {/* <Sidebar /> */}
        <div className="sidebar-menu">
          <div className="sidebar-menu-block">
            <div className="sidebar-logo">
              <Link href="/">
                <img src="assets/logo.svg" alt="logo"></img>
              </Link>
            </div>
            <div className="sidebar-menu-block-inner">
              <h4>Adminstrator</h4>
              <ul>
                <li>
                  <Link href="/dashboard">
                    <img
                      src="assets/home-outline.svg"
                      alt="logo"
                      className="home-icon-hover"
                    ></img>
                    <img
                      src="assets/home-outline-2.svg"
                      alt="logo"
                      className="home-icon-defalt"
                    ></img>
                    <p>Home</p>
                  </Link>
                </li>
                <li>
                  <Link href="/changepassword">
                    <img
                      src="assets/lock-open-outline.svg"
                      alt="icon"
                      className="home-icon-hover"
                    ></img>
                    <img
                      src="assets/change-password.svg"
                      alt="icon"
                      className="home-icon-defalt"
                    ></img>
                    <p>Change Password</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sidebar-menu-block-inner">
              <h4>ATMS@net</h4>
              <ul>
                <li>
                  <Link href="/clients">
                    <img
                      src="assets/person-outline-2.svg"
                      alt="icon"
                      className="home-icon-hover"
                    ></img>
                    <img
                      src="assets/person-outline.svg"
                      alt="icon"
                      className="home-icon-defalt"
                    ></img>
                    <p>Client</p>
                  </Link>
                </li>
                <li>
                  <Link href="/projects">
                    <img
                      src="assets/copy-outline-2.svg"
                      alt="icon"
                      className="home-icon-hover"
                    ></img>
                    <img
                      src="assets/copy-outline.svg"
                      alt="icon"
                      className="home-icon-defalt"
                    ></img>
                    <p>Projects</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sidebar-menu-block-inner">
              <h4>Website</h4>
              <ul>
                <li>
                  <Link href="/projecthighlightmanagement">
                    <img
                      src="assets/clipboard-outline-2.png"
                      alt="icon"
                      className="home-icon-hover"
                    ></img>
                    <img
                      src="assets/clipboard-outline.svg"
                      alt="icon"
                      className="home-icon-defalt"
                    ></img>
                    <p>Project Highlight</p>
                  </Link>
                </li>
                <li>
                  <Link href="/newsline">
                    <img
                      src="assets/newspaper-outline-2.svg"
                      alt="icon"
                      className="home-icon-hover"
                    ></img>
                    <img
                      src="assets/newspaper-outline.svg"
                      alt="icon"
                      className="home-icon-defalt"
                    ></img>
                    <p>News Line</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="sign-out-block">
            <Link href="#">
              <img src="assets/logout-icon.svg" alt="icon"></img>
              <p>Sign Out</p>
            </Link>
          </div>
        </div>
      </s.SidebarMain>
    </>
  );
};
export default Sidebar;
