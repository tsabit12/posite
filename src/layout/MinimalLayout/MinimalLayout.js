import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { Navbar } from './components';

const MinimalLayout = ({ children }) => {
     return(
          <Box>
               <Navbar /> 
               <Box
                    sx={{
                         marginTop: '89px',
                         padding: {
                              lg: '39px 84.5px 39px 84.5px',
                              xs: '30px'
                         }
                    }}
               >
                    <Box sx={{ minHeight: '80vh'}}>
                         { children }
                    </Box>
                    <Stack direction='row' spacing={2} sx={{ marginTop: '36px'}}>
                         <img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/flat-color-icons_flash-on.svg`} alt='bolt' />
                         <Typography variant='body2'>Copyright 2022 | PT POS Indonesia (Persero)</Typography>
                    </Stack>
               </Box>
               
          </Box>
     )
}

export default MinimalLayout;