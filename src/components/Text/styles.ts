import styled from "styled-components"

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.text};
`
