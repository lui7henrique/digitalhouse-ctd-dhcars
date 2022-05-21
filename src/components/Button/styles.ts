import styled, { css } from "styled-components"

import { ButtonProps } from "."

type ContainerProps = Omit<ButtonProps, "label">

export const Container = styled.button<ContainerProps>`
  cursor: pointer;
  transition: all 0.2s;

  font-weight: 500;
  font-size: 1rem;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[4]};

  height: ${({ theme }) => theme.space[16]};
  width: ${({ theme }) => theme.space[96]};

  border: none;
  color: white;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }

  ${({ isLoading }) =>
    isLoading &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    `}

  /*
  |-----------------------------------------------------------------------------
  | Variant red
  |-----------------------------------------------------------------------------
  |
  |
  */
  ${({ variant, outline, theme }) =>
    variant === "red" &&
    !outline &&
    css`
      background-color ${theme.colors.principal};

      &:hover {
        background-color ${theme.colors.principal_hover};
      }
    `}

  ${({ variant, outline, theme }) =>
    variant === "red" &&
    outline &&
    css`
      border: 1px solid ${theme.colors.principal};
      color: ${theme.colors.principal};

      &:hover {
        border: 1px solid ${theme.colors.principal_hover};
      }
    `}


  /*
  |-----------------------------------------------------------------------------
  | Variant green
  |-----------------------------------------------------------------------------
  |
  |
  */

  ${({ variant, outline, theme }) =>
    variant === "green" &&
    !outline &&
    css`
      background-color: ${theme.colors.green};

      &:hover {
        background-color ${theme.colors.green_hover};
      }
    `}

  ${({ variant, outline, theme }) =>
    variant === "green" &&
    outline &&
    css`
      border: 1px solid ${theme.colors.green};
      color: ${theme.colors.green};

      &:hover {
        border: 1px solid ${theme.colors.green_hover};
      }
    `}



  /*
  |-----------------------------------------------------------------------------
  | Variant gray
  |-----------------------------------------------------------------------------
  |
  |
  */
  ${({ variant, outline, theme }) =>
    variant === "gray" &&
    !outline &&
    css`
      background-color: ${theme.colors.shape};

      &:hover {
        background-color ${theme.colors.shape_hover};
      }
    `}

  ${({ variant, outline, theme }) =>
    variant === "gray" &&
    outline &&
    css`
      border: 1px solid #dedee3;
      color: ${theme.colors.shape};

      &:hover {
        border: 1px solid ${theme.colors.shape_hover};
      }
    `}
`
