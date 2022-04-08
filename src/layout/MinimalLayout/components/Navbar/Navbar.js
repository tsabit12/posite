import styled from '@emotion/styled';
import { AppBar, Box, Button, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react'

const NavbarRoot = styled(AppBar)({
     backgroundColor: '#FFFFFF',
     boxShadow: 'none',
     color: 'red',
     height: '89px',
     justifyContent: 'center'
})

const GradientButton = styled(Button)({
     background: 'linear-gradient(270deg, #F3F3F3 0%, rgba(255, 255, 255, 0) 100%)',
     borderTopRightRadius: '20px',
     borderBottomRightRadius: '20px',
     borderTopLeftRadius: '0px',
     borderBottomLeftRadius: '0px',
     padding: '10px 14.5px 10px 14.5px',
     height: '40px',
     marginLeft: '25px',
     color: 'rgba(37, 39, 63, 0.7)'
})

const ButtonLink = styled(Box)({
     cursor: 'pointer',
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center'
})

const Navbar = () => {
     return(
          <NavbarRoot 
               position="fixed" 
               sx={{
                    padding: {
                         lg: '12px 84.5px 12px 84.5px',
                         xs: '30px' 
                    }
               }}
          >
               <Toolbar disableGutters sx={{ left: 0}}>
                    <img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/logo.png`} alt='logo' style={{ width: '130px', height: '65px'}} />
                    <GradientButton
                         startIcon={<img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/flat-color-icons_flash-on.svg`} alt='bolt' />}
                         endIcon={<img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/akar-icons_arrow-right.svg`} alt='arrow-right' />}
                    >
                         Cek kesediaan komponen desain
                    </GradientButton>
                    <Box sx={{ flexGrow: 1 }} />
                    <Stack direction={'row'} alignItems='center' spacing={'35px'}>
                         <ButtonLink>
                              <Typography variant='link'>Produk</Typography>
                              <img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/akar-icons_chevron-down.svg`} alt='produk' style={{ marginLeft: '8px'}} />
                         </ButtonLink>
                         <ButtonLink>
                              <Typography variant='link'>FAQ</Typography>
                         </ButtonLink>
                         <Button variant='contained' color='primary'>Kontribusi</Button>
                    </Stack>
               </Toolbar>
          </NavbarRoot>
     )    
}

export default Navbar;