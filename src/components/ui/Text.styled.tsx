import styled from "styled-components";

interface TextProps {
  darker?: boolean;
  color?: string;
}
export const Text = styled.p<TextProps>`
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${(props) =>
    props.color ??
    (props.darker ? props.theme.colors.textDarker : props.theme.colors.text)};
  margin: 0;
  padding: 0;
`;
