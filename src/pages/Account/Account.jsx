import React, { useState } from "react";
import Path from "../../components/path/Path";
import Wrapper from "./Wrapper";
import ColumnWrapper from "../../shared/ColWrapper";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../validations/account";
import { useForm } from "react-hook-form";
import LoginForm from "../../components/loginForm/LoginForm";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import RowWrapper from "../../shared/Rowrapper";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../Redux/service/api/users";

const paths = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Account", url: "/account" },
];

export default function Account() {
  const createToken = () => Math.random().toString(36).substring(2);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true);
  const [registerUser, { isLoading, isError, isSuccess, error }] =
    useRegisterUserMutation();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  async function registerHandler(data) {
    const token = createToken();

    const newUser = {
      username: data.username,
      password: data.password,
      token,
    };

    await registerUser(newUser).unwrap();
    localStorage.setItem("Token", token);
    iziToast.show({
      message: "Successfully signed up!😁",
      backgroundColor: "#4BB543",
      messageColor: "#fff",
    });
    navigate("/");
  }

  return (
    <div>
      <Path paths={paths} title="Account" />
      <Wrapper>
        <div className="register">
          <h2>Register</h2>
          <ColumnWrapper as="form" onSubmit={handleSubmit(registerHandler)}>
            <ColumnWrapper>
              <label htmlFor="username">
                Username <span>*</span>
              </label>
              <input type="text" id="username" {...register("username")} />
              <span>{errors.username?.message}</span>
            </ColumnWrapper>

            <ColumnWrapper>
              <label htmlFor="password">
                Password <span>*</span>
              </label>
              <RowWrapper className="password-container">
                <input
                  type={isPasswordHidden ? "password" : "text"}
                  id="password"
                  {...register("password")}
                />
                <div
                  onClick={() => setIsPasswordHidden((prevState) => !prevState)}
                >
                  {isPasswordHidden ? <FaRegEyeSlash /> : <FaRegEye />}
                </div>
              </RowWrapper>
              <span style={{ whiteSpace: "pre-wrap" }}>
                {errors.password?.message}
              </span>
            </ColumnWrapper>
            <ColumnWrapper>
              <label htmlFor="confirmPassword">
                Confirm Password <span>*</span>
              </label>
              <RowWrapper className="password-container">
                <input
                  type={isConfirmPasswordHidden ? "password" : "text"}
                  id="confirmPassword"
                  {...register("confirmPassword")}
                />
                <div
                  onClick={() =>
                    setIsConfirmPasswordHidden((prevState) => !prevState)
                  }
                >
                  {isConfirmPasswordHidden ? <FaRegEyeSlash /> : <FaRegEye />}
                </div>
              </RowWrapper>
              <span>{errors.confirmPassword?.message}</span>
            </ColumnWrapper>
            <input
              disabled={isLoading}
              type="submit"
              value={isLoading ? "Registering..." : "Register"}
            />
          </ColumnWrapper>
        </div>
        <div className="login">
          <h2>Login</h2>
          <LoginForm />
        </div>
      </Wrapper>
    </div>
  );
}
