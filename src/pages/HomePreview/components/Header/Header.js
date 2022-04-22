import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import styled from '@emotion/styled';

const DownloadButton = styled(Button)({
     backgroundColor: '#F68407',
     color: '#FFF',
     '&:hover': {
          backgroundColor: '#de7504'
     }
})

const DisabledButton = styled(Button)({
     backgroundColor: '#F3F3F3',
     color: 'rgba(37, 39, 63, 0.7)',
     '&:hover': {
          backgroundColor: '#F3F3F3'
     },
     fontSize: '16px',
     fontWeight: '500'
})

const CutsomButton = styled(Button)(({ theme, active }) => ({
     backgroundColor: active ? '#FFFFFF' : 'transparent',
     color: 'rgba(37, 39, 63, 0.7)',
     '&:hover': {
          backgroundColor: active ? '#FFFFFF' : '#F3F3F3'
     },
     padding: '4px 15px'
}))

const Header = ({ framework, title, activePage, onChangePage }) => {
     return(
          <Stack direction={'row'} justifyContent='space-between' alignItems={'center'}>
               <Box>
                    <Typography variant='title2'>{ title }</Typography>
                    { Object.keys(framework).length > 0 && <Box sx={{ marginTop: '5px'}}>
                         <Stack direction={'row'} alignItems='center' spacing={'10px'}>
                              <Avatar alt={framework.author} src={`${process.env.REACT_APP_PUBLIC_URL}${framework.person}`} />
                              <Typography>{ framework.author }</Typography>
                         </Stack>
                    </Box> }
               </Box>
               { Object.keys(framework).length > 0 && <Stack direction={'row'} spacing={2}>
                    <Box
                         sx={{ 
                              backgroundColor: '#F3F3F3', 
                              padding: '16px', 
                              borderRadius: '10px'
                         }}
                    >
                         <Stack direction={'row'} spacing={'10px'} alignItems='center'>
                              <CutsomButton 
                                   disableRipple
                                   active={activePage === 'preview' ? true : false }
                                   startIcon={<img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/ant-design_eye-outlined.svg`} alt='eye-open' />}
                                   onClick={() => onChangePage('preview')}
                              >
                                   Preview
                              </CutsomButton>
                              <CutsomButton
                                   disableRipple
                                   active={activePage === 'code' ? true : false }
                                   startIcon={<img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/bx_code-alt.svg`} alt='code' /> }
                                   onClick={() => onChangePage('code')}
                              >
                                   Code
                              </CutsomButton>
                         </Stack>
                    </Box>

                    <DisabledButton
                         startIcon={
                              <img 
                                   alt='cloud' 
                                   src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/tailwindcss.svg`} 
                              />
                         }
                         disableRipple
                    >
                         Tailwind
                    </DisabledButton>
                    <DownloadButton 
                         startIcon={
                              <img 
                                   alt='cloud' 
                                   src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/fa-solid_cloud-download-alt.svg`} 
                              />
                         }
                    >
                         Download
                    </DownloadButton>
               </Stack> }
          </Stack>
     )
}

Header.propTypes = {
     framework: PropTypes.object.isRequired,
     title: PropTypes.string.isRequired,
     activePage: PropTypes.string.isRequired,
     onChangePage: PropTypes.func.isRequired
}

export default Header;