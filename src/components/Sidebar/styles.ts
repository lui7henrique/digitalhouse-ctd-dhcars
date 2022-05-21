import styled, { css } from "styled-components"

export const Container = styled.div`
  height: 100vh;

  width: ${({ theme }) => theme.space[20]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

export const LogoContainer = styled.div`
  width: ${({ theme }) => theme.space[20]};
  height: ${({ theme }) => theme.header.height};

  background-color: ${({ theme }) => theme.colors.principal};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`

export const Menu = styled.div`
  height: calc(100vh - 80px);

  background-color: ${({ theme }) => theme.colors.shape};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
`

type MenuItemProps = {
  isActive?: boolean
}

export const MenuItemContainer = styled.a<MenuItemProps>`
  width: 100%;
  height: ${({ theme }) => theme.space[14]};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ isActive }) => isActive && "black"};

  transition: all 0.2s;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      border-left: 3px solid ${({ theme }) => theme.colors.principal};
    `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.shape_hover};
    border-left: 3px solid ${({ theme }) => theme.colors.principal};
  }
`
