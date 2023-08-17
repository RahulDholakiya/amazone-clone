import React from "react";
import userUpload from "../Images/account-removebg-preview.png";
import { Button, Col, Row } from "antd";

const MyAccount = () => {
  return (
    <div>
      <div>
        <p className="myaccount">Account Details :</p>
      </div>
      <div className="myaccount-main">
        <div className="myaccount-width">
          <div className="userupload-img">
            <img src={userUpload} alt="userUpload" height={200} width={200} />
          </div>
          <div className="userupload-img">
            <Button type="primary">Edit Details</Button>
          </div>
          <Row justify="space-between" className="account-details">
            <Col>
              <Col className="account-col">First Name :</Col>
              <Col></Col>
            </Col>
          </Row>
          <Row justify="space-between" className="account-details">
            <Col>
              <Col className="account-col">Last Name :</Col>
              <Col></Col>
            </Col>
          </Row>
          <Row justify="space-between" className="account-details">
            <Col>
              <Col className="account-col">Email :</Col>
              <Col></Col>
            </Col>
          </Row>
          <Row justify="space-between" className="account-details">
            <Col>
              <Col className="account-col">Mobile Number :</Col>
              <Col></Col>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
