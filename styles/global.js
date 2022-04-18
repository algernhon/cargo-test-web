import { createGlobalStyle } from "styled-components";

const GlobalTheme = createGlobalStyle`
.container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
    @media (min-width: 1400px){
        max-width: 1920px!important;
    }
}
`;

export default GlobalTheme;