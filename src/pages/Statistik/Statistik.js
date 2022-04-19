import styled from '@emotion/styled';
import { Grid, Paper, Stack } from '@mui/material';
import React, { useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { DataFormater } from '../../utils';
import { ButtonGroup, CustomCursor, CustomTooltip, DataPie, Total } from './components';

const data = [
     {name: 'Jan', ft: 500, ui: 600 }, 
     {name: 'Feb', ft: 800, ui: 700 },
     {name: 'Mar', ft: 700, ui: 550 },
     {name: 'Apr', ft: 500, ui: 750 },
     {name: 'Mei', ft: 550, ui: 600 },
     {name: 'Jun', ft: 850, ui: 700 },
     {name: 'Jul', ft: 750, ui: 1078 },
     {name: 'Aug', ft: 600, ui: 500 },
     {name: 'Sep', ft: 650, ui: 600 },
     {name: 'Oct', ft: 680, ui: 750 },
     {name: 'Nov', ft: 850, ui: 900 },
     {name: 'Dec', ft: 1000, ui: 800 },
]

const data02 = [
     {
       "name": "Group A",
       "value": 60
     },
     {
       "name": "Group B",
       "value": 40
     }
];


const CardLayout = styled(Paper)({
     backgroundColor: '#FFFFFF',
     boxShadow: '0px 3px 10px #F1F2FA',
     borderRadius: '8px',
     padding: '42px 42px'
})

const Statistik = () => {
     const [activeButton, setactiveButton] = useState(1);

     const handleClick = (activeKey) => setactiveButton(activeKey)

     return(
          <Grid container spacing={'24px'}>
               <Grid item xs={12}>
                    <CardLayout elevation={0}>
                         <Stack direction={'row'} justifyContent='space-between' sx={{ marginBottom: '27px'}} alignItems='center'>
                              <Total ui={1072} fe={1098} />
                              <ButtonGroup 
                                   handleClick={handleClick}
                                   activeButton={activeButton}
                              />
                         </Stack>
                         <ResponsiveContainer width='99%' height={400}>
                              <LineChart data={data}>
                                   <Line 
                                        type="basic" 
                                        dataKey="ft" 
                                        dot={{ stroke: '#30D987', strokeWidth: 5 }} 
                                        stroke='#30D987' 
                                        strokeWidth={3} 
                                        activeDot={{ stroke: '#30D987', strokeWidth: 5, r: 10, fill: '#FFF' }}
                                   />
                                   <Line 
                                        type="basic" 
                                        dataKey="ui" 
                                        dot={{ stroke: '#017EFA', strokeWidth: 5 }} 
                                        stroke='#017EFA' 
                                        strokeWidth={3} 
                                        activeDot={{ stroke: '#017EFA', strokeWidth: 5, r: 10, fill: '#FFF' }}
                                   />
                                   <CartesianGrid strokeDasharray="3 3" stroke='#DADADA' />
                                   <XAxis 
                                        dataKey="name" 
                                        fontFamily='Gilory'
                                        fontSize={'12px'}
                                   />
                                   <YAxis tickFormatter={DataFormater} fontFamily='Gilory' fontSize={'12px'} />
                                   <Tooltip 
                                        content={<CustomTooltip />} 
                                        cursor={<CustomCursor /> }
                                   />
                              </LineChart>
                         </ResponsiveContainer>
                    </CardLayout>
               </Grid>
               <Grid item xs={12} lg={4}>
                    <CardLayout elevation={0} style={{ padding: 0}}>
                         <DataPie data={data02} />
                    </CardLayout>
               </Grid>
          </Grid>
     )
}

export default Statistik;