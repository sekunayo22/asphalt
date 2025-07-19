import { Global } from '@emotion/react'
import Home from './pages/home'
import { normalize } from './styles/base/reset'

function App() {

  return (
    <>
      <Global styles={normalize} />
      <Home />
    </>
  )
}

export default App
