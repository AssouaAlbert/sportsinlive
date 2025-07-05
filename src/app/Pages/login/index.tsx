import Grid from '@mui/material/Grid2'
import SignInAndSignUp from '../../component/signInAndSignUp';


const LoginSignUp: React.FC = () => {
    return (
        <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            flexGrow={1}
            wrap="wrap"
            id="login-signup-page"
            sx={{
                width: "100%",
                display: "flex",
                padding: 2,
            }}

        >
            <Grid size={12}>
                <SignInAndSignUp />
            </Grid>
        </Grid>
    );
}

export default LoginSignUp;