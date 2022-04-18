import styled from '@emotion/styled';
import { alpha, AppBar, Box, Button, Chip, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

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

const StyledMenu = styled((props) => (
     <Menu
       elevation={0}
       anchorOrigin={{
         vertical: 'bottom',
         horizontal: 'right',
       }}
       transformOrigin={{
         vertical: 'top',
         horizontal: 'right',
       }}
       {...props}
     />
   ))(({ theme }) => ({
     '& .MuiPaper-root': {
          borderRadius: 6,
          marginTop: theme.spacing(1),
          minWidth: 300,
          color: 'rgb(55, 65, 81)',
          boxShadow:
          'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
          '& .MuiMenu-list': {
               padding: '4px 0',
          },
          '& .MuiMenuItem-root': {
          '& .MuiSvgIcon-root': {
               fontSize: 18,
               color: theme.palette.text.secondary,
               marginRight: theme.spacing(1.5),
          },
          '&:active': {
               backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
               ),
          },
       },
     },
}));

const CustomChip = styled(Chip)({
     backgroundColor: 'rgba(221, 32, 37, 0.2)',
     color: '#DD2025',
     fontSize: '10px',
     fontWeight: '500',
     lineHeight: '18.1px'
})

const Navbar = () => {
     const [anchorEl, setAnchorEl] = useState(null);

     const open = Boolean(anchorEl);
     const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
     };
     const handleClose = () => {
          setAnchorEl(null);
     };

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
                         <ButtonLink 
                              onClick={handleClick}
                              aria-controls={open ? 'dropdown-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                         >
                              <Typography variant='link'>Produk</Typography>
                              <img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/akar-icons_chevron-down.svg`} alt='produk' style={{ marginLeft: '8px'}} />
                         </ButtonLink>
                         <ButtonLink>
                              <Typography variant='link'>FAQ</Typography>
                         </ButtonLink>
                         <Button 
                              variant='contained' 
                              color='primary'
                              component={Link}
                              to="/login"
                         >
                              Kontribusi
                         </Button>
                    </Stack>
               </Toolbar>

               <StyledMenu
                    id="framework-menu"
                    MenuListProps={{
                         'aria-labelledby': 'framework-menu',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
               >
                    <Stack spacing={'14px'}>
                         <MenuItem>
                              <Stack direction={'row'} spacing={'12px'} alignItems='center'>
                                   <img alt='image1' src={`${process.env.REACT_APP_PUBLIC_URL}/assets/28.svg`} />
                                   <Box>
                                        <Typography variant='body2' color={'#081A51'}>Front End UI Library</Typography>
                                        <Typography 
                                             fontSize={'12px'} 
                                             fontWeight='400' 
                                             color={'rgba(37, 39, 63, 0.7)'}
                                             lineHeight='181%'
                                        >
                                             Ada <span style={{ color: '#F68407', fontWeight: '700'}}>+200</span> library yang kami sediakan
                                        </Typography>
                                   </Box>
                              </Stack>
                         </MenuItem>

                         <MenuItem>
                              <Stack direction={'row'} spacing={'12px'} alignItems='center'>
                                   <img alt='image1' src={`${process.env.REACT_APP_PUBLIC_URL}/assets/29.svg`} />
                                   <Box>
                                        <Typography variant='body2' color={'#081A51'}>UI Komponen</Typography>
                                        <CustomChip label='😎 Coming Soon' />
                                   </Box>
                              </Stack>
                         </MenuItem>

                         <MenuItem>
                              <Stack direction={'row'} spacing={'12px'} alignItems='center'>
                                   <img alt='image1' src={`${process.env.REACT_APP_PUBLIC_URL}/assets/30.svg`} />
                                   <Box>
                                        <Typography variant='body2' color={'#081A51'}>Website Builder</Typography>
                                        <CustomChip label='😎 Coming Soon' />
                                   </Box>
                              </Stack>
                         </MenuItem>
                    </Stack>
               </StyledMenu>
          </NavbarRoot>
     )    
}

export default Navbar;