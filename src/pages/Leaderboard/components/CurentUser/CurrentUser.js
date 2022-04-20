import styled from '@emotion/styled';
import { Box, Stack, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import React from 'react'
import { DataFormater } from '../../../../utils';

const BoldText = styled('span')({
     color: '#FFF', 
     fontWeight: '600'
})

const CustomTableRow = styled(TableBody)({
     '& .MuiTableCell-root': {
          color: '#FFF',
          borderBottom: 'none',
          backgroundColor: '#4A3AFF',
          fontSize: '16px',
          fontWeight: '400',
          height: '40px'
     },
     ".MuiTableRow-root td:nth-of-type(1)": {
          borderRadius: '40px',
          width: '40px'
     },
     ".MuiTableRow-root td:nth-of-type(2)": {
          backgroundColor: 'transparent',
          width: '5px'
     },
     ".MuiTableRow-root td:nth-of-type(3)": {
          borderTopLeftRadius: '10px',
          borderBottomLeftRadius: '10px'
     },
     ".MuiTableRow-root td:last-of-type": {
          borderTopRightRadius: '10px',
          borderBottomRightRadius: '10px'
     }
}) 

const CurrentUser = ({ data: row }) => {
     return(
          <CustomTableRow>
               <TableRow>
                    <TableCell align='center'><span style={{ fontSize: '24px'}}>18</span></TableCell>
                    <TableCell />
                    <TableCell>
                         <Stack direction={'row'} spacing={'11px'}>
                              <Box sx={{ backgroundColor: '#E5E1FB', width: '30px', height: '30px', borderRadius: '15px', overflow: 'hidden'}}>
                                   <img src={row.imageUrl} alt='user' style={{ width: '100%'}} />
                              </Box>
                              <Typography color='#FFF'>Peringkatmu</Typography>
                         </Stack>
                    </TableCell>
                    <TableCell>Level {row.level}</TableCell>
                    <TableCell>
                         <Stack direction={'row'} spacing={'12px'}>
                              <img 
                                   src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/ic_round-control-point.svg`} 
                                   alt={`icon-plus`} 
                                   style={{
                                        width: '24px',
                                        height: '24px'
                                   }}
                              />
                              <BoldText>{ DataFormater(row.contribution) }</BoldText>&nbsp;Kontribusi
                         </Stack>
                    </TableCell>
                    <TableCell>
                         <Stack direction={'row'} spacing={'12px'}>
                              <img 
                                   src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/flat-color-icons_like.svg`} 
                                   alt={`icon-love`} 
                                   style={{
                                        width: '24px',
                                        height: '24px'
                                   }}
                              />
                              <BoldText>{ DataFormater(row.like) } </BoldText>&nbsp;Suka
                         </Stack>
                    </TableCell>
               </TableRow>
          </CustomTableRow>
     )
}

export default CurrentUser;