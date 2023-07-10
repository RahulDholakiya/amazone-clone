import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutlined } from "@ant-design/icons";
import { loginCart, removeToCart } from "../Reducer/ReducerCom";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import empty from "../Images/empty.png";
import { toast } from "react-toastify";

const CartPage = () => {
  const [total, setTotal] = useState(0);

  const userCart = useSelector((state) => state?.addProduct?.addCart);
  console.log("userCart", userCart);

  const isLogin = useSelector((state) => state?.addProduct?.isLogin);
  console.log("isLogin", isLogin);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let count = 0;
    for (let i = 0; i < userCart?.length; i++) {
      count = count + userCart[i]?.price;
    }
    setTotal(count);
  }, [userCart]);

  const handleDelete = (index) => {
    console.log(index);
    dispatch(removeToCart(index));
    toast.success("Item Delete Successfull");
  };

  const handleNavigate = () => {
    if (isLogin) {
      navigate("/placeorder", { state: { element: total } });
      dispatch(loginCart);
    } else {
      navigate("/loginpage");
    }
  };

  return (
    <div>
      {userCart.length === 0 ? (
        <div className="empty-center">
          <div>
            <h1 className="cart">Cart</h1>
            <img src={empty} alt="empty" className="empty-image" />
          </div>
          <div className="empty-page">
            <h1>Your Amazon Cart Is Empty</h1>
            {isLogin ? (
              <div className="shop-btn">
                <Button type="primary" onClick={() => navigate("/")}>
                  Shop Now
                </Button>
              </div>
            ) : (
              <div className="shop-btn">
                <Button type="primary" onClick={() => navigate("/loginpage")}>
                  Register Now
                </Button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="carpatge-content">
          {userCart?.map((item, index) => {
            return (
              <div className="product-col" key={index}>
                <p className="Category-center">{index + 1}</p>
                <img
                  alt="example"
                  src={item?.image}
                  className="product-image"
                />
                <p className="Category-center">
                  <span className="Category">Category :</span> {item?.category}
                </p>
                <p className="Category-center">
                  <span className="Category">Price :</span>
                  {item?.price} $
                </p>
                <div className="Category-center">
                  <DeleteOutlined onClick={() => handleDelete(index)}>
                    Delete
                  </DeleteOutlined>
                </div>
              </div>
            );
          })}
          <div className="total-quantity-flex">
            <p className="total-quantity">Total Quantity: {userCart?.length}</p>
            <p className="total-quantity">Total Price :{total?.toFixed(2)}</p>
          </div>
        </div>
      )}
      <div className="proceed-btn">
        {userCart.length === 0 ? (
          <div></div>
        ) : (
          <Button type="primary" onClick={handleNavigate}>
            Proceed To Buy (
            {userCart.length > 1
              ? userCart.length + " items"
              : userCart.length + " item"}
            )
          </Button>
        )}
      </div>
    </div>
  );
};

export default CartPage;
