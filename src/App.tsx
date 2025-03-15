import { ThemeProvider } from "@mui/material"
import { useSelector } from "react-redux"
import { selectTheme } from "./redux/theme/themeSelector"
import LoginSignupForm from "./app/component/loginSignUpForm/loginSignupForm";


const App: React.FC = () => {

  const theme = useSelector(selectTheme);
console.log("theme", theme)
  return (
    <ThemeProvider theme={theme}>
      <LoginSignupForm></LoginSignupForm>
    </ThemeProvider>
  )
}

export default App
