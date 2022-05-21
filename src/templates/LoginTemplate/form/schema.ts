import * as yup from "yup"

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Por favor, insira um e-mail válido")
    .required("Por favor, insira o e-mail."),
  password: yup
    .string()
    .min(6, "Por favor, insira uma senha com no mínimo 6 caracteres.")
    .required("Por favor, insira a senha.")
})
