import { ButtonHTMLAttributes } from "react"

import { Button as StyledButton } from "./styles"

export type ButtonProps = {
  label: string
  color: string
  size: "sm" | "md" | "lg"
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps) => {
  const { label, color, size = "md", ...buttonProps } = props

  return (
    <StyledButton color={color} size={size} {...buttonProps}>
      {label}
    </StyledButton>
  )
}
