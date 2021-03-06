import { ReactNode } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Sofia Pro";
    src: url("//db.onlinewebfonts.com/t/9e00143409affcb46a1ae58634aa64be.eot"); /* IE9*/
    src: url("//db.onlinewebfonts.com/t/9e00143409affcb46a1ae58634aa64be.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("//db.onlinewebfonts.com/t/9e00143409affcb46a1ae58634aa64be.woff2") format("woff2"), /* chrome firefox */
    url("//db.onlinewebfonts.com/t/9e00143409affcb46a1ae58634aa64be.woff") format("woff"), /* chrome firefox */
    url("//db.onlinewebfonts.com/t/9e00143409affcb46a1ae58634aa64be.ttf") format("truetype"), /* chrome firefox opera Safari, Android, iOS 4.2+*/
    url("//db.onlinewebfonts.com/t/9e00143409affcb46a1ae58634aa64be.svg#Sofia Pro") format("svg"); /* iOS 4.1- */
  }

  body{
    font-family: 'Sofia Pro'
  }
  main{
    min-height: 80vh;
  }
`;

const theme = {
  colors: {
    primary: '#FF3364',
    secondary: '#FCC163',
    tertiary: '#76DED7',
    quaternary: '#083763',
    dark: '#333333',
    darkGrey: '#555A65',
    midGrey: '#8E93A1',
    lightGrey: '#DEDEE4',
    bgGrey: '#F5F5F8',
    white: '#FFFFFF',
  },

  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px',
  },

  up: (breakpoint: string, vertical: boolean = false) => `@media (min-${vertical ? 'height' : 'width'}: calc(${breakpoint} + 0.02px))`,
  down: (breakpoint:string, vertical: boolean = false) => `@media (max-${vertical ? 'height' : 'width'}: ${breakpoint})`,
  between: (breakpointMin: string, breakpointMax: string, vertical: boolean = false) => `@media (max-${vertical ? 'height' : 'width'}: ${breakpointMax}) and (min-${vertical ? 'height' : 'width'}: calc(${breakpointMin} + 0.02px))`,
};

type IProps = {
  children: ReactNode
}

const BaseLayout = ({ children }: IProps) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default BaseLayout;
