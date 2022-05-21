// Vendors
import { yupResolver } from "@hookform/resolvers/yup"
import { Button } from "components/Button"
import { FieldText } from "components/FieldText"
import { Text } from "components/Text"
import { Title } from "components/Title"
import { useAuth } from "context/AuthContext"
import { useCallback } from "react"
import { useForm } from "react-hook-form"
import { AiFillLock, AiOutlineMail } from "react-icons/ai"

import { loginSchema } from "./schema"
import * as S from "./styles"

// Components

// Types
export type FormLoginProps = {}

type FormLoginData = {
  email: string
  password: string
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const FormLogin = (props: FormLoginProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const {} = props

  /*
  |-----------------------------------------------------------------------------
  | Hooks
  |-----------------------------------------------------------------------------
  |
  |
  */
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors }
  } = useForm<FormLoginData>({
    resolver: yupResolver(loginSchema)
  })

  const { login } = useAuth()

  /*
  |-----------------------------------------------------------------------------
  | States
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Functions
  |-----------------------------------------------------------------------------
  |
  |
  */
  const onSubmit = useCallback(
    async (data: FormLoginData) => {
      await login(data.email, data.password)
    },
    [login]
  )

  /*
  |-----------------------------------------------------------------------------
  | Effects
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Memos
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Renders
  |-----------------------------------------------------------------------------
  |
  |
  */
  return (
    <S.Container onSubmit={handleSubmit(onSubmit)}>
      <Title title="Estamos quase lá." />
      <Text text="Faça seu login para começar uma experiência incrível." />

      <FieldText
        icon={AiOutlineMail}
        placeholder="E-mail"
        type="email"
        error={errors.email}
        {...register("email")}
      />

      <FieldText
        icon={AiFillLock}
        placeholder="Senha"
        isPassword
        error={errors.password}
        {...register("password")}
      />

      <Button label="Login" type="submit" isLoading={isSubmitting} />
      <Button
        label="Criar conta gratuita"
        variant="gray"
        outline
        href="/register"
      />
    </S.Container>
  )
}
