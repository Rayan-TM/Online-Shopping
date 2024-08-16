import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required("email is required").email("email is not valid"),
  phone: yup
    .string()
    .transform((value) => value.trim())
    .required("phone number is required")
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      "phone number is not valid"
    ),
  message: yup
    .string()
    .transform((value) => value.trim())
    .min(5, "your message must be more than 5 characters")
    .max(1000, "your message must be less than 1000 characters"),
});

export default schema;
