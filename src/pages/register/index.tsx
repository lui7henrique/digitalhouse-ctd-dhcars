import { Button } from "components/Button"
import { FieldText } from "components/FieldText"
import { NextPage } from "next"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineMail } from "react-icons/ai"
import { IoMdPerson } from "react-icons/io"
import styled from "styled-components"

const Container = styled.form`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

const Register: NextPage = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 4))
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <h1>Crie sua conta</h1>
      <p>Faça seu cadastro de forma rápida e fácil.</p>

      <FieldText icon={IoMdPerson} placeholder="Nome" {...register("name")} />
      <FieldText
        icon={AiOutlineMail}
        placeholder="E-mail"
        type="email"
        {...register("email")}
      />
      <FieldText icon={AiOutlineMail} placeholder="CNH" {...register("cnh")} />
      <Button label="Cadastrar" type="submit" />
    </Container>
  )
}

export default Register
