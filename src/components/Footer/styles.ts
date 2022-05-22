import styled, { css } from "styled-components"

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;

  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

export const Content = styled.div`
  padding: ${({ theme }) => theme.space[8]} ${({ theme }) => theme.space[4]};
  max-width: ${({ theme }) => theme.header.maxWidth};
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space[8]};
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space[4]};
`

export const Copyright = styled.p``

export const SocialNetworks = styled.div`
  display: Flex;
  gap: ${({ theme }) => theme.space[4]};
`

export const SocialNetwork = styled.a`
  cursor: pointer;
`

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};
`

export const Link = styled.a<{
  isActive: boolean
}>`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s;

  font-size: ${({ theme }) => theme.fontSizes["lg"]};

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 3px;
    background: white;
    transition: width 0.3s;
    border-radius: 0;
    margin-top: 5px;

    background-color: ${({ theme }) => theme.colors.principal};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover::after {
    width: 100%;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      & {
        color: ${({ theme }) => theme.colors.white};
      }

      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        background: white;
        transition: width 0.3s;
        border-radius: 0;
        margin-top: 5px;

        background-color: ${({ theme }) => theme.colors.principal};
      }
    `}
`
