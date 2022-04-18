import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types'
import { Box } from '@mui/system';
import styled from '@emotion/styled';

const ProgressContainer = styled(Box)({
     backgroundColor: '#FFF',
     width: '400px',
     display: 'flex',
     alignItems: 'center',
     height: '170px',
     justifyContent: 'center',
     borderRadius: '12px'
})

const BackdropLoader = ({ open }) => {
     return(   
          <Backdrop
               sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
               open={open}
               //onClick={onClose}
          >
               <ProgressContainer>
                    <Stack justifyContent={'center'} alignItems='center' spacing={'10px'}>
                         <CircularProgress sx={{ color:"#808080" }} />
                         <Typography variant='body1' textAlign='center'>Loading...</Typography>
                    </Stack>
               </ProgressContainer>
          </Backdrop>
     )
}

BackdropLoader.propTypes = {
     open: PropTypes.bool.isRequired
}

export default BackdropLoader;