import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

// import { useRouter } from 'src/routes/hooks';



// eslint-disable-next-line import/no-extraneous-dependencies
// import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function LoginView() {
  const theme = useTheme();

  // const router = useRouter();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  // const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:7800/api/my/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.message === 'Login successful') {
        // console.log(isLoggedIn)
       setIsLoggedIn(0);
      //  console.log(isLoggedIn)
         localStorage.setItem('hhhazizaiauz', isLoggedIn);
        // console.log(data.token);
        // const decoded = jwt_decode(data.token);
        // console.log(decoded);
        // localStorage.setItem('token', decoded.adminId);

        navigate('/');
      } else {
        // Handle login failure (e.g., display error message)
      }
    } catch (error) {
      if (isLoggedIn) { console.log("logged IN"); }
      console.error('Error logging in:', error);
    }
  };



  // const handleClick = () => {
  //   router.push('/dashboard');
  // };

  const [value, setValue] = useState('');

  useEffect(() => {
    // Load the value from localStorage when the component mounts
    const storedValue = localStorage.getItem('myValue');
    if (storedValue) {
      setValue(storedValue);
    }
  }, []);
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    localStorage.setItem('myValue', newValue);
  };
  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField
          name="email"
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Box sx={{ my: 5 }} />

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={handleLogin}
      >
        Login
      </LoadingButton>
      {/* <h1>Local Storage Example</h1>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter a value"
      />
      <p>Value: {value}</p> */}
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">Sign in to Shield</Typography>

          <Box sx={{ my: 5 }} />


          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
