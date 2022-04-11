import { Box, Breadcrumbs, Grid, Link, Typography } from '@mui/material';
import React, { useState } from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { FrameworkList, FrameworkMenu } from './components';
import frameworks from '../../dummy/hero.json';
import listbagian from '../../dummy/bagianhero.json';

const HomeHero = (props) => {
     const [componentlist, setcomponentlist] = useState(frameworks);

     const handlePreview = (component) => {
          props.history.push(`/home/preview?type=Bagian Hero&name=${component.title}&id=${component.id}`)
     }
     
     const handleChangeMenu = (componentid, frameworkid) => {
          let finded = [];
          if(frameworkid === '00') {
               finded = frameworks.filter(row => row.componentid === componentid);
          }else{
               finded = frameworks.filter(row => row.componentid === componentid && row.frameworkid === frameworkid);
          }

          setcomponentlist(finded);
     };

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
                         <FrameworkMenu headers={listbagian} onChange={handleChangeMenu} />
                    </Grid>
                    <Grid item xs={12} lg={9}>
                         <FrameworkList 
                              list={componentlist} 
                              onPreview={handlePreview}
                         />
                    </Grid>
               </Grid>
          </Box>
     )
}

export default HomeHero;