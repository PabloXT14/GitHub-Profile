import { GithubProvider } from "./contexts/GithubContext";
import { Routes } from "./Routes";
import { GlobalStyle } from "./style/global";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

  return (
    <GithubProvider>
      <GlobalStyle />
      <Routes />
      <ToastContainer autoClose={3000} />
    </GithubProvider>
  )
}

export default App
