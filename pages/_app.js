// Point d'entrée de l'app Cargo Web
// On y ajoute nos styles globaux
import {ThemeProvider} from 'styled-components'

import CargoTheme from '/styles/cargoTheme'
import GlobalTheme from '/styles/global'

import 'bootstrap/dist/css/bootstrap.min.css'

function CargoApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={CargoTheme}>
    <GlobalTheme />
    <Component {...pageProps} />
  </ThemeProvider>)
}

export default CargoApp
