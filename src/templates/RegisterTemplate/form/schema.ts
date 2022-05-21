import * as yup from "yup"

export const registerSchema = yup.object().shape({
  name: yup.string().required("Por favor, insira o e-mail."),
  cnh: yup.string().required("Por favor, insira o e-mail."),
  email: yup
    .string()
    .email("Por favor, insira um e-mail válido")
    .required("Por favor, insira o e-mail."),
  password: yup
    .string()
    .min(6, "Por favor, insira uma senha com no mínimo 6 caracteres.")
    .required("Por favor, insira a senha."),
  confirmPassword: yup
    .string()
    .required("Por favor, insira a confirmação da senha.")
    .oneOf([yup.ref("password"), null], "As senhas devem coincidir")
})
