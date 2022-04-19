import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const Circle = ({ color }) => (
     <Box 
          sx={{ 
               width: '20px', 
               height: '20px', 
               backgroundColor: color,
               borderRadius: '10px'
          }}
     />
)

const COLORS = ['#017EFA', '#51CBFF'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
     <g>
          <text x={x} y={y} fill="white" fontWeight='bold' fontFamily='Gilory' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
               {`${(percent * 100).toFixed(0)}%`}
          </text>

          <text x={cx} y={cy} dy={8} textAnchor="middle" fill={'#081A51'} fontFamily='Poppins' fontSize={'14px'}>
               Komponen
          </text>
     </g>
  );
};

const DataPie = ({ data }) => {
     return(
          <React.Fragment>
               <Stack direction={'row'} justifyContent='space-between' alignItems={'center'} sx={{ padding: '16px'}}>
                    <Stack direction={'row'} alignItems='center' spacing={'16px'}>
                         <img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/sebaran.svg`} alt='sebaran' />
                         <Typography variant='cardtitle'>Sebaran</Typography>
                    </Stack>
                    <Box sx={{ cursor: 'pointer'}}>
                         <Stack direction='row' alignItems={'center'} spacing={'8px'}>
                              <Typography variant='h5' sx={{ textTransform: 'capitalize'}} fontWeight='600' color='#017EFA'>See Detail</Typography>
                              <img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/bx_bxs-chevron-right.svg`} alt='arrow-right' />
                         </Stack>
                    </Box>
               </Stack>
               <Divider />
               <Box sx={{ padding: '0px 0px 40px 0'}}>
                    <ResponsiveContainer width='99%' height={280}>
                         <PieChart width={730} height={250}>
                              <Pie 
                                   data={data} 
                                   dataKey="value" 
                                   nameKey="name" 
                                   cx="50%" 
                                   cy="50%" 
                                   innerRadius={60} 
                                   outerRadius={100} 
                                   fill="#82ca9d" 
                                   labelLine={false}
                                   label={renderCustomizedLabel}
                              >
                                   {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                   ))}
                              </Pie>
                         </PieChart>
                    </ResponsiveContainer>
                    <Stack direction={'row'} justifyContent='center' spacing={'28px'}>
                         <Stack direction={'row'} spacing='8px' alignItems='center'>
                              <Circle color='#017EFA' />
                              <Typography variant='h7' fontWeight={'400'} color='#081A51'>UI Komponen</Typography>
                         </Stack>
                         <Stack direction={'row'} spacing='8px' alignItems='center'>
                              <Circle color='#51CBFF' />
                              <Typography variant='h7' fontWeight={'400'} color='#081A51'>Front End Library</Typography>
                         </Stack>
                    </Stack>
               </Box>
          </React.Fragment>
     )
}

DataPie.propTypes = {
     data: PropTypes.array.isRequired
}


export default DataPie;