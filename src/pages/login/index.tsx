import { Button } from "components/Button"
import { FieldText } from "components/FieldText"
import { useCallback } from "react"
import { useForm } from "react-hook-form"
import { AiFillLock, AiOutlineMail } from "react-icons/ai"
import styled from "styled-components"

// temp container
const Container = styled.form`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

const Login = () => {
  const { handleSubmit, register } = useForm()

  const onSubmit = useCallback((data) => {
    alert(JSON.stringify(data, null, 4))
  }, [])

  return (
    <>
      <Container onSubmit={handleSubmit(onSubmit)}>
        <FieldText
          icon={AiOutlineMail}
          placeholder="E-mail"
          type="email"
          {...register("email")}
        />
        <FieldText
          icon={AiFillLock}
          placeholder="Senha"
          isPassword
          {...register("password")}
        />
        <Button label="Login" type="submit" />
      </Container>
    </>
  )
}

export default Login
