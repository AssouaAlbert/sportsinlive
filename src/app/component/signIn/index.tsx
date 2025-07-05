import { getAuth, getRedirectResult, signInWithRedirect, UserCredential } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import {
  Facebook,
  Google,
  Twitter,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useLoginUserMutation } from '../../../redux/api/apiSlice';
import ActionLink from '../../utils/component/actionLink';
import Form from '../../utils/component/styled/form/form.styled';
import {
  signInWithFacebook,
  // signInWithGoogle,
  signInWithTwitter,
} from '../../utils/functions/signIn';
import { googleAuthProvider } from '../../../utils/firebase';


const SignIn: React.FC = () => {
  const [
    loginUser,
    {
      isLoading
    },
  ] = useLoginUserMutation();

  const defaultFormFields = {
    username: '',
    password: '',
  };
  const [formData, setFormData] = useState(defaultFormFields);

  const [isLogin, setIsLogin] = useState(true);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const theme = useTheme();
const redirect = () =>  signInWithRedirect(getAuth(), googleAuthProvider);
  useEffect(() => {
    getRedirectResult(getAuth())
      .then((result: UserCredential | null) => {
        if (result) {

          const firebaseUser = result.user;
          console.log('User signed in via redirect:', firebaseUser.displayName, firebaseUser.email);
        } else {

          console.log('No Firebase Auth redirect result found on this page load.');
        }
      })
      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData?.email;


        console.error('Error during redirect sign-in:', errorCode, errorMessage, email);

      })
      .finally(() => {

      });

  }, []);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (event: React.FormEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    console.log('Login form data:', formData);
    loginUser(formData)
      .unwrap()
      .then((response) => {
        console.log('Login successful:', response);
      })
      .catch((error) => {
        console.error('Login failed:', error);
        console.error('Error:', error);
      });
  };

  return (
    <Box
      id='login-form'
      sx={{
        width: '100%',
        maxWidth: 400,
        padding: 4,
        borderRadius: 2,
        boxShadow: 3,
        color: 'white',
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Typography variant='h3' align='center' gutterBottom>
        Sign In
      </Typography>

      <Form>
        <TextField
          label='Email or Username'
          name='username'
          required
          onChange={handleInputChange}
          value={formData.username}
          fullWidth
          variant='outlined'
          sx={{ mt: 2, input: { color: 'white' } }}
        />

        <TextField
          label='Password'
          type={showLoginPassword ? 'text' : 'password'}
          required
          fullWidth
          name='password'
          onChange={handleInputChange}
          value={formData.password}
          variant='outlined'
          sx={{ mt: 2, input: { color: 'white' } }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    edge='end'
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                  >
                    {showLoginPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 1,
            alignItems: 'center',
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<Typography>Remember me</Typography>}
          />
          <Link href='#'>
            <ActionLink>
              <Typography>Forgot Password?</Typography>
            </ActionLink>
          </Link>
        </Box>

        <Button
          disabled={isLoading}
          type='submit'
          onClick={handleLogin}
          variant='contained'
          color='primary'
          fullWidth
          sx={{ mt: 2, borderRadius: 2 }}
        >
          Log in
        </Button>
      </Form>

      <Typography variant='body2' align='center' sx={{ mt: 2 }}>
        Or Sign in with
      </Typography>
      <Box display='flex' justifyContent='center' gap={1} mt={1}>
        <IconButton color='primary' onClick={redirect}>
          <Google />
        </IconButton>
        <IconButton color='primary' onClick={signInWithFacebook}>
          <Facebook />
        </IconButton>
        <IconButton color='primary' onClick={signInWithTwitter}>
          <Twitter />
        </IconButton>
      </Box>

      <Typography variant='body2' align='center' sx={{ mt: 2 }}>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <Link
          href='#'
          color='secondary'
          onClick={() => setIsLogin(!isLogin)}
          sx={{ ml: 0.5 }}
        >
          {isLogin ? 'Sign up' : 'Sign in'}
        </Link>
      </Typography>
    </Box>
  );
};

export default SignIn;
