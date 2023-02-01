import styled from "styled-components";

export const LoginMain = styled.div`
  height: 100%;
  .login-main {
    display: flex;
    width: 100%;
    height: 100%;

    .login-left {
      width: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 50px;
      /* background: white; */

      justify-content: center;
      .login-left-inner {
        width: 500px;
        text-align: center;
        h1 {
          font-weight: 700;
          font-size: 32px;
          line-height: 44px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #363636;
          margin: 14px 0px 50px;
        }
      }
    }
    .login-right {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ffede1;
    }
  }
`;
export const CommonForm = styled.form`
  .form-group {
    margin-bottom: 30px;
    text-align: left;
    label {
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #363636;
      position: relative;
      display: block;
      span {
        position: relative;
        color: #e6813f;
        font-size: 20px;
      }
    }
    .form-control {
      background: #f2f7ff;
      border-radius: 6px;
      height: 52px;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      color: rgba(54, 54, 54, 0.5);
      width: 100%;
      border: none;
      font-family: "Open Sans", sans-serif;
      outline: none;
      padding: 19px 10px;
      ::-webkit-input-placeholder {
        /* Edge */
        color: rgba(54, 54, 54, 0.5);
      }

      :-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: rgba(54, 54, 54, 0.5);
      }

      ::placeholder {
        color: rgba(54, 54, 54, 0.5);
      }
    }
    textarea {
      height: 130px !important;
      resize: none;
    }
    [type="file"] {
      /* Style the color of the message that says 'No file chosen' */
      color: rgba(54, 54, 54, 0.5);
    }
    [type="file"]::-webkit-file-upload-button {
      background: #f2f7ff;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
      height: 52px;
      font-weight: 400;
      outline: none;
      padding: 10px 25px;
      text-transform: uppercase;
      transition: all 1s ease;
      border: none !important;
      color: rgba(54, 54, 54, 0.5);
    }

    [type="file"]::-webkit-file-upload-button:hover {
      background: #fff;
      border: 2px solid #535353;
      color: #000;
    }
  }
  .login-from-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Open Sans", sans-serif;
    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #e6813f;
      color: #000;
      span {
        color: #e6813f;
      }
    }
  }
  .common-button {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
    background-color: #000000;
    border-radius: 6px;
    width: 210px;
    padding: 15px;
    border: none;
    font-family: "Open Sans", sans-serif;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      background-color: #e6813f;
    }
  }
  .common-button-yellow {
    width: auto;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
    font-family: "Open Sans", sans-serif;
    transition: 0.5s;
    background: #e6813f;
    border-radius: 6px;
    padding: 14px 51px;
    cursor: pointer;
    border: none;
  }
  &.common-form-block-main {
    display: flex;
    margin: 0px -15px;
    flex-wrap: wrap;
    .common-form-block-inner {
      padding: 0px 15px;
      width: 50%;
      .last-btn {
        padding-left: 0px;
        margin-top: 20px;
      }
      .form-group {
        width: 100%;
        label {
          &.d-flex {
            display: flex;
            align-items: center;
            justify-content: space-between;
            span {
              font-weight: 300;
              font-size: 13px;
              line-height: 15px;

              color: #363636;
            }
          }
        }
        textarea {
          height: 360px !important;
          resize: none;
          line-height: 40px !important;
        }
      }
    }
  }
`;
export const SidebarMain = styled.div`
  width: 325px;
  position: fixed;
  height: 100%;
  background-color: #f2f7ff;
  top: 0px;
  left: 0px;
  overflow-y: auto;
  .sidebar-logo {
    padding: 26px 38px 20px 38px;
    a {
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .sidebar-menu {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    @media screen and (max-height: 730px) {
      display: block;
    }
    .sidebar-menu-block {
      .sidebar-menu-block-inner {
        border-bottom: 1px solid rgba(54, 54, 54, 0.1);
        padding-bottom: 10px;
        padding-top: 20px;
        h4 {
          font-weight: 700;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #363636;
          opacity: 0.4;
          padding: 0px 21px 14px 21px;
        }
        ul {
          margin: 0px;
          padding: 0px;
          list-style: none;
          li {
            a {
              display: flex;
              align-items: center;
              padding: 18px 21px;
              transition: 0.5s;
              p {
                font-weight: 600;
                font-size: 16px;
                line-height: 16px;
                color: rgba(54, 54, 54, 0.5);
                padding-left: 15px;
                position: relative;
                top: 2px;
              }
              .home-icon-hover {
                display: none;
              }
              &:hover {
                background-color: #e6813f;
                transition: 0.5s;
                p {
                  color: #fff;
                }
                .home-icon-hover {
                  display: block;
                }
                .home-icon-defalt {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
    .sign-out-block {
      padding: 30px 20px;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          font-size: 16px;
          line-height: 22px;
          font-weight: 500;
          color: #e6813f;
          padding-left: 10px;
        }
      }
    }
  }
`;

export const CommonDashboardBlock = styled.div`
  padding: 60px 40px 40px 365px;
  .dashboard-block-inner {
    .title-block {
      margin-bottom: 45px;
      border-bottom: 1px solid rgba(54, 54, 54, 0.1);
      h3 {
        font-weight: 700;
        font-size: 24px;
        line-height: 33px;
        padding-bottom: 26px;
        color: #363636;
      }
      &.flex-block-inner {
        display: flex;
        justify-content: space-between;
        p {
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          color: #000;
          span {
            color: #e6813f;
          }
        }
      }
      .common-button-yellow {
        width: auto;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        color: #ffffff;
        font-family: "Open Sans", sans-serif;
        transition: 0.5s;
        background: #e6813f;
        border-radius: 6px;
        padding: 14px 51px;
        cursor: pointer;
        border: none;
        margin-bottom: 26px;
      }
    }
    .dashboard-block-innerblock {
      display: flex;
      margin: 0px -15px;
      .block-dash {
        width: 33.33%;
        padding: 0px 15px;
        .block-dash-inner {
          background: #ffffff;
          box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          padding: 8px 19px;
          display: flex;
          height: 125px;
          .block-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #000;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            background-color: #e6813f;
          }
          .block-content {
            padding-left: 18px;
            width: 70%;
            h3 {
              font-weight: 700;
              font-size: 18px;
              line-height: 25px;
              text-transform: uppercase;
              color: #000000;
              margin-bottom: 10px;
            }
            p {
              font-weight: 400;
              font-size: 16px;
              line-height: 22px;
              color: #e6813f;
            }
          }
        }
      }
    }
    .change-password-block {
      .common-form-block {
        display: flex;
        flex-wrap: wrap;
        margin: 0px -15px;
        .form-group {
          padding: 0px 15px;
          width: 50%;
          &.full-width {
            width: 100%;
          }
        }
        .login-from-inner {
          width: 50%;
          padding: 0px 15px;
          display: block;
          margin-top: 21px;
          .common-button {
            width: 100%;
          }
        }
      }
      .last-btn {
        padding-left: 15px;
      }
    }
    .note-block {
      margin-top: 70px;
      h4 {
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        text-transform: uppercase;
        color: #363636;
        margin-bottom: 10px;
      }
      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: rgba(54, 54, 54, 0.7);
      }
    }
    .form-group-day {
      display: flex;
      margin: 0px -15px;
      .form-group-day-inner {
        width: 33.33%;
        padding: 0px 15px;
        select {
          background: #f2f7ff;
          border-radius: 6px;
          height: 52px;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          color: rgba(54, 54, 54, 0.5);
          width: 100%;
          border: none;
          font-family: "Open Sans", sans-serif;
          outline: none;
          padding: 14px 10px;
        }
      }
    }
  }
  .table-block-common {
    .title-block-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #363636;
      }
      .input-group {
        width: 450px;
        position: relative;
        .form-control {
          background: #f2f7ff;
          border-radius: 6px;
          height: 52px;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          color: rgba(54, 54, 54, 0.5);
          width: 100%;
          border: none;
          font-family: "Open Sans", sans-serif;
          outline: none;
          padding: 19px 10px;
          ::-webkit-input-placeholder {
            /* Edge */
            color: rgba(54, 54, 54, 0.5);
          }

          :-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            color: rgba(54, 54, 54, 0.5);
          }

          ::placeholder {
            color: rgba(54, 54, 54, 0.5);
          }
        }
        .btn {
          position: absolute;
          top: 0px;
          right: 0px;
          background: none;
          border: none;
          outline: none;
          top: 13px;
          right: 20px;
          cursor: pointer;
        }
      }
    }
  }
`;
export const TableCommon = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
    border-bottom: 1px solid rgba(54, 54, 54, 0.1);
    .form-group {
      display: block;
      input {
        padding: 0;
        height: initial;
        width: initial;
        margin-bottom: 0;
        display: none;
        cursor: pointer;
        &:checked {
          + label {
            &::after {
              content: "";
              display: block;
              position: absolute;
              top: 2px;
              left: 7px;
              width: 4px;
              height: 10px;
              border: solid #ef824a;
              border-width: 0 2px 2px 0;
              -webkit-transform: rotate(45deg);
              -ms-transform: rotate(45deg);
              transform: rotate(45deg);
            }
          }
        }
      }

      label {
        position: relative;
        cursor: pointer;
        &:before {
          content: "";
          -webkit-appearance: none;
          background-color: transparent;
          border: 1px solid #000;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
            inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
          padding: 9px;
          display: inline-block;
          position: relative;
          vertical-align: middle;
          cursor: pointer;
          margin-right: 5px;
          background-color: #fff;
          border-radius: 4px;
        }
      }
    }
    thead {
      th {
        padding: 13px 20px;
        width: 10%;
        text-align: left;
        background-color: #000;
        color: #fff;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        text-transform: uppercase;
        position: relative;

        &:nth-child(2) {
          width: 35%;
        }
        &:nth-child(3) {
          width: 15%;
        }
        &:nth-child(4) {
          width: 25%;
        }
        &:nth-child(5) {
          width: 15%;
        }
      }
    }
    tbody {
      tr {
        &:nth-child(odd) {
        }
        &:nth-child(even) {
          background: #fffbf9;
        }
      }
      td {
        padding: 13px 20px;
        width: 10%;
        text-align: left;
        color: #fff;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        text-transform: capitalize;
        color: #363636;
        position: relative;

        .highlight {
          color: #e6813f;
        }
        .action-block {
          display: flex;
          align-items: center;
          a {
            width: 24px;
            height: 24px;
            border-radius: 4px;
            display: flex;
            padding: 3px;
            background-color: #000;
            margin: 0px 3px;
            &.delete-icon {
              background: #e6813f;
            }
          }
        }
      }
    }
  }
  .last-table-block {
    display: flex;
    align-items: center;
    padding: 30px 0px;
    justify-content: space-between;
    .common-button-black {
      width: auto;
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      color: #ffffff;
      font-family: "Open Sans", sans-serif;
      -webkit-transition: 0.5s;
      transition: 0.5s;
      background: #000;
      border-radius: 6px;
      padding: 14px 51px;
      cursor: pointer;
      border: none;
    }
  }
  &.table-project {
    table {
      thead {
        th {
          width: 30%;

          &:nth-child(1) {
            width: 70%;
          }
        }
      }
    }
  }
  &.table-project-management {
    table {
      thead {
        th {
          width: 10%;

          &:nth-child(2) {
            width: 30%;
          }
          &:nth-child(3) {
            width: 15%;
          }
          &:nth-child(4) {
            width: 30%;
          }
        }
      }
      .profile-img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        img{
          width:100%;
          height:100%;
          border-radius: 50%;
        }
      }
    }
  }
`;
