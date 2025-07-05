import React, { useState } from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    Checkbox,
    FormControlLabel,
    Link,
    IconButton,
    InputAdornment,
    useMediaQuery,
} from "@mui/material";
import { Visibility, VisibilityOff, Facebook, Twitter, Google } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import ActionLink from "../../utils/component/actionLink";
import { useLoginUserMutation } from "../../../redux/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import selectLoginForm from "../../../redux/loginForm/loginInFormSelector";
import { setEmail, setPassword } from "../../../redux/loginForm/loginInFormSlice";
import Form from "../../utils/component/styled/form/form.styled";
import { signInWithFacebook, signInWithGoogle, signInWithTwitter } from "../../utils/functions/signIn";

const LoginSignupForm: React.FC = () => {
    const [loginUser, { isLoading,
        //  error, data
         }] = useLoginUserMutation();
    const dispatch = useDispatch();
    const { email, password } = useSelector(selectLoginForm);
    const [isLogin, setIsLogin] = useState(true);
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    console.log(isMobile)
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Input changed:", event.target.name, event.target.value); // Debugging line
        const { name, value } = event.target;
        if (name === "email") {
            dispatch(setEmail(value));
        } else if (name === "password") {
            dispatch(setPassword(value));
        }
    }
    const handleLogin = (): void => {
        loginUser({ username: email, password })
            .unwrap()
            .then((response) => {
                console.log("Login successful:", response);
            })
            .catch((error) => {
                console.error("Login failed:", error);
                console.error("Error:", error); // Log the error message for debugging
            });
    }

    return (

            <Box
                id="login-form"
                sx={{
                    width: "100%",
                    maxWidth: 400,
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                    color: "white",
                    backgroundColor: theme.palette.background.paper
                }}
            >
                <Typography variant="h3" align="center" gutterBottom>
                    Sign In
                </Typography>

                <Form>

                    <TextField label="Email" name="email"
                        onChange={handleInputChange} 
                        value={email}
                        fullWidth variant="outlined" sx={{ mt: 2, input: { color: 'white' } }} />

                    <TextField
                        label="Password"
                        type={showLoginPassword ? "text" : "password"}
                        fullWidth
                        name="password"
                        onChange={handleInputChange}
                        value={password}
                        variant="outlined"
                        sx={{ mt: 2, input: { color: 'white' } }}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton edge="end" onClick={() => setShowLoginPassword(!showLoginPassword)}>
                                            {showLoginPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }
                        }}
                    />

                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1, alignItems: "center" }}>
                        <FormControlLabel control={<Checkbox />} label={<Typography>Remember me</Typography>} />
                        <Link href="#"><ActionLink>
                            <Typography >
                                Forgot Password?
                            </Typography>
                        </ActionLink>
                        </Link>
                    </Box>

                    <Button
                        disabled={isLoading}
                        type="submit"
                        onClick={handleLogin} variant="contained" color="primary" fullWidth sx={{ mt: 2, borderRadius: 2 }}>
                        Log in
                    </Button>
                </Form>


                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                    Or Sign in with
                </Typography>
                <Box display="flex" justifyContent="center" gap={1} mt={1}>
                       <IconButton color="primary">
                        <Google onClick={signInWithGoogle} />
                    </IconButton>
                     <IconButton color="primary">
                        <Facebook onClick={signInWithFacebook}/>
                    </IconButton>
                    <IconButton color="primary">
                        <Twitter onClick={signInWithTwitter} />
                    </IconButton>
                
                </Box>

                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <Link href="#" color="secondary" onClick={() => setIsLogin(!isLogin)} sx={{ ml: 0.5 }}>
                        {isLogin ? "Sign up" : "Sign in"}
                    </Link>
                </Typography>
            </Box>

    );
};

export default LoginSignupForm;
