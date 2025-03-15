import { RootState } from "../store ";

const selectTheme = (state: RootState) => state.theme.theme; // Select the theme from the state

export { selectTheme };
