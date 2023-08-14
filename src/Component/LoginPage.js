import React from "react";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginCart, setIsLogin, setUserId } from "../Reducer/ReducerCom";
import { toast } from "react-toastify";
import { app, db } from "../Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";

const auth = getAuth(app);

const LoginPage = () => {
  const [form] = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (values) => {
    console.log("Login", values);
    await signInWithEmailAndPassword(auth, values?.email, values?.password)
      .then((userCredential) => {
        if (userCredential) {
          toast.success("Login Successfully");
          dispatch(setIsLogin(true));
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error("Invalid Email or Password");
        form.resetFields();
      });
    dispatch(loginCart(values));
    const querySnapshot = await collection(db, "user");
    const que = query(querySnapshot, where("email", "==", values.email));
    const snapshot = await getDocs(que);
    snapshot.forEach((doc) => {
      const user = { ...doc.data(), userid: doc.id };
      const userid = doc.id;
      dispatch(loginCart(user));
      dispatch(setUserId(userid));
    });
  };

  return (
    <div>
      <div className="form-card">
        <div className="login-card">
          <p className="form-login">Login</p>
          <Form
            onFinish={handleLogin}
            form={form}
            name="basic"
            labelCol={{
              span: 20,
              offset: 12,
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
            <label className="email-text">Email or mobile phone number</label>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please input your username!",
                },
              ]}
            >
              <Input className="input-email" />
            </Form.Item>
            <label className="email-text">Password</label>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password className="input-password" />
            </Form.Item>
            <Button type="primary" htmlType="submit" className="login-btn">
              Login
            </Button>
            <p className="new-to-amazon">New to amazon?</p>
            <Button
              type="primary"
              htmlType="submit"
              className="login-btn"
              onClick={() => navigate("/register")}
            >
              Create Your Amazon Account
            </Button>
          </Form>
          <p>
            By continuing, you agree to Amazon's
            <span className="condition">Conditions of Use</span> and
            <span className="condition"> Privacy Notice</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
