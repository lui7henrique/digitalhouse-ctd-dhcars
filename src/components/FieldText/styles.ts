import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.border};
  height: ${({ theme }) => theme.space[16]};
  width: ${({ theme }) => theme.space[96]};
  overflow: hidden;

  transition: all 0.2s;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.details};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`

export const IconContainer = styled.div`
  height: 100%;
  padding: ${({ theme }) => theme.space[6]};
  border-right: 2px solid ${({ theme }) => theme.colors.border};
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.space[1]};

  padding-left: ${({ theme }) => theme.space[6]};
  padding-right: ${({ theme }) =>
    theme.space[12]}; // to show password visibility toggle icon
`

export const Label = styled.label`
  font-weight: 400;
  font-size: 12px;

  color: ${({ theme }) => theme.colors.details};
`

export const Input = styled.input`
  width: 100%;

  border: none;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #47474d;

  &:focus {
    outline: none;
  }
`

export const EyeContainer = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-right: ${({ theme }) => theme.space[6]};
  cursor: pointer;
`
