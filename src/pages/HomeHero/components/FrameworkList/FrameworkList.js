import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, CardActionArea, Grid, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'

const FrameworkList = ({ list, onPreview }) => {
     if(list.length <= 0){
          return(
               <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Box>
                         <img 
                              alt='404image' 
                              src={`${process.env.REACT_APP_PUBLIC_URL}/assets/26649.svg`} 
                              style={{ width: '100%', height: '223.57px'}}
                         />
                         <Box sx={{ marginTop: '38px'}}>
                              <Typography 
                                   align='center' 
                                   sx={{ fontSize: '24px', fontWeight: '500', lineHeight: '36px'}}
                              >
                                   Tidak ada yang bisa ditampilkan 🙏
                              </Typography>
                              <Typography 
                                   align='center' 
                                   color={'rgba(70, 70, 101, 0.6)'}
                                   fontSize='18px'
                                   lineHeight={'27px'}
                              >
                                   Silakan mencari di Framework atau Kategori lain
                              </Typography>
                         </Box>
                    </Box>
               </Box>
          )
     }

     return(
          <Grid container spacing={3}>
               { list.map((row, index) => <Grid item xs={12} lg={4} key={index}>
                    <CardActionArea onClick={() => onPreview(row)}>
                         <Box 
                              sx={{ 
                                   backgroundColor: '#F3F4F6', 
                                   border: '1px solid rgba(0, 0, 0, 0.1)',
                                   borderRadius: '10px',
                                   overflow: 'hidden'
                              }}
                         >
                              <Box sx={{ margin: '14px 48px 14px 48px'}}>
                                   <img 
                                        src={`${process.env.REACT_APP_PUBLIC_URL}${row.img}`}
                                        style={{width: '100%', height: '100%'}} 
                                        alt={`image_card${index}`} 
                                   />
                              </Box>
                              <Box sx={{ backgroundColor: '#FFFFFF', padding: '19px 19px'}}>
                                   <Typography variant='h6'>{ row.title } </Typography>
                                   <Stack direction={'row'} spacing={'10px'} style={{ marginTop: '7px'}}>
                                        <Avatar 
                                             alt={row.author} 
                                             src={`${process.env.REACT_APP_PUBLIC_URL}${row.person}`} 
                                             sx={{ width: 25, height: 25 }} 
                                        />
                                        <Typography 
                                             sx={{ 
                                                  fontSize: '14px', 
                                                  fontWeight: '500', 
                                                  lineHeight: '25.34px',
                                                  color: 'rgba(37, 39, 63, 0.7)'
                                             }}
                                        >
                                             { row.author }
                                        </Typography>
                                   </Stack>
                              </Box>
                         </Box>
                    </CardActionArea>
               </Grid>)}
          </Grid>
     )
}

FrameworkList.propTypes = {
     list: PropTypes.array.isRequired,
     onPreview: PropTypes.func.isRequired
}

export default FrameworkList;