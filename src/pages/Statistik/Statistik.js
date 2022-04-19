import styled from '@emotion/styled';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer  } from 'recharts';
import { DataFormater } from '../../utils';

const data = [
     {name: 'Jan', ft: 500, ui: 600 }, 
     {name: 'Feb', ft: 800, ui: 700 },
     {name: 'Mar', ft: 700, ui: 550 },
     {name: 'Apr', ft: 500, ui: 750 },
     {name: 'Mei', ft: 550, ui: 600 },
     {name: 'Jun', ft: 850, ui: 700 },
     {name: 'Jul', ft: 750, ui: 1078 },
     {name: 'Aug', ft: 600, ui: 500 },
     {name: 'Sep', ft: 650, ui: 600 },
     {name: 'Oct', ft: 680, ui: 750 },
     {name: 'Nov', ft: 850, ui: 900 },
     {name: 'Dec', ft: 1000, ui: 800 },
]


const StatistikLayout = styled(Paper)({
     backgroundColor: '#FFFFFF',
     boxShadow: '0px 3px 10px #F1F2FA',
     borderRadius: '8px',
     padding: '42px 42px'
})

const StyledButton = styled(Button)(({ theme, active }) => ({
     backgroundColor: active ? '#FFF' : 'transparent',
     width: '107px',
     height: '40px',
     '&:hover': {
          backgroundColor: active ? '#FFF' : '#F5F7FB'
     },
     color: active ? '#017EFA' : '#A9ABB0',
     fontSize: '18px',
     fontWeight: '400',
     borderRadius: '6px'
   }));

const Statistik = () => {
     return(
          <StatistikLayout elevation={0}>
               <Stack direction={'row'} justifyContent='space-between' sx={{ marginBottom: '27px'}} alignItems='center'>
                    <Stack direction={'row'} spacing='23px'>
                         <Stack direction={'row'} spacing={'16px'}>
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
                                   <Typography variant='title' lineHeight={'60px'} fontWeight='600'>1.072</Typography>
                              </Box>
                         </Stack>
                         <Stack direction={'row'} spacing={'16px'}>
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
                                   <Typography variant='title' lineHeight={'60px'} fontWeight='600'>1.098</Typography>
                              </Box>
                         </Stack>
                    </Stack>
                    <Stack direction={'row'} sx={{ backgroundColor: '#F5F7FB', borderRadius: '8px', padding: '4px'}} spacing='4px'>
                         <StyledButton active disableRipple>Daily</StyledButton>
                         <StyledButton disableRipple>Weekly</StyledButton>
                         <StyledButton disableRipple>Monthly</StyledButton>
                    </Stack>
               </Stack>
               <ResponsiveContainer width='100%' height={400}>
                    <LineChart data={data}>
                         <Line type="basic" dataKey="ft" dot={{ stroke: '#30D987', strokeWidth: 5 }} stroke='#30D987' strokeWidth={3} />
                         <Line type="basic" dataKey="ui" dot={{ stroke: '#017EFA', strokeWidth: 5 }} stroke='#017EFA' strokeWidth={3} />
                         <CartesianGrid strokeDasharray="3 3" stroke='#DADADA' />
                         <XAxis 
                              dataKey="name" 
                              fontFamily='Gilory'
                              fontSize={'12px'}
                         />
                         <YAxis tickFormatter={DataFormater} fontFamily='Gilory' fontSize={'12px'} />
                    </LineChart>
               </ResponsiveContainer>
          </StatistikLayout>
     )
}

export default Statistik;