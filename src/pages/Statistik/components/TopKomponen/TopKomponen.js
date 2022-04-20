import styled from '@emotion/styled';
import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types'
import { DataFormater } from '../../../../utils';

const CustomTableHead = styled(TableHead)({
     '& .MuiTableCell-root': {
          borderBottom: 'none',
          fontSize: '16px',
          fontWeight: 600,
          fontFamily: 'Poppins',
          lineHeight: '24px',
          textTransform: 'capitalize',
          color: '#939393',
     }
})

const CustomTableBody = styled(TableBody)({
     '& .MuiTableCell-root': {
          color: '#081A51',
          borderBottom: 'none',
          backgroundColor: 'rgba(250, 250, 250, 1)',
     },
     '.MuiTableRow-root td:first-of-type': {
          borderTopLeftRadius: '5px',
          borderBottomLeftRadius: '5px'
     },
     '.MuiTableRow-root td:last-of-type': {
          borderTopRightRadius: '5px',
          borderBottomRightRadius: '5px'
     }
})

const TopKomponen = ({ list }) => {
     return(
          <Box sx={{ padding: '16px 24px'}}>
               <Table>
                    <CustomTableHead>
                         <TableRow>
                              <TableCell>Nama Komponen</TableCell>
                              <TableCell align='center'>Suka</TableCell>
                              <TableCell>Komponen</TableCell>
                              <TableCell>Tanggal Upload</TableCell>
                         </TableRow>
                    </CustomTableHead>
                    <CustomTableBody>
                         { list.map((row, index) => <TableRow key={index}>
                              <TableCell>{row.title}</TableCell>
                              <TableCell align='center'>
                                   <span>{DataFormater(row.like)} <span style={{ color: '#30D987'}}>+{row.likePersentage}</span></span>
                              </TableCell>
                              <TableCell>{row.component}</TableCell>
                              <TableCell>{row.date}</TableCell>
                         </TableRow> )}
                    </CustomTableBody>
               </Table>
          </Box>
     )
}

TopKomponen.propTypes = {
     list: PropTypes.array.isRequired
}

export default TopKomponen;