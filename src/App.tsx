import { ThemeProvider } from "@mui/material"
import { Provider, useSelector } from "react-redux"
import { selectTheme } from "./redux/theme/themeSelector"
import LoginSignupForm from "./app/component/loginSignUpForm/loginSignupForm";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store "; // Ensure you import the store and persistor correctly



const App: React.FC = () => {

  const theme = useSelector(selectTheme);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <LoginSignupForm />
        </ThemeProvider>
      </PersistGate>
    </Provider>


  )
}


export default App
