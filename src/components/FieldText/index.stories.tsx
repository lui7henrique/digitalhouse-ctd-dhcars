import { ComponentStory, ComponentMeta } from "@storybook/react"
import { AiFillLock, AiFillCar, AiOutlineMail } from "react-icons/ai"
import { IoMdPerson } from "react-icons/io"

import { FieldText } from "."

export default {
  title: "Form/FieldText",
  component: FieldText,
  argTypes: {
    icon: {
      control: false
    }
  }
} as ComponentMeta<typeof FieldText>

// Template
const Template: ComponentStory<typeof FieldText> = (args) => (
  <FieldText {...args} />
)

// Examples
export const Email = Template.bind({})
Email.args = {
  placeholder: "E-mail",
  type: "email",
  isPassword: false,
  icon: AiOutlineMail
}

export const Password = Template.bind({})
Password.args = {
  placeholder: "Password",
  isPassword: true,
  icon: AiFillLock
}

export const Name = Template.bind({})
Name.args = {
  label: "Nome",
  placeholder: "Insira seu nome",
  icon: IoMdPerson
}

export const NameValue = Template.bind({})
NameValue.args = {
  label: "Nome",
  value: "Luiz Henrique Delfino",
  placeholder: "Insira seu nome",
  icon: IoMdPerson
}

export const CNH = Template.bind({})
CNH.args = {
  label: "CNH",
  placeholder: "Preencha com sua CNH",
  icon: AiFillCar
}
