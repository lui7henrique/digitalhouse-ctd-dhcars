import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.black};
`

export const Content = styled.div`
  max-width: ${({ theme }) => theme.header.maxWidth};
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[20]};

  width: 100%;
  height: 100%;
`

export const Aside = styled.aside``

export const InfosContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    padding: ${({ theme }) => theme.space[4]};
  }
`

export const Title = styled.h1`
  font-family: "Archivo";

  font-weight: 600;
  font-size: 54px;
  line-height: 54px;

  margin-top: ${({ theme }) => theme.space[28]};
  color: ${({ theme }) => theme.colors.white};
`

export const Description = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  color: ${({ theme }) => theme.colors.text};

  margin-top: ${({ theme }) => theme.space[8]};
  margin-bottom: ${({ theme }) => theme.space[16]};
`

export const CarContainer = styled.div`
  aspect-ratio: 608 / 612;
  width: 50%;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`
