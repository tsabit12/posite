import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { NavbarCmp, Sidebar } from './components';
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import { getPageTitle } from '../../utils';
import { useLocation } from 'react-router-dom';

const LayoutRoot = styled('div')(({ theme, width }) => ({
     display: 'flex',
     flex: '1 1 auto',
     maxWidth: '100%',
     paddingTop: '90px',
     [theme.breakpoints.up('lg')]: {
       paddingLeft: width
     }
}));

const allmenus = [
     {
          path: '/dashboard',
          startIcon: `${process.env.REACT_APP_PUBLIC_URL}/assets/icon/Chart_fill.svg`,
          title: 'Dashboard'
     },
]

const SidebarLayout = (props) => {
     const { pathname } = useLocation();
     const theme = useTheme();
     const title = getPageTitle(pathname);
     const lgUp = useMediaQuery(theme.breakpoints.up('lg'), {
          defaultMatches: true,
          noSsr: false
     });

     const [drawerIsOpen, setdrawerIsOpen] = useState(true);

     useEffect(() => {
          if(!lgUp){
               setdrawerIsOpen(false);
          }else{
               setdrawerIsOpen(true);
          }
     }, [lgUp]);

     return(
          <LayoutRoot width={drawerIsOpen ? '280px' : 0}>
               <NavbarCmp 
                    drawerIsOpen={drawerIsOpen} 
                    lgUp={lgUp}
                    title={title}
                    session={props.session}
                    onClickMenu={() => setdrawerIsOpen(!drawerIsOpen)}
               />

               <Sidebar
                    pathname={pathname}
                    lgUp={lgUp}
                    open={drawerIsOpen}
                    menulist={allmenus}
                    closeDrawer={() => setdrawerIsOpen(false)}
               />

               <Box
                    sx={{
                         display: 'flex',
                         flex: '1 1 auto',
                         flexDirection: 'column',
                         width: '100%',
                         padding: '17px 32px'
                    }}
                    component='main'
               >
                    { props.children }
               </Box>
          </LayoutRoot>
     )
}

SidebarLayout.propTypes = {
     children: PropTypes.node,
     session: PropTypes.object.isRequired
}

export default SidebarLayout;