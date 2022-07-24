import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import Header from "./Header";
import 'react-toastify/dist/ReactToastify.css'
import ServerError from "../errors/ServerError";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const paletteMode = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteMode,
      background: {
        default: paletteMode ==='light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function toogleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar/>
      <CssBaseline />
      <Header darkMode={darkMode} setDarkMode={toogleDarkMode}/>
      <Container>
        <Route exact path={'/'} component={HomePage}/>
        <Route exact path={'/catalog'} component={Catalog}/>
        <Route path={'/catalog/:id'} component={ProductDetails}/>
        <Route path={'/about'} component={AboutPage}/>
        <Route path={'/contact'} component={ContactPage}/>
        <Route path={'/server-error'} component={ServerError}/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
