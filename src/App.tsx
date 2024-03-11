import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import temaPrincipal from './themes/temaPrincipal'
import ListaVagas from './containers/ListaVagas'

import './global.css'

function App() {
  return (
    <ThemeProvider theme={temaPrincipal}>
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </ThemeProvider>
  )
}

export default App
