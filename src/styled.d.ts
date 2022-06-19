import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: string;
    borderRadius: string;
    colors: {
      primary: string;
      dark: string;
      background: string;
      text: string;
      textDarker: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    letterSpacings: {
      tighter: string;
      tight: string;
      normal: string;
      wide: string;
      wider: string;
      widest: string;
    };
    spacing: {
      [name: number]: string;
    };
  }
}
