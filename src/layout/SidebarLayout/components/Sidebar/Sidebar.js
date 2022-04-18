import styled from '@emotion/styled';
import { Button, Drawer, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CustomPaper = styled(Paper)({
     backgroundColor: '#1B2B65',
     width: '204px',
     padding: '20px',
     borderRadius: '10px'
})

const MenuButton = styled(Button)({
     border: 0,
     borderRadius: 5,
     color: '#FFF',
     padding: '0 30px',
     height: '56px',
     fontSize: '15px',
     fontWeight:'400',
     fontFamily: 'Poppins',
     '&:hover': {
          backgroundColor: '#1B2B65'
     }
});

const AskButton = styled(Button)({
     backgroundColor: '#017EFA',
     marginTop: '8px',
     color: '#FFF',
     '&:hover' : {
          backgroundColor: '#017EFA'
     }
})

const Sidebar = (props) => {
     let activeColor = '#1B2B65';
     let nonactiveColor = 'info';

     const content = (
          <Box
               sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
               }}
          >
               <Box mt={-1} ml={2} pt={3} sx={{ borderRadius: 0 }}>
                    <Stack spacing={2}>
                         <Typography variant='body2' color={'#51CBFF'}>MAIN MENU</Typography>
                         { props.menulist.map((row, index) => 
                              <MenuButton 
                                   key={index}
                                   fullWidth 
                                   startIcon={<img src={row.startIcon} alt={`${row.startIcon}${index}`} />}
                                   sx={{ 
                                        justifyContent: 'flex-start', 
                                        backgroundColor: props.pathname === row.path ? activeColor : nonactiveColor
                                   }}
                                   component={Link}
                                   to={row.path}
                                   variant='text'
                              >
                                   { row.title }
                              </MenuButton> 
                         )}
                    </Stack>
               </Box>
               <Box sx={{ position: 'fixed', bottom: 0, width: '280px' }}>
                    <Stack 
                         justifyContent={'center'} 
                         direction='row'
                         sx={{ marginBottom: 2 }}
                    >
                         <div>
                              <Stack direction={'row'} justifyContent='center' position={'absolute'} top={'-2vh'} left={0} right={0} alignItems='center'>
                                   <Stack 
                                        sx={{ 
                                             backgroundColor: '#AABBFA', 
                                             width: '50px', 
                                             height: '50px', 
                                             borderRadius: '25px',
                                        }}
                                        direction='row'
                                        alignItems={'center'}
                                        justifyContent='center'
                                   >
                                        <img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/ask.svg`} alt='ask' style={{ width: '40px', height: '40px'}} />
                                   </Stack>
                              </Stack>
                              <CustomPaper elevation={0}>
                                   <Typography 
                                        fontSize={'14px'} 
                                        sx={{marginTop: 2, marginBottom: 2}} 
                                        fontWeight='400' 
                                        textAlign={'center'}
                                        color='#FFFFFF'
                                   >
                                        Need Help with PoSite?
                                   </Typography>
                                   <AskButton fullWidth>Go to help center</AskButton>
                              </CustomPaper>
                         </div>
                    </Stack>
               </Box>

          </Box>
     )

     if (props.lgUp) {
          return (
            <Drawer
              anchor="left"
              open={props.open}
              PaperProps={{
                sx: {
                  backgroundColor: '#081A51',
                  color: '#FFFFFF',
                  width: '280px',
                  borderRight: 'none',
                  boxShadow: '1px 0px 0px 0px rgb(255 255 255 / 10%)',
                  marginTop: '90px'
                }
              }}
              variant="persistent"
            >
              {content}
            </Drawer>
          );
     }

     return(
          <Drawer
            anchor="left"

            onClose={props.closeDrawer}
            open={props.open}
            PaperProps={{
              sx: {
                backgroundColor: 'neutral.900',
                color: '#FFFFFF',
                width: 280
              }
            }}
            sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
            variant="temporary"
          >
               {content}
          </Drawer>
     )
}

Sidebar.propTypes = {
     pathname: PropTypes.string.isRequired,
     lgUp: PropTypes.bool.isRequired,
     open: PropTypes.bool.isRequired,
     menulist: PropTypes.array.isRequired,
     closeDrawer: PropTypes.func.isRequired
}


export default Sidebar;