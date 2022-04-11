import { Box, Breadcrumbs, Grid, Link, Typography } from '@mui/material';
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { FrameworkList, FrameworkMenu } from './components';
import frameworks from '../../dummy/hero.json';

const headerlist = [
     { name: 'Bagian Hero', count: 123 },
     { name: 'Element', count: 87 },
     { name: 'Headings', count: 98 },
     { name: 'Data Display', count: 11 },
     { name: 'list', count: 13},
     { name: 'Form', count: 15 },
     { name: 'Navigasi', count: 18 },
     { name: 'layout', count: 19 },
     { name: 'Banner', count: 1 },
     { name: 'Karir', count: 5 }
]

const HomeHero = (props) => {
     const handlePreview = (framework) => {
          props.history.push(`/home/preview?type=Bagian Hero&name=${framework.title}&id=${framework.id}`)
     }

     return(
          <Box>
               <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
               >
                    <Link 
                         underline="hover" 
                         color="inherit" 
                         onClick={() => props.history.replace("/home")}
                         sx={{ cursor: 'pointer'}}
                    >
                         Beranda
                    </Link>
                    <Typography>Bagian Hero</Typography>
               </Breadcrumbs>
               <Box
                    sx={{
                         backgroundImage: `url(${process.env.REACT_APP_PUBLIC_URL}/assets/unsplash__x335IZXxfc.png)`,
                         height: '7vh',
                         backgroundSize: 'cover',
                         borderRadius: '10px',
                         display: 'flex',
                         alignItems: 'center',
                         padding: '0 59px 0 59px',
                         marginTop: '16px'
                    }}
               >
                    <Typography variant='h4'>Bagian Hero</Typography>
               </Box>
               <Grid container spacing={'21px'} sx={{ marginTop: '24px'}}>
                    <Grid item xs={12} lg={3}>
                         <FrameworkMenu headers={headerlist} />
                    </Grid>
                    <Grid item xs={12} lg={9}>
                         <FrameworkList 
                              list={frameworks} 
                              onPreview={handlePreview}
                         />
                    </Grid>
               </Grid>
          </Box>
     )
}

export default HomeHero;