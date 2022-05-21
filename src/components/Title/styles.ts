import styled from "styled-components"

export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 39px;

  color: ${({ theme }) => theme.colors.title};
`
