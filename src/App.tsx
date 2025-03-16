import { ThemeProvider, Grid2 } from "@mui/material"
import { Provider, useSelector } from "react-redux"
import { selectTheme } from "./redux/theme/themeSelector"
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store "; // Ensure you import the store and persistor correctly
import LoginSignup from "./app/Pages/login";



const App: React.FC = () => {

  const theme = useSelector(selectTheme);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Grid2
            container
            id="app-container"
            component="main"
            sx={{ minHeight: "100vh", minWidth: "100vw" }}
          >
            <LoginSignup />
          </Grid2>
        </ThemeProvider>
      </PersistGate>
    </Provider>


  )
}


export default App
