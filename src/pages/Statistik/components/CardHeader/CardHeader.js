import styled from '@emotion/styled';
import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types'

const BoxIcon = styled(Box)({
     width: '34px',
     height: '34px',
     borderRadius: '17px',
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center'
})

const CardHeader = ({ title, iconColor }) => {
     return(
          <React.Fragment>
               <Stack direction={'row'} justifyContent='space-between' alignItems={'center'} sx={{ padding: '16px'}}>
                    <Stack direction={'row'} alignItems='center' spacing={'16px'}>
                         <BoxIcon sx={{ backgroundColor: iconColor }}>
                              <img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/Pipe.svg`} alt='sebaran' />
                         </BoxIcon>
                         <Typography variant='cardtitle'>{ title }</Typography>
                    </Stack>
                    <Box sx={{ cursor: 'pointer'}}>
                         <Stack direction='row' alignItems={'center'} spacing={'8px'}>
                              <Typography variant='h5' sx={{ textTransform: 'capitalize'}} fontWeight='600' color='#017EFA'>See Detail</Typography>
                              <img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/bx_bxs-chevron-right.svg`} alt='arrow-right' />
                         </Stack>
                    </Box>
               </Stack>
               <Divider />
          </React.Fragment>
     )
}

CardHeader.propTypes = {
     title: PropTypes.string.isRequired,
     iconColor: PropTypes.string.isRequired
}

export default CardHeader;