import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types'
import { decimalNumber } from '../../../../utils';

const Total = ({ ui, fe }) => {
     return(
          <Stack direction={'row'} spacing='23px'>
               <Stack direction={'row'} spacing={'16px'} alignItems='center'>
                    <img 
                         alt='ui_cmp' 
                         src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/cmp_ui.svg`} 
                         style={{
                              width: '64px',
                              height: '64px'
                         }}
                    />
                    <Box>
                         <Typography variant='body1' color={'#A9ABB0'} lineHeight='28px'>Total UI Komponen</Typography>
                         <Typography variant='title' lineHeight={'40px'} fontWeight='600'>{ decimalNumber(ui) }</Typography>
                    </Box>
               </Stack>
               <Stack direction={'row'} spacing={'16px'} alignItems='center'>
                    <img 
                         alt='ui_cmp' 
                         src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/cmp_fe.svg`} 
                         style={{
                              width: '64px',
                              height: '64px'
                         }}
                    />
                    <Box>
                         <Typography variant='body1' color={'#A9ABB0'} lineHeight='28px'>Total Front End Library</Typography>
                         <Typography variant='title' lineHeight={'40px'} fontWeight='600'>{ decimalNumber(fe) }</Typography>
                    </Box>
               </Stack>
          </Stack>
     )
}

Total.propTypes = {
     ui: PropTypes.number.isRequired,
     fe: PropTypes.number.isRequired
}

export default Total;