import styled, { css } from "styled-components"

import { ButtonProps } from "."

export const Button = styled.button<Omit<ButtonProps, "label">>`
  background-color: ${(props) => props.color};
  /* padding: ${(props) =>
    props.size === "lg" ? "2rem 4.5rem" : "1rem 2.75rem;"}; */
  cursor: pointer;

  ${(props) =>
    props.size === "lg" &&
    css`
      padding: 2rem 4.5rem;
    `}

  ${(props) =>
    props.size === "md" &&
    css`
      padding: 1rem;
    `}

  ${(props) =>
    props.size === "sm" &&
    css`
      padding: 0.5rem;
    `}

  border: none;
  color: white;
`
