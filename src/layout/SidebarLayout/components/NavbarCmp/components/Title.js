import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ onClick }) => {
     return(
          <Stack 
               direction={'row'} 
               alignItems='center' 
               sx={{ 
                    height: '100%',
                    width: '280px',
                    backgroundColor: '#081A51'
               }}
               justifyContent='space-between'
          >
               <Box
                    display='flex'
                    alignItems={'center'}
                    justifyContent='center'
                    minHeight={'90px'}
                    sx={{width: '100%'}}
               >
                    <img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/logoputih.svg`} alt='logo' />
               </Box>
               <Box 
                    sx={{
                         cursor: 'pointer',
                         marginRight: '-16px'
                    }}
                    onClick={onClick}
               >
                    <img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/back-icon.svg`} alt='menu' />
               </Box>
          </Stack>
     )
}

Title.propTypes = {
     onClick: PropTypes.func.isRequired
}

export default Title;