import styled, { css } from "styled-components"

import { ButtonProps } from "."

type ContainerProps = Omit<ButtonProps, "label">

export const Container = styled.button<ContainerProps>`
  background-color: ${(props) => props.theme};

  cursor: pointer;
  transition: all 0.2s;

  font-weight: 500;
  font-size: 1rem;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;

  height: ${({ theme }) => theme.space[16]};
  width: ${({ theme }) => theme.space[96]};

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

      &:hover {
        background-color ${theme.colors.shape_hover};
      }
    `}

  border: none;
  color: white;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`
