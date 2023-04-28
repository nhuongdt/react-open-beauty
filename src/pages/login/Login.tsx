import * as React from 'react';
import { Box, Grid, TextField, Typography, InputAdornment, Stack, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import logo from '../../asset/images/appbar_logo.png';
import { useAuth0 } from '@auth0/auth0-react';

export default function Login() {
  const { loginWithRedirect } = useAuth0();
  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/'
      }
    });
  };

  return (
    <>
      <Box className="text-center">
        <Grid container rowSpacing={3}>
          <Grid item xs={12} sm={12}>
            <img src={logo} width="50" height="50" />
            <Typography style={{ fontWeight: 500 }}>Lucky Beauty</Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              variant="standard"
              placeholder="Tài khoản"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                )
              }}></TextField>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              variant="standard"
              placeholder="Mật khẩu"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyIcon />
                  </InputAdornment>
                )
              }}></TextField>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button
              variant="contained"
              color="error"
              sx={{ bgcolor: '#7C3367' }}
              onClick={handleLogin}>
              Đăng nhập
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
