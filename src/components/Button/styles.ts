import styled, { css } from "styled-components"

import { ButtonProps } from "."

type ContainerProps = Omit<ButtonProps, "label">

export const Container = styled.button<ContainerProps>`
  background-color: ${(props) => props.theme};
  padding: 29px 72px;

  cursor: pointer;
  transition: all 0.2s;

  ${({ variant, theme }) =>
    variant === "red" &&
    css`
      background-color ${theme.colors.principal};

      &:hover {
        background-color ${theme.colors.principal_hover};
      }
    `}

  ${({ variant, theme }) =>
    variant === "green" &&
    css`
      background-color: ${theme.colors.green};

      &:hover {
        background-color ${theme.colors.green_hover};
      }
    `}

  ${({ variant, theme }) =>
    variant === "gray" &&
    css`
      background-color: ${theme.colors.shape};
    `}

  border: none;
  color: white;
`
