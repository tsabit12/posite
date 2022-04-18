import styled from '@emotion/styled';
import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useState } from 'react'
import { CheckboxComponent, InputComponent } from './components';
import { LoadingButton } from '@mui/lab';

const LoginContainer = styled(Box)({
     height: '100%', 
     display: 'flex', 
     justifyContent: 'center', 
     alignItems: 'center'
})

const LoginButton = styled(LoadingButton)({
     backgroundColor: '#30A2FF',
     color: '#FFF',
     height: '56px',
     '&:hover': {
          backgroundColor: '#1c8eeb'
     },
     fontSize: '18px',
     lineHeight: '18px'
})

const GoogleButton = styled(Button)({
     backgroundColor: '#E5E5E5',
     border: '1px solid #cfcfcf',
     boxSizing: 'border-box',
     height: '56px',
     '&:hover': {
          backgroundColor: '#E5E5E5'
     },
     color: 'rgba(28, 31, 55, 0.65)',
     fontSize: '16px',
     fontWeight: '500',
     lineHeight: '18px'
})

const Login = () => {
     const [isScure, setisScure] = useState(true);

     return(
          <LoginContainer>
               <Stack spacing={'24px'}>
                    <Box>
                         <Typography variant='h2'>Selamat datang di Posite!</Typography>
                         <Typography variant='body1' color={'rgba(28, 31, 55, 0.6)'}>Pastikan Anda masih ingat akun Anda</Typography>
                    </Box>
                    <InputComponent 
                         inputProps={{
                              placeholder: 'Enter your email'
                         }}
                         label='Email'
                    />

                    <InputComponent 
                         inputProps={{
                              placeholder: 'Enter your password'
                         }}
                         label='Password'
                         isScure={isScure}
                         scurityInput
                         setScure={() => setisScure(!isScure)}
                    />
                    <Stack direction={'row'} justifyContent='space-between'>
                         <Stack direction={'row'} alignItems='center'>
                              <CheckboxComponent />
                              <Typography variant='label'>Ingat saya</Typography>
                         </Stack>
                         <Typography variant='label'>Lupa password?</Typography>
                    </Stack>
                    <LoginButton>Masuk</LoginButton>
                    <Typography textAlign={'center'} fontSize='16px' color={'#1C1F37'}>Atau</Typography>

                    <GoogleButton 
                         // disableRipple
                         startIcon={<img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/google.svg`} alt='google-icon' />}
                    >
                         Masuk dengan Google
                    </GoogleButton>
               </Stack>
          </LoginContainer>    
     )
}

export default Login;