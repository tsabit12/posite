import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react';
import { Navbar } from './components';

const Content = styled('div')(() => ({
     marginTop: '89px',
     padding: '39px 84.5px 0px 84.5px'
}))

const MinimalLayout = ({ children }) => {
     return(
          <Box>
               <Navbar /> 
               <Content>
                    { children }
               </Content>
               
          </Box>
     )
}

export default MinimalLayout;