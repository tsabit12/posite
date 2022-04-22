import styled from '@emotion/styled';
import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useState } from 'react'
import { BackdropLoader, CheckboxComponent, InputComponent } from './components';
import { LoadingButton } from '@mui/lab';
import { GoogleLogin } from 'react-google-login';
import { ErrorMessage } from '../../Element';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setLoggedIn } from '../../actions/session';
import api from '../../api';
import { handleAxiosError } from '../../utils';

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

const Login = (props) => {
     const [isScure, setisScure] = useState(true);
     const [loading, setloading] = useState(false);
     const [errors, seterrors] = useState({});

     const responseGoogle = async (response) => {
          if(response.profileObj){
               setloading(true);

               const { email, familyName: lastname, givenName: firstname, imageUrl: imageurl } = response.profileObj;
               const session = {
                    email,
                    firstname,
                    lastname,
                    imageurl,
                    level: 1 
               }

               try {
                    const { resData } = await api.user.create(session);
                    props.setLoggedIn(resData.token);
               } catch (err) {
                    const { message, code } = handleAxiosError(err);
                    seterrors({ global: `${code} | ${message}`})
               }

               setloading(false);
          }else{
               let message = 'Something wrong on google endpoint';
               if(response.details) message = response.details;
               if(response.error) message = response.error;

               seterrors({ global: message })
          }
     }

     return(
          <LoginContainer sx={{ padding: { lg: '0px', xs: '20px'}}}>
               <BackdropLoader open={loading} />
               <ErrorMessage 
                    open={!!errors.global}
                    handleClose={() => seterrors(prev => ({ ...prev, global: undefined }))}
                    message={errors.global}
               />

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

                    <GoogleLogin
                         clientId={process.env.REACT_APP_GOOGLE_CLIENT}
                         render={renderProps => (
                              <GoogleButton 
                                   startIcon={<img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/google.svg`} alt='google-icon' />}
                                   onClick={renderProps.onClick}
                                   disabled={renderProps.disabled}
                              >
                                   Masuk dengan Google
                              </GoogleButton>
                         )}
                         buttonText="Login"
                         onSuccess={responseGoogle}
                         onFailure={responseGoogle}
                         //cookiePolicy={'single_host_origin'}
                    />
               </Stack>
          </LoginContainer>    
     )
}

Login.propTypes = {
     setLoggedIn: PropTypes.func.isRequired
}

export default connect(null, { setLoggedIn })(Login);