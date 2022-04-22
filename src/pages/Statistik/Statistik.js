import styled from '@emotion/styled';
import { Grid, Paper } from '@mui/material';
import React, { useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { DataFormater } from '../../utils';
import { ButtonGroup, CustomCursor, CustomTooltip, DataPie, Total, CardHeader } from './components';
import TopKomponen from './components/TopKomponen';

const data = [
     {name: 'Jan', ft: 500, ui: 600, kt: 300 }, 
     {name: 'Feb', ft: 800, ui: 700, kt: 550  },
     {name: 'Mar', ft: 700, ui: 550, kt: 450  },
     {name: 'Apr', ft: 500, ui: 750, kt: 600  },
     {name: 'Mei', ft: 550, ui: 600, kt: 700  },
     {name: 'Jun', ft: 850, ui: 700, kt: 500  },
     {name: 'Jul', ft: 750, ui: 1078, kt: 400  },
     {name: 'Aug', ft: 600, ui: 500, kt: 350  },
     {name: 'Sep', ft: 650, ui: 600, kt: 400  },
     {name: 'Oct', ft: 680, ui: 750, kt: 500  },
     {name: 'Nov', ft: 850, ui: 900, kt: 450  },
     {name: 'Dec', ft: 1000, ui: 800, kt: 550  },
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

const data03 = [
     {
          "title": "Hero dengan form",
          "like": 124000,
          "likePersentage": "12%",
          "component": "UI Komponen",
          "date": "14 April 2019"
     },
     {
          "title": "Aplikasi Mobile POSAJA",
          "like": 124000,
          "likePersentage": "12%",
          "component": "UI Komponen",
          "date": "14 April 2019"
     },
     {
          "title": "Aplikasi Mobile POSPAY",
          "like": 125000,
          "likePersentage": "12%",
          "component": "UI Komponen",
          "date": "14 April 2019"
     },
     {
          "title": "Aplikasi Mobile NIPOS",
          "like": 120000,
          "likePersentage": "12%",
          "component": "UI Komponen",
          "date": "14 April 2019"
     }
]


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
                         <Grid container justifyContent={'space-between'} sx={{ marginBottom: '27px'}} alignItems='center' spacing={'24px'}>
                              <Grid item lg={9} xs={12}>
                                   <Total ui={1072} fe={1150000000} kt={35000} />
                              </Grid>
                              <Grid item lg={3} xs={12}>
                                   <ButtonGroup 
                                        handleClick={handleClick}
                                        activeButton={activeButton}
                                   />
                              </Grid>
                         </Grid>
                         <ResponsiveContainer width='99%' height={350}>
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
                                   <Line 
                                        type="basic" 
                                        dataKey="kt" 
                                        dot={{ stroke: '#FD1F9B', strokeWidth: 5 }} 
                                        stroke='#FD1F9B' 
                                        strokeWidth={3} 
                                        activeDot={{ stroke: '#FD1F9B', strokeWidth: 5, r: 10, fill: '#FFF' }}
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
                    <CardLayout elevation={0} style={{ padding: 0, height: '100%'}}>
                         <CardHeader iconColor='#017EFA' title='Demographic' />
                         <DataPie data={data02} />
                    </CardLayout>
               </Grid>
               <Grid item xs={12} lg={8}>
                    <CardLayout elevation={0} style={{ padding: 0, height: '100%'}}>
                         <CardHeader iconColor='#51CBFF' title='UI Komponen Terbaik' />
                         <TopKomponen list={data03} />
                    </CardLayout>
               </Grid>
          </Grid>
     )
}

export default Statistik;