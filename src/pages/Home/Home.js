import styled from '@emotion/styled';
import { Button, Grid, InputBase, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
// import { CardOne } from './components';

const MenuNavbar = styled(Stack)({
     backgroundColor: 'rgba(1, 126, 250, 0.1)',
     height: '75px',
     marginTop: '52px',
     borderRadius: '10px',
     padding: '13px 38px'
})

const ButtonLink = styled(Button)({
     color: 'rgba(37, 39, 63, 0.7)',
     fontWeight: '400',
     fontSize: '16px',
     '&:hover': {
          backgroundColor: 'transparent'
     }
})

const BoxModal = styled(Box)({
     position: 'absolute',
     backgroundColor: 'rgba(28, 31, 55, 0.77)',
     left: 0,
     right: 0,
     bottom: 0,
     top: 0,
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center'
})

const cardlist = [
     {
          title: 'Bagian Hero', subtitle: '10 komponen', img: `${process.env.REACT_APP_PUBLIC_URL}/assets/cards/1.png`
     },
     {
          title: 'Bagian CTA', subtitle: '8 komponen', img: `${process.env.REACT_APP_PUBLIC_URL}/assets/cards/2.png`
     },
     {
          title: 'Bagian Harga', subtitle: '10 komponen', img: `${process.env.REACT_APP_PUBLIC_URL}/assets/cards/3.png`
     },
     {
          title: 'Bagian FAQ', subtitle: '10 komponen', img: `${process.env.REACT_APP_PUBLIC_URL}/assets/cards/4.png`
     },
     {
          title: 'Statistik', subtitle: '10 komponen', img: `${process.env.REACT_APP_PUBLIC_URL}/assets/cards/5.png`
     },
     {
          title: 'Bagian Testimoni', subtitle: '8 komponen', img: `${process.env.REACT_APP_PUBLIC_URL}/assets/cards/6.png`
     },
     {
          title: 'Bagian Kontak', subtitle: '10 komponen', img: `${process.env.REACT_APP_PUBLIC_URL}/assets/cards/7.png`
     }
]


const Home = () => {
     return(
          <React.Fragment>
               <Grid container spacing={'85px'} alignItems='center'>
                    <Grid item xs={12} lg={6}>
                         <Typography variant='subtitle1'>⎯ All in Component</Typography>
                         <Typography variant='title'>
                              Komponen UI yang indah,
                              <Typography variant='subtitle2'>dibuat dengan <span style={{fontWeight: '700'}}>Tailwind, Bootstrap, dan React</span></Typography>
                         </Typography>
                         <Typography variant='body1'>
                              Lebih dari 500+ contoh komponen yang dirancang secara profesional, sepenuhnya responsif, dan dibuat dengan ahli yang dapat Anda masukkan ke dalam proyek <span style={{ color: '#081A51', fontWeight: '700'}}>Tailwind, Bootstrap, dan React</span> sesuaikan dengan keinginan Anda.
                         </Typography>
                         <Stack direction={'row'} sx={{marginTop: 2}} spacing={'12px'}>
                              <Paper elevation={0} 
                                   sx={{ 
                                        backgroundColor: '#E6E6E6', 
                                        padding: '17.5px 30px', 
                                        borderRadius: '10px', 
                                        display: 'flex',
                                        width: '50%'
                                   }
                              }>
                                   <InputBase 
                                        placeholder='Cari Komponen...'
                                        sx={{ width: '100%', color: '#25273F' }}
                                   />
                                   <img 
                                        src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/akar-icons_search.svg`} 
                                        style={{ marginLeft: '10%'}}
                                        alt='search icon'
                                   />
                              </Paper>
                              <Button variant='contained' sx={{ width: '200px'}}>Coba pakai</Button>
                         </Stack>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                         <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
                              <img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/39296.svg`} alt='message' style={{ width: '100%'}} />
                         </Box>
                    </Grid>
               </Grid>
               <MenuNavbar direction={'row'} spacing={1} alignItems='center' justifyContent={'space-between'}>
                    <Button variant='contained'>Bagian Page</Button>
                    <ButtonLink disableRipple>Element</ButtonLink>
                    <ButtonLink disableRipple>Headings</ButtonLink>
                    <ButtonLink disableRipple>Data Display</ButtonLink>
                    <ButtonLink disableRipple>Lists</ButtonLink>
                    <ButtonLink disableRipple>Form</ButtonLink>
                    <ButtonLink disableRipple>Navigasi</ButtonLink>
                    <ButtonLink disableRipple>Layout</ButtonLink>
               </MenuNavbar>
               <Grid container spacing={2} sx={{ marginTop: '42px'}}>
                    { cardlist.map((row, index) => <Grid item xs={3} key={index}>
                         <Box 
                              sx={{ 
                                   backgroundColor: '#F3F4F6', 
                                   border: '1px solid rgba(0, 0, 0, 0.1)',
                                   borderRadius: '10px',
                                   overflow: 'hidden'
                              }}
                         >
                              <Box sx={{ margin: '14px 48px 14px 48px'}}>
                                   <img src={row.img} style={{width: '100%', height: '100%'}} alt={`image_card${index}`} />
                              </Box>
                              <Box sx={{ backgroundColor: '#FFFFFF', padding: '8px 19px'}}>
                                   <Typography variant='h6'>{ row.title } </Typography>
                                   <Typography variant='h7'>{row.subtitle}</Typography>
                              </Box>
                         </Box>
                    </Grid>)}

                    {/* last Element */}
                    <Grid item xs={3}>
                         <Box 
                              sx={{ 
                                   backgroundColor: '#F3F4F6', 
                                   border: '1px solid rgba(0, 0, 0, 0.1)',
                                   borderRadius: '10px',
                                   overflow: 'hidden',
                                   height: '100%',
                                   display: 'flex',
                                   alignItems: 'center',
                                   position: 'relative'
                              }}
                         >
                              <BoxModal>
                                   <Stack spacing={'20.83px'}>
                                        <Stack direction={'row'} justifyContent='center' spacing={1}>
                                             { [1, 2, 3].map(row => <Box key={row}
                                                  sx={{ 
                                                       width: '14.33px', 
                                                       height: '14.33px', 
                                                       backgroundColor: '#FFF',
                                                       borderRadius: '7px'
                                                  }} 
                                             />)}
                                        </Stack>
                                        <Typography style={{ fontWeight: '600', fontSize: '16px', lineHeight: '28.96px', color: '#FFF'}}>Lihat Lebih Banyak</Typography>
                                   </Stack>
                              </BoxModal>
                              <Box sx={{ margin: '14px 48px 14px 48px'}}>
                                   <img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/cards/8.png`} style={{width: '100%', height: '100%'}} alt={`image_card_last`} />
                              </Box>
                         </Box>
                    </Grid>
               </Grid>
          </React.Fragment>
     )
}

export default Home;