import * as yup from "yup";


export default yup.object().shape({
    name: yup
      .string()
      .required("Username is required")
      .min(3, "Username must be 3 chars long"),
    email: yup
      .string()
      .email("must be a valid email")
      .required("email is required"),
    phone: yup
    .string()
    .max(10, 'cannot exceed 10 numbers')
    .required('must enter valid phone number'),
    size: yup
    .string()
    .oneOf(['small', 'medium', 'large', 'xl']),
    sauce: yup
      .string()
      .required('must choose one'),
    pepperoni: yup
    .boolean(),
    // .oneOf([true]),
    sausage: yup
    .boolean(),
    // .oneOf([true]),
    ham: yup
    .boolean(),
    // .oneOf([true]),
    blackOlives: yup
    .boolean(),
    // .oneOf([true]),
    greenPepper: yup
    .boolean(),
    // .oneOf([true]),
    extraCheese: yup
    .boolean(),
    // .oneOf([true]),
    textarea: yup
    .string(),
  });