import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

const CardOne = () => {
     return(
          <Box 
               sx={{ 
                    backgroundColor: '#F7F7FB', 
                    height: '40vh', 
                    borderRadius: '22.71px', 
                    width: '40%', 
                    padding: '39.24px 38.8px',
                    display: {
                         lg: 'block',
                         xs: 'none'
                    }
               }}
          >
               <Stack spacing={2}>
                    <Stack direction={'row'} spacing={1} alignItems='center'>
                         <Box 
                              sx={{
                                   width: '20.05px',
                                   height: '20.05px',
                                   backgroundColor: '#4A3AFF',
                                   borderRadius: '10px'
                              }}
                         />
                         <Box 
                              sx={{
                                   backgroundColor: '#D2D5EE',
                                   borderRadius: '22.36px',
                                   height: '11.79px',
                                   width: '87.62px'
                              }}
                         />
                    </Stack>

                    <Stack direction={'row'} spacing={1} alignItems='center'>
                         <Box 
                              sx={{
                                   width: '20.05px',
                                   height: '20.05px',
                                   backgroundColor: '#D2D5EE',
                                   borderRadius: '10px'
                              }}
                         />
                         <Box 
                              sx={{
                                   backgroundColor: '#D2D5EE',
                                   borderRadius: '22.36px',
                                   height: '11.79px',
                                   width: '62.07px'
                              }}
                         />
                    </Stack>
                    <Stack direction={'row'} spacing={1} alignItems='center'>
                         <Box 
                              sx={{
                                   width: '20.05px',
                                   height: '20.05px',
                                   backgroundColor: '#D2D5EE',
                                   borderRadius: '10px'
                              }}
                         />
                         <Box 
                              sx={{
                                   backgroundColor: '#D2D5EE',
                                   borderRadius: '22.36px',
                                   height: '11.79px',
                                   width: '102.08px'
                              }}
                         />
                    </Stack>
               </Stack>
          </Box>
     )
}

export default CardOne;