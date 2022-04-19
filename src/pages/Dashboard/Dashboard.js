import styled from '@emotion/styled';
import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react'

const DashboardLayout = styled(Paper)({
     backgroundColor: '#FFFFFF',
     boxShadow: '0px 3px 10px #F1F2FA',
     borderRadius: '8px',
     padding: '42px 42px'
})

const TextParagrafh = styled(Typography)({
     fontFamily: 'Poppins',
     fontWeight: '400',
     fontSize: '18px',
     lineHeight: '32.31px',
     letterSpacing: '2.5%',
     color: 'rgba(37, 39, 63, 0.7)'
})

const BoldText = styled('span')({
     fontWeight: '700',
     fontFamily: 'Poppins',
     color: '#4A3AFF',
     textTransform: 'capitalize'
})

const Dashboard = () => {
     return(
          <DashboardLayout elevation={0}>
               <Grid container spacing={2} alignItems='center'>
                    <Grid item xs={12} lg={6}>
                         <Stack spacing={'12px'}>
                              <Box>
                                   <Typography variant='h4' color='#081A51' fontWeight={'600'} lineHeight='48px'>Kami Telah Menunggumu!</Typography>
                                   <Typography variant='subtitle2' color={'rgba(37, 39, 63, 0.5)'} lineHeight='36px'>Selamat datang di panel kontributor</Typography>
                              </Box>
                              <TextParagrafh>
                                   Sekarang setelah Anda di <BoldText>Posite</BoldText>, mari manfaatkan waktu kita sebaik-baiknya. Anda selangkah lagi menjadi kontributor <BoldText>Posite</BoldText> dan mengubah Resource menjadi Karya yang lebih bermanfaat. Inilah yang harus Anda lakukan selanjutnya:
                              </TextParagrafh>
                         </Stack>
                         <Box mt={'23px'}>
                              <Stack spacing={'20px'}>
                                   <Stack direction={'row'} spacing='32px' alignItems={'center'}>
                                        <img alt='upload' src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/circle_upload.svg`} />
                                        <TextParagrafh fontWeight={'500'}><BoldText>Unggah</BoldText> dan kirim Karya terbaik Anda.</TextParagrafh>
                                   </Stack>
                                   <Stack direction={'row'} spacing='32px' alignItems={'center'}>
                                        <img alt='upload' src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/circle_star.svg`} />
                                        <TextParagrafh fontWeight={'500'}>Tunggu untuk <BoldText>kami review resources</BoldText> yang anda berikan</TextParagrafh>
                                   </Stack>
                                   <Stack direction={'row'} spacing='32px' alignItems={'center'}>
                                        <img alt='upload' src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/circle_file_word.svg`} />
                                        <TextParagrafh fontWeight={'500'}>Untuk memastikan Resources Anda diterima, baca terlebih dahulu <BoldText>Pedoman kami</BoldText>.</TextParagrafh>
                                   </Stack>
                              </Stack>
                         </Box>
                         
                    </Grid>
                    <Grid item xs={12} lg={6}>
                         <img alt='39243' src={`${process.env.REACT_APP_PUBLIC_URL}/assets/39243.png`} style={{ width: '100%'}}/>
                    </Grid>
               </Grid>
          </DashboardLayout>
     )
}

export default Dashboard;