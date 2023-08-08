import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { app } from "../Firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app);

const Register = () => {
  const [form] = useForm();
  const navigate = useNavigate();

  const handleRegister = (values) => {
    createUserWithEmailAndPassword(auth, values?.email, values?.password)
      .then((value) => {
        toast.success("Register Successfully")
        navigate("/loginpage");
      })
      .catch((err) => {
        console.log(err);
        toast.info("User already Register")
      });
  };

  return (
    <div>
      <div>
        <div className="form-card">
          <div className="login-card">
            <p className="form-login">Register</p>
            <Form
              onFinish={handleRegister}
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
              <Button
                type="primary"
                htmlType="submit"
                className="login-btn"
                onClick={() => toast.success("Register Successfully")}
              >
                Register
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
    </div>
  );
};

export default Register;
