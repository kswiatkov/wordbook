import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: string;
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
    spacing: {
      [name: number]: string;
    };
  }
}
