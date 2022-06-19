import styled from "styled-components";

export const Input = styled.input.attrs({
  type: "text",
})`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily};
  background-color: transparent;
  outline: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  height: ${({ theme }) => theme.spacing["8"]};
  font-size: ${({ theme }) => theme.fontSizes.md};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  width: 100%;
  letter-spacing: ${({ theme }) => theme.letterSpacings.normal};
  padding-left: ${({ theme }) => theme.spacing["3"]};
`;
