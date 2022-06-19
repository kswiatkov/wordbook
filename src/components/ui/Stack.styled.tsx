import styled from "styled-components";

interface StackProps {
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
}

export const HStack = styled.div<StackProps>`
  display: flex;
  ${(props) => (props.wrap ? `flex-wrap: ${props.wrap}` : "")};
  flex-direction: row;
  > * + * {
    margin-left: ${({ theme }) => theme.spacing["3"]};
  }
`;

export const VStack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  ${(props) => (props.wrap ? `flex-wrap: ${props.wrap}` : "")};
  > * + * {
    margin-top: ${({ theme }) => theme.spacing["3"]};
  }
`;
