import React, { useState } from "react";
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    Grid,
    Checkbox,
    FormControlLabel,
    Link,
    IconButton,
    InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff, Facebook, Twitter, Google, Instagram } from "@mui/icons-material";
import { createTheme, useTheme } from "@mui/material/styles";

const LoginSignupForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const toggleForm = () => setIsLogin(!isLogin);
    // const theme = useTheme(); // Use the theme from the provider
    return (

        <Container
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 400,
                    backgroundColor: "background.paper",
                    padding: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Typography variant="h5" align="center" gutterBottom>
                    {isLogin ? "Log In" : "Sign Up"}
                </Typography>

                <Grid container spacing={2}>
                    {!isLogin && (
                        <>
                            <Grid item xs={6}>
                                <TextField label="First Name" fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField label="Last Name" fullWidth variant="outlined" />
                            </Grid>
                        </>
                    )}
                    <Grid item xs={12}>
                        <TextField label="Email" fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            fullWidth
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    {!isLogin && (
                        <Grid item xs={12}>
                            <TextField
                                label="Confirm Password"
                                type={showPassword ? "text" : "password"}
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                    )}
                    {isLogin ? (
                        <Grid item xs={12} display="flex" justifyContent="space-between">
                            <FormControlLabel control={<Checkbox />} label="Remember me" />
                            <Link href="#" color="secondary">
                                Forgot Password?
                            </Link>
                        </Grid>
                    ) : (
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label={
                                    <Typography variant="body2">
                                        I agree with <Link href="#" color="secondary">privacy</Link> and <Link href="#" color="secondary">policy</Link>
                                    </Typography>
                                }
                            />
                        </Grid>
                    )}
                </Grid>

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2, borderRadius: 2 }}
                >
                    {isLogin ? "Log in" : "Sign up"}
                </Button>

                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                    Or Sign in with
                </Typography>
                <Box display="flex" justifyContent="center" gap={1} mt={1}>
                    <IconButton color="primary">
                        <Facebook />
                    </IconButton>
                    <IconButton color="primary">
                        <Twitter />
                    </IconButton>
                    <IconButton color="primary">
                        <Google />
                    </IconButton>
                    <IconButton color="primary">
                        <Instagram />
                    </IconButton>
                </Box>

                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <Link href="#" color="secondary" onClick={toggleForm} sx={{ ml: 0.5 }}>
                        {isLogin ? "Sign up" : "Sign in"}
                    </Link>
                </Typography>
            </Box>
        </Container>

    );
};

export default LoginSignupForm;
