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
    Grid2 as Grid
} from "@mui/material";
import { Visibility, VisibilityOff, Facebook, Twitter, Google, Instagram } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import ActionLink from "../../utils/component/actionLink";

const LoginSignupForm: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [showSignUpPassword, setShowSignInPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
            <Box
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

                <TextField label="Email" fullWidth variant="outlined" sx={{ mt: 2, input: { color: 'white' } }} />

                <TextField
                    label="Password"
                    type={showLoginPassword ? "text" : "password"}
                    fullWidth
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

                <Button variant="contained" color="primary" fullWidth sx={{ mt: 2, borderRadius: 2 }}>
                    Log in
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
                    <Link href="#" color="secondary" onClick={() => setIsLogin(!isLogin)} sx={{ ml: 0.5 }}>
                        {isLogin ? "Sign up" : "Sign in"}
                    </Link>
                </Typography>
            </Box>
            <Box
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
                    Sign Up
                </Typography>


                <TextField label="First Name" fullWidth variant="outlined" sx={{ input: { color: 'white' } }} />
                <TextField label="Last Name" fullWidth variant="outlined" sx={{ mt: 2, input: { color: 'white' } }} />


                <TextField label="Email" fullWidth variant="outlined" sx={{ mt: 2, input: { color: 'white' } }} />

                <TextField
                    label="Password"
                    type={showSignUpPassword ? "text" : "password"}
                    fullWidth
                    variant="outlined"
                    sx={{ mt: 2, input: { color: 'white' } }}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton edge="end" onClick={() => setShowSignInPassword(!showSignUpPassword)}>
                                        {showSignUpPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }
                    }}
                />

                <TextField
                    label="Confirm Password"
                    type={showConfirmPassword ? "text" : "password"}
                    fullWidth
                    variant="outlined"
                    sx={{ mt: 2, input: { color: 'white' } }}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton edge="end" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }
                    }}
                />

                <FormControlLabel
                    control={<Checkbox />}
                    label={
                        <Typography>
                            I agree with <Link href="#" color="secondary"> <ActionLink >privacy</ActionLink></Link> and <Link href="#" color="secondary"> <ActionLink >
                                policy
                            </ActionLink></Link>
                        </Typography>
                    }
                    sx={{ mt: 1 }}
                />

                <Button variant="contained" color="primary" fullWidth sx={{ mt: 2, borderRadius: 2 }}>
                    Sign Up
                </Button>

                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                    Or Sign up with
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
                    Already have an account?
                    <Link href="#" color="secondary" onClick={() => setIsLogin(!isLogin)} sx={{ ml: 0.5 }}>
                        Sign in
                    </Link>
                </Typography>
            </Box>
        </Grid>
    );
};

export default LoginSignupForm;
