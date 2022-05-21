import Image from "next/image"
import styled from "styled-components"

export const Container = styled.header`
  width: 100%;
  height: ${({ theme }) => theme.space[20]};

  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: ${({ theme }) => theme.header.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.space[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 0;
  } ;
`

export const Title = styled.h1`
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;

  color: #47474d;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  } ;
`

export const LogoContainer = styled.div`
  width: ${({ theme }) => theme.space[20]};
  height: ${({ theme }) => theme.header.height};

  background-color: ${({ theme }) => theme.colors.principal};

  display: flex;
  justify-content: center;
  align-items: center;

  display: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  } ;
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};
`

export const UserLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const UserLabel = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;

  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`

export const LoginAvatar = styled.div`
  width: ${({ theme }) => theme.space[12]};
  height: ${({ theme }) => theme.space[12]};

  background-color: ${({ theme }) => theme.colors.border};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`

export const User = styled.div`
  display: flex;
  align-items: center;
`

export const Avatar = styled(Image)`
  border-radius: 50%;
`

export const UserLogout = styled.sup`
  text-decoration: underline;
  margin-top: -4px;
  cursor: pointer;
`
