/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Dropdown, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchProduct } from "../Reducer/ReducerCom";
import { Rate } from "antd";
import { Circles } from "react-loader-spinner";
import { DownOutlined } from "@ant-design/icons";

const Home = () => {
  const [mensProduct, setMensProduct] = useState("");
  const [data, setData] = useState("");

  const dispatch = useDispatch();

  const productValue = useSelector((state) => state?.addProduct?.data);

  const addProductToCart = useSelector((state) => state?.addProduct?.addCart);

  const loader = useSelector((state) => state?.addProduct?.isLoading);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    console.log(addProductToCart);
  };

  const items = [
    {
      label: "All",
      key: "All",
    },
    {
      label: "men's clothing",
      key: "men's clothing",
    },
    {
      label: "jewelery",
      key: "jewelery",
    },
    {
      label: "electronics",
      key: "electronics",
    },
    {
      label: "women's clothing",
      key: "women's clothing",
    },
  ];

  const onClick = ({ key }) => {
    setData(key);
    console.log("key", key);
    if (key === "All") {
      fetch("https://fakestoreapi.com/products").then((response) => {
        response
          .json()
          .then((result) => {
            console.log("result", result);
            setMensProduct(result);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    } else {
      fetch(`https://fakestoreapi.com/products/category/${key}`).then(
        (response) => {
          response
            .json()
            .then((result) => {
              console.log("result", result);
              setMensProduct(result);
            })
            .catch((err) => {
              console.log(err.message);
            });
        }
      );
    }
  };

  return (
    <div>
      {loader ? (
        <div className="loader">
          <Circles color="#4fa94d" visible={true} />
        </div>
      ) : (
        <div>
          <div className="dropdown-category">
            <Dropdown
              menu={{
                items,
                onClick,
              }}
              trigger={["click"]}
            >
              <Button>
                {data || "Select Category"}
                <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <div>
            {data === "All" || data === "" ? (
              <div></div>
            ) : (
              <div>
                <p className="category-font">{data}</p>
                <p className="showing-result">
                  Showing {mensProduct.length} Result
                </p>
              </div>
            )}
          </div>

          {mensProduct === "" ? (
            <Row gutter={[20, 20]} className="row-home">
              {productValue?.map((item, index) => {
                return (
                  <Col
                    key={index}
                    span={6}
                    xxl={6}
                    xl={6}
                    lg={8}
                    md={12}
                    sm={12}
                    xs={24}
                  >
                    <Card
                      hoverable
                      title={item?.title}
                      cover={
                        <img
                          alt="example"
                          src={item?.image}
                          className="example-image"
                        />
                      }
                    >
                      <p>
                        <span className="Category">Category :</span>{" "}
                        {item?.category}
                      </p>
                      <p>
                        <span className="Category">Price :</span>
                        {item?.price} $
                      </p>
                      <Rate
                        allowHalf
                        defaultValue={item?.rating?.rate}
                        disabled
                      />
                      {item?.rating?.rate}
                      <p>(Customer Review :{item?.rating?.count})</p>
                      <Button
                        type="primary"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add To Cart
                      </Button>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          ) : (
            <Row gutter={[20, 20]} className="row-home">
              {mensProduct?.map((item, index) => {
                return (
                  <Col
                    key={index}
                    span={6}
                    xxl={6}
                    xl={6}
                    lg={8}
                    md={12}
                    sm={12}
                    xs={24}
                  >
                    <Card
                      hoverable
                      title={item?.title}
                      cover={
                        <img
                          alt="example"
                          src={item?.image}
                          className="example-image"
                        />
                      }
                    >
                      <p>
                        <span className="Category">Category :</span>{" "}
                        {item?.category}
                      </p>
                      <p>
                        <span className="Category">Price :</span>
                        {item?.price} $
                      </p>
                      <Rate
                        allowHalf
                        defaultValue={item?.rating?.rate}
                        disabled
                      />
                      {item?.rating?.rate}
                      <p>(Customer Review :{item?.rating?.count})</p>
                      <Button
                        type="primary"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add To Cart
                      </Button>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
