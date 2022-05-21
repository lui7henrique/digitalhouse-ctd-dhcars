import styled, { css } from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.black};

  position: relative;
`

export const CloseButtonContainer = styled.div`
  width: ${({ theme }) => theme.space[12]};
  height: ${({ theme }) => theme.space[12]};

  margin: ${({ theme }) => theme.space[4]};

  background-color: ${({ theme }) => theme.colors.principal};

  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
  height: 100%;

  padding: ${({ theme }) => theme.space[4]};
`

export const MenuItem = styled.div<{
  isActive: boolean
}>`
  display: flex;
  align-items: center;
  width: 100%;

  justify-content: flex-end;
  gap: ${({ theme }) => theme.space[4]};
  padding: ${({ theme }) => theme.space[4]};

  border-top: 1px solid ${({ theme }) => theme.colors.shape};

  border-right: 3px solid ${({ theme }) => theme.colors.black};

  ${({ isActive }) =>
    isActive &&
    css`
      border-right: 3px solid ${({ theme }) => theme.colors.principal};
    `}
`

export const MenuItemTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: 400;

  color: ${({ theme }) => theme.colors.white};

  text-decoration: none !important;
`
