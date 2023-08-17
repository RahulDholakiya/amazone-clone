import { Avatar, Col, Dropdown, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserOutlined, LogoutOutlined, LoginOutlined } from "@ant-design/icons";
import { setIsLogin } from "../Reducer/ReducerCom";
import amazon from "../Images/amazon.png";
import cart from "../Images/cart.png";
import { toast } from "react-toastify";
import account from "../Images/account.png";

const HeaderCom = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLogin = useSelector((state) => state?.addProduct?.isLogin);

  const selectorValue = useSelector((state) => state?.addProduct?.logCart);
  console.log("headerEmail", selectorValue);

  const addProductToCart = useSelector((state) => state?.addProduct?.addCart);

  const handleMenuClick = () => {
    dispatch(setIsLogin(false));
  };

  const handleLoginLogout = () => {
    navigate("/loginpage");
    toast.success("Logout Successfully");
  };

  const items = [
    {
      label: (
        <div>
          {isLogin ? (
            <div className="avatar">
              <div className="avatar-flex">
                <Avatar size={40} className="avatar-logo">
                  {selectorValue?.email?.charAt(0).toUpperCase()}
                </Avatar>
                <p className="email-border">{selectorValue?.email}</p>
              </div>
              <div
                className="account-flex"
                onClick={() => navigate("/myaccount")}
              >
                <img src={account} alt="account" height={40} width={40} />
                <label className="account-text">My Account</label>
              </div>
              <div className="logout-icon" onClick={handleLoginLogout}>
                <LogoutOutlined className="logout-handle" />
                <label className="logout-text">Logout</label>
              </div>
            </div>
          ) : (
            <div onClick={() => navigate("/loginpage")}>
              <LoginOutlined className="logout-outline" />
              <label className="logout-text">Login</label>
            </div>
          )}
        </div>
      ),
      key: "1",
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div>
      <div className="header">
        <Row className="row-header">
          <Col
            span={2}
            className="col-two-header"
            xxl={2}
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={2}
          >
            <Dropdown
              menu={menuProps}
              placement="bottomLeft"
              trigger={["click"]}
            >
              <UserOutlined className="user-icon" />
            </Dropdown>
          </Col>
          <Col span={6} xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
            <p className="login-text">
              {isLogin ? (
                `Hello,${selectorValue?.email}`
              ) : (
                <span onClick={() => navigate("/loginpage")}>
                  Please Login/Register
                </span>
              )}
            </p>
          </Col>
          <Col
            span={8}
            className="col-eight-header"
            xxl={8}
            xl={8}
            lg={8}
            md={8}
            sm={8}
            xs={8}
          >
            <img
              src={amazon}
              alt="amazon"
              className="amazon-logo"
              onClick={() => navigate("/")}
            />
          </Col>
          <Col span={6}></Col>
          <Col
            span={2}
            className="col-two-cart-header"
            xxl={2}
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={2}
          >
            <img
              src={cart}
              alt="cart"
              className="cart-logo"
              onClick={() => navigate("/cartpage")}
            />
            {addProductToCart?.length > 0 ? (
              <label className="selector">{addProductToCart?.length}</label>
            ) : (
              <div></div>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HeaderCom;
