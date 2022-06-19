import styled from "styled-components";

export const HStack = styled.div`
  display: flex;
  flex-direction: row;
  > * + * {
    margin-left: ${({ theme }) => theme.spacing["3"]};
  }
`;

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
  > * + * {
    margin-top: ${({ theme }) => theme.spacing["3"]};
  }
`;
