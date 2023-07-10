import { Col, Row } from "antd";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <Row justify="center">
          <Col span={3} xxl={4} xl={4} lg={4} md={6} sm={8} xs={24}>
            <ul className="text-color">
              <p className="font-size">Get to Know Us</p>
              <li className="list">About Us</li>
              <li className="list">Careers</li>
              <li className="list">Press Releases</li>
              <li className="list">Amazon Science</li>
            </ul>
          </Col>
          <Col span={1}></Col>
          <Col span={3} xxl={4} xl={4} lg={4} md={6} sm={8} xs={24}>
            <ul className="text-color">
              <p className="font-size">Connect with Us</p>
              <li className="list">Facebook</li>
              <li className="list">Twitter</li>
              <li className="list">Instagram</li>
            </ul>
          </Col>
          <Col span={1}></Col>
          <Col span={4} xxl={4} xl={4} lg={4} md={6} sm={8} xs={24}>
            <ul className="text-color">
              <p className="font-size">Make Money with Us</p>
              <li className="list">Sell on Amazon</li>
              <li className="list">Sell under Amazon Accelerator</li>
              <li className="list">Protect and Build Your Brand</li>
              <li className="list">Amazon Global Selling</li>
              <li className="list">Become an Affiliate</li>
              <li className="list">Fulfilment by Amazon</li>
              <li className="list">Advertise Your Products</li>
              <li className="list">Amazon Pay on Merchants</li>
            </ul>
          </Col>
          <Col span={1}></Col>
          <Col span={4} xxl={4} xl={4} lg={4} md={6} sm={8} xs={24}>
            <ul className="text-color">
              <p className="font-size">Let Us Help You</p>
              <li className="list">COVID-19 and Amazon</li>
              <li className="list">Your Account</li>
              <li className="list">Returns Centre</li>
              <li className="list">100% Purchase Protection</li>
              <li className="list">Amazon App Download</li>
              <li className="list">Help</li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
