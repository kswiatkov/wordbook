import styled from "styled-components";
import theme from "theme";

export const Button = styled.button`
  background-color: ${(props) => props.color ?? theme.colors.primary};
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 2px;
  height: ${({ theme }) => theme.spacing["8"]};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${(props) => props.color ?? props.theme.colors.text};
  padding-left: ${({ theme }) => theme.spacing["4"]};
  padding-right: ${({ theme }) => theme.spacing["4"]};
`;
