import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types'
import { DataFormater } from '../../../../utils';

const Total = ({ ui, fe, kt }) => {
     return(
          <Grid container spacing={'24px'}>
               <Grid item xs={6} lg={3}>
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
                              <Typography variant='title' lineHeight={'40px'} fontWeight='600'>{ DataFormater(ui) }</Typography>
                         </Box>
                    </Stack>
               </Grid>
               <Grid item xs={6} lg={3}>
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
                              <Typography variant='title' lineHeight={'40px'} fontWeight='600'>{ DataFormater(fe) }</Typography>
                         </Box>
                    </Stack>
               </Grid>
               <Grid item xs={6} lg={3}>
                    <Stack direction={'row'} spacing={'16px'} alignItems='center'>
                         <img 
                              alt='ui_cmp' 
                              src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/cmp_kt.svg`} 
                              style={{
                                   width: '64px',
                                   height: '64px'
                              }}
                         />
                         <Box>
                              <Typography variant='body1' color={'#A9ABB0'} lineHeight='28px'>Total Kontributor</Typography>
                              <Typography variant='title' lineHeight={'40px'} fontWeight='600'>{ DataFormater(kt) }</Typography>
                         </Box>
                    </Stack>
               </Grid>
          </Grid>
     )
}

Total.propTypes = {
     ui: PropTypes.number.isRequired,
     fe: PropTypes.number.isRequired,
     kt: PropTypes.number.isRequired
}

export default Total;