import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: ${({ theme }) => theme.space[32]};
  min-height: 70vh;
`

export const ContainerImage = styled.div`
  aspect-ratio: 608 / 612;
  width: 60%;

  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`
