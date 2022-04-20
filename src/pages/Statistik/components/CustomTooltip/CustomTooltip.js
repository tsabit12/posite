import { Box, Stack, Typography } from '@mui/material';
import React from 'react'
import { decimalNumber } from '../../../../utils';

const Circle = ({ color }) => <Box sx={{ width: '8px', height: '8px', borderRadius: '4px', backgroundColor: color }} />

const CustomTooltip = ({ active, payload, label }) => {
     if (active && payload && payload.length) {
       return (
          <Box sx={{ backgroundColor: '#081A51', borderRadius: '8px'}}>
               <Box sx={{ padding: '16px'}}>
                    <Typography fontSize={'16px'} color='#FFFFFF' fontFamily={'Gilory'}>{label} 2021</Typography>
                    
                    <Stack direction={'row'} justifyContent='space-between' sx={{ width: '240px'}}>
                         <Stack direction={'row'} alignItems='center' spacing={'10px'}>
                              <Circle color='#017EFA' />
                              <Typography color={'rgba(255, 255, 255, 0.7)'} fontSize='14px' fontWeight={'400'}>UI Komponen</Typography>
                         </Stack>
                         <Typography color={'#FFFFFF'} fontSize='14px' fontWeight={'400'}>
                              {decimalNumber(payload[1].value)}
                         </Typography>
                    </Stack>

                    <Stack direction={'row'} justifyContent='space-between' sx={{ width: '240px'}}>
                         <Stack direction={'row'} alignItems='center' spacing={'10px'}>
                              <Circle color='#30D987' />
                              <Typography color={'rgba(255, 255, 255, 0.7)'} fontSize='14px' fontWeight={'400'}>Front End</Typography>
                         </Stack>
                         <Typography color={'#FFFFFF'} fontSize='14px' fontWeight={'400'}>
                              {decimalNumber(payload[0].value)}
                         </Typography>
                    </Stack>

                    <Stack direction={'row'} justifyContent='space-between' sx={{ width: '240px'}}>
                         <Stack direction={'row'} alignItems='center' spacing={'10px'}>
                              <Circle color='#FD1F9B' />
                              <Typography color={'rgba(255, 255, 255, 0.7)'} fontSize='14px' fontWeight={'400'}>Kontributor</Typography>
                         </Stack>
                         <Typography color={'#FFFFFF'} fontSize='14px' fontWeight={'400'}>
                              {decimalNumber(payload[2].value)}
                         </Typography>
                    </Stack>
               </Box>
         </Box>
       );
     }
   
     return null;
};

export default CustomTooltip;