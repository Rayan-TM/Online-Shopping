import * as yup from "yup";

const schema = yup.object({
  username: yup
    .string()
    .transform((value) => value.trim())
    .required("username is required")
    .min(3, "username must have min 3 characters")
    .max(15, "username must have max 15 characters"),
  password: yup
    .string()
    .transform((value) => value.trim())
    .required("password is required")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$/%^&*-]).{8,}$/,
      "password must have Minimum 8 characters\nat least one upper case English letter\none lower case English letter\none number and one special character"
    ),
  confirmPassword: yup
    .string()
    .transform((value) => value.trim())
    .required("confirm password is required")
    .oneOf([yup.ref("password"), null], "passwords must match"),
});

export default schema;
