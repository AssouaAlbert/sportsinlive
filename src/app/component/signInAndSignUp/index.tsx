import React from "react";
import {

    useMediaQuery,
    Grid2 as Grid
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import LoginSignupForm from "../signIn";
import SignUpForm from "../signUpForm";


const SignInAndSignUp: React.FC = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    console.log(isMobile)

    return (
        <Grid
            container
            spacing={4}
            direction="row"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            wrap="wrap"
            id="login-signup-container"
            flexGrow={1}
            sx={{
                padding: isMobile ? 2 : 4,
            }}

        >
            <LoginSignupForm />
            <SignUpForm />
        </Grid>
    );
};

export default SignInAndSignUp;
