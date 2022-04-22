import { Breadcrumbs, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import queryString from 'query-string'
import { Box } from '@mui/system';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import jsonsdata from '../../dummy/hero.json';
import { Code, Header, Preview } from './components';

const HomePreview = (props) => {
     const [activePage, setactivePage] = useState('preview');

     let isExistPage = false;
     let breadcrumbdata = {};
     let framework = {};

     if(props.location.search){
          isExistPage = true;     
          breadcrumbdata = queryString.parse(props.location.search);
          const search = jsonsdata.find(row => row.id === breadcrumbdata.id);
          if(search){
               framework = search;
          }
     }

     if(isExistPage){
          return (
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
                         <Typography>{ breadcrumbdata.type }</Typography>
                         <Typography>{ breadcrumbdata.name }</Typography>
                    </Breadcrumbs>
                    <Box sx={{ marginTop: '16px'}}>
                         <Header 
                              title={breadcrumbdata.name}
                              framework={framework}
                              activePage={activePage}
                              onChangePage={(value) => setactivePage(value)}
                         />

                         { activePage === 'preview' ? <Preview 
                              breadcrumbdata={breadcrumbdata} 
                              coverUrl={framework.img}
                         /> : <Code /> }
                    </Box>
               </Box>
          )
     }

     return(
          <Typography>Not found</Typography>
     )
}

HomePreview.propTypes = {
     location: PropTypes.shape({
       search: PropTypes.string.isRequired
     }).isRequired
}

export default HomePreview;