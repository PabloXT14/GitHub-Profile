import { RepositoriesProvider } from "./contexts/RepositoriesContext"
import { Routes } from "./Routes"
import { GlobalStyle } from "./style/global"


function App() {

  return (
    <RepositoriesProvider>
      <GlobalStyle />
      <Routes />
    </RepositoriesProvider>
  )
}

export default App
