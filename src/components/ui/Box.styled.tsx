import styled from "styled-components";

interface BoxProps {
  px?: number;
  py?: number;
  flex?: number;
}

export const Box = styled.div<BoxProps>`
  padding-left: ${({ px, theme }) => theme.spacing[px ?? 3]};
  padding-right: ${({ px, theme }) => theme.spacing[px ?? 3]};
  padding-top: ${({ py, theme }) => theme.spacing[py ?? 3]};
  padding-bottom: ${({ py, theme }) => theme.spacing[py ?? 3]};
  flex: ${({ flex }) => flex ?? 1};
`;
