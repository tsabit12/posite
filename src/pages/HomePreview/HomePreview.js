import { Avatar, Breadcrumbs, Button, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';
import queryString from 'query-string'
import { Box } from '@mui/system';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import jsonsdata from '../../dummy/hero.json';
import styled from '@emotion/styled';

const DownloadButton = styled(Button)({
     backgroundColor: '#F68407',
     //height: '100%',
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

const PreviewButton = styled(Button)({
     backgroundColor: '#FFFFFF',
     color: 'rgba(37, 39, 63, 0.7)',
     '&:hover': {
          backgroundColor: '#FFFFFF'
     },
     padding: '4px 15px'
})

const HomePreview = (props) => {
     let isExistPage = false;
     let breadcrumbdata = {};
     let framework = {};

     if(props.location.search){
          isExistPage = true;     
          breadcrumbdata = queryString.parse(props.location.search);
          const search = jsonsdata.find(row => row.id === breadcrumbdata.id);
          if(search){
               framework = search;
          }
     }

     if(isExistPage){
          return (
               <Box>
                    <Breadcrumbs
                         separator={<NavigateNextIcon fontSize="small" />}
                         aria-label="breadcrumb"
                    >
                         <Link 
                              underline="hover" 
                              color="inherit" 
                              onClick={() => props.history.replace("/home")}
                              sx={{ cursor: 'pointer'}}
                         >
                              Beranda
                         </Link>
                         <Typography>{ breadcrumbdata.type }</Typography>
                         <Typography>{ breadcrumbdata.name }</Typography>
                    </Breadcrumbs>
                    <Box sx={{ marginTop: '16px'}}>
                         <Stack direction={'row'} justifyContent='space-between' alignItems={'center'}>
                              <Box>
                                   <Typography variant='title2'>{ breadcrumbdata.name }</Typography>
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
                                             borderRadius: '10px',
                                             cursor: 'pointer'
                                        }}
                                   >
                                        <Stack direction={'row'} spacing={'10px'} alignItems='center'>
                                             <PreviewButton 
                                                  disableRipple
                                                  startIcon={<img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/ant-design_eye-outlined.svg`} alt='eye-open' />}
                                             >
                                                  Preview
                                             </PreviewButton>
                                             <img alt='code' src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/bx_code-alt.svg`} />
                                             <Typography fontWeight={'500'} color='rgba(37, 39, 63, 0.7)'>Code</Typography>
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

                         <Box sx={{ marginTop: '24px'}}>
                              <Box sx={{ padding: '19px 24px', backgroundColor: '#F3F4F6', borderRadius: '10px', display: 'flex', justifyContent: 'center'}}>
                                   <img 
                                        alt={breadcrumbdata.name}
                                        src={`${process.env.REACT_APP_PUBLIC_URL}${framework.img}`}
                                        style={{ width: '100%' }}
                                   />
                              </Box>
                         </Box>
                    </Box>
               </Box>
          )
     }

     return(
          <Typography>jeheh</Typography>
     )
}

HomePreview.propTypes = {
     location: PropTypes.shape({
       search: PropTypes.string.isRequired
     }).isRequired
}

export default HomePreview;