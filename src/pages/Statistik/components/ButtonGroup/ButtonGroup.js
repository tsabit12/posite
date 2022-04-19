import styled from '@emotion/styled';
import { Button, Stack } from '@mui/material';
import React from 'react'
import PropTypes from 'prop-types'

const StyledButton = styled(Button)(({ theme, active }) => ({
     backgroundColor: active ? '#FFF' : 'transparent',
     width: '107px',
     height: '40px',
     '&:hover': {
          backgroundColor: active ? '#FFF' : '#F5F7FB'
     },
     color: active ? '#017EFA' : '#A9ABB0',
     fontSize: '18px',
     fontWeight: '400',
     borderRadius: '6px'
}));

const ButtonGroup = ({ activeButton, handleClick }) => {
     return(
          <Stack direction={'row'} sx={{ backgroundColor: '#F5F7FB', borderRadius: '8px', padding: '4px'}} spacing='4px'>
               <StyledButton 
                    disableRipple 
                    active={activeButton === 1 ? true : false }
                    onClick={() => handleClick(1)}
               >
                    Daily
               </StyledButton>
               <StyledButton 
                    disableRipple 
                    active={activeButton === 2 ? true : false }
                    onClick={() => handleClick(2)}
               >
                    Weekly
               </StyledButton>
               <StyledButton 
                    disableRipple 
                    active={activeButton === 3 ? true : false }
                    onClick={() => handleClick(3)}
               >
                    Monthly
               </StyledButton>
          </Stack>
     )
}

ButtonGroup.propTypes = {
     activeButton: PropTypes.number.isRequired,
     handleClick: PropTypes.func.isRequired
}

export default ButtonGroup;