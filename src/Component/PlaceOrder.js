/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, Input, Table } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const PlaceOrder = () => {
  const [form] = useForm();

  const location = useLocation();
  const totalAmount = location?.state?.element;
  console.log("totalAmount", totalAmount);

  const userCart = useSelector((state) => state?.addProduct?.addCart);
  console.log("userCart", userCart);

  const selectorValue = useSelector((state) => state?.addProduct?.logCart);
  console.log(selectorValue);

  const column = [
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, record) => (
        <img alt="ex" src={record.image} height={50} width={50} />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];

  return (
    <div>
      <div className="billing-form">
        <div className="card-form">
          <h1>Billing Details</h1>
          <Form
            form={form}
            name="basic"
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
          >
            {/* <div className="username-text">
              <label>Username</label>
            </div> */}
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input className="username" />
            </Form.Item>

            {/* <div className="username-text">
              <label>Email</label>
            </div> */}
            <Form.Item
              label="Email"
              name="email"
              initialValue={selectorValue?.email}
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input className="username" />
            </Form.Item>

            {/* <div className="username-text">
              <label>Password</label>
            </div> */}
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password className="username" />
            </Form.Item>

            {/* <div className="username-text">
              <label>Address</label>
            </div> */}
            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please input your Address!",
                },
              ]}
            >
              <TextArea rows={4} className="username" />
            </Form.Item>

            {/* <div className="username-text">
              <label>Number</label>
            </div> */}
            <Form.Item
              label="Number"
              name="number"
              rules={[
                {
                  type: "number",
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input className="username" />
            </Form.Item>

            <div className="placeorder">
              <Button
                type="primary"
                htmlType="submit"
                className="placeorder-btn"
              >
                Place Order
              </Button>
            </div>
          </Form>
        </div>
      </div>

      <div className="table">
        <Table
          columns={column}
          bordered={true}
          className="table-border"
          dataSource={userCart}
          rowKey={(record) => record.index}
          pagination={false}
        />
      </div>

      <div className="total-amount">
        <p>Total Quantity : {userCart.length}</p>
        <p>Total Amount : {totalAmount} $</p>
      </div>
    </div>
  );
};

export default PlaceOrder;
