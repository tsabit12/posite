
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const ProfileButton = ({ fullname, imageUrl, level }) => {
     return(
          <Box
               sx={{
                    cursor: 'pointer',
                    padding: 1,
                    borderRadius: 1,
                    '&:hover': {
                         backgroundColor: '#F5F7FB'
                    }
               }}
          >
               <Stack spacing={'12px'} direction="row" alignItems="center">
                    <img 
                         src={imageUrl} 
                         alt={fullname} 
                         referrerPolicy='no-referrer' 
                         style={{
                              width: '38px',
                              height: '38px',
                              borderRadius: '19px'
                         }}
                    />
                    {/* <Avatar
                         alt={fullname}
                         src={imageUrl}
                         sx={{ width: 38, height: 38 }}
                         referrerPolicy="no-referrer"
                    /> */}
                    
                    <Box>
                         <Typography fontSize={'16px'} lineHeight='19.36px' textAlign='left' color='#000000'>{ fullname }</Typography>
                         <Typography fontSize={'14px'} lineHeight='16.94px' textAlign='left' color='rgba(0, 0, 0, 0.3)'>Level&nbsp;{ level }</Typography>
                    </Box>
                    
                    <KeyboardArrowDownIcon sx={{ color: '#9A9A9A'}} />
                    
               </Stack>
          </Box>
     )
}

ProfileButton.defaultProps = {
     imageUrl: ''
}

ProfileButton.propTypes = {
     fullname: PropTypes.string.isRequired,
     imageUrl: PropTypes.string,
     level: PropTypes.number
}

export default ProfileButton;