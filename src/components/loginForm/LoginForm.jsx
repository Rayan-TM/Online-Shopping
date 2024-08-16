import React, { useEffect, useState } from "react";
import ColumnWrapper from "../../shared/ColWrapper";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import RowWrapper from "../../shared/Rowrapper";
import { useGetUserInfoQuery } from "../../Redux/service/api/users";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const defaultValues = {
    username: "",
    password: "",
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [triggerQuery, setTriggerQuery] = useState(defaultValues);

  const { data: userInfo } = useGetUserInfoQuery(
    [triggerQuery.username, triggerQuery.password],
    { skip: !triggerQuery.username || !triggerQuery.password }
  );
  const navigate = useNavigate();

  const loginHandler = () => {
    if (triggerQuery.password && triggerQuery.username) {
      if (userInfo?.length) {
        iziToast.show({
          message: "Successfully signed in!😁",
          backgroundColor: "#4BB543",
          messageColor: "#fff",
        });
        localStorage.setItem("Token", userInfo[0].token);

        navigate("/");
      } else {
        iziToast.show({
          message: "Username or Password is incorrect!🙁",
          backgroundColor: "#FF000090",
          messageColor: "#fff",
        });
        reset(defaultValues);
        setTriggerQuery(defaultValues);
      }
    }
  };

  useEffect(() => {
    loginHandler();
  }, [userInfo]);

  return (
    <ColumnWrapper
      as="form"
      onSubmit={handleSubmit((data) => setTriggerQuery(data))}
    >
      <ColumnWrapper>
        <label htmlFor="login-username">
          Username <span>*</span>
        </label>
        <input
          type="text"
          id="login-username"
          {...register("username", {
            required: "username is required",
          })}
        />
        <span>{errors.username?.message}</span>
      </ColumnWrapper>

      <ColumnWrapper>
        <label htmlFor="login-password">
          Password <span>*</span>
        </label>
        <RowWrapper className="password-container">
          <input
            type={isPasswordHidden ? "password" : "text"}
            id="login-password"
            {...register("password", {
              required: "password is required",
            })}
          />
          <div onClick={() => setIsPasswordHidden((prevState) => !prevState)}>
            {isPasswordHidden ? <FaRegEyeSlash /> : <FaRegEye />}
          </div>
        </RowWrapper>
        <span>{errors.password?.message}</span>
      </ColumnWrapper>
      <input type="submit" value="Login" />
    </ColumnWrapper>
  );
}
