import styled from '@emotion/styled';
import { Box, Button, InputBase, Menu, MenuItem, Paper, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { alpha } from '@mui/system';

const InputContainer = styled(Paper)(({ theme, err }) => ({
     backgroundColor: '#F7F7F8',
     marginTop: '8px',
     height: '55px',
     borderRadius: '10px',
     padding: '0px 20px',
     border: err === 'true' ? '0.5px solid red' : 'none'
}))

const StyledMenu = styled((props) => (
     <Menu
       elevation={0}
       anchorOrigin={{
         vertical: 'bottom',
         horizontal: 'left',
       }}
       transformOrigin={{
         vertical: 'top',
         horizontal: 'left',
       }}
       {...props}
     />
   ))(({ theme }) => ({
     '& .MuiPaper-root': {
       borderRadius: 6,
       marginTop: theme.spacing(1),
       minWidth: '730px',
       color:
         theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
       boxShadow:
         'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
       '& .MuiMenu-list': {
         padding: '4px 0',
       },
       '& .MuiMenuItem-root': {
         '& .MuiSvgIcon-root': {
           fontSize: 18,
           color: theme.palette.text.secondary,
           marginRight: theme.spacing(1.5),
         },
         '&:active': {
           backgroundColor: alpha(
             theme.palette.primary.main,
             theme.palette.action.selectedOpacity,
           ),
         },
       },
     },
}));

const ButtonOptions = styled(Button)(({ theme, err }) => ({
     backgroundColor: '#F7F7F8',
     border: err === 'true' ? '0.5px solid red' : 'none',
     color: 'rgba(37, 39, 63, 0.7)',
     fontSize: '14px',
     lineHeight: '21px',
     fontWeight: '400',
     height: '55px',
     marginTop: '8px',
     justifyContent: 'space-between',
     '&:hover': {
          backgroundColor: '#F7F7F8'
     }
}))  

const ErrLabel = styled(Typography)({
     color: 'red',
     fontSize: '13px',
     fontWeight: '400'
})

const CustomeInput = ({ 
     label, 
     inputProps, 
     type, 
     name, 
     options, 
     onChange,
     value,
     errors
}) => {
     const [anchorEl, setAnchorEl] = useState(null);

     const open = Boolean(anchorEl);

     const handleClick = (event) => setAnchorEl(event.currentTarget)

     const handleClose = (val) => {
          onChange(val, name)
          setAnchorEl(null);
     }

     if(type === 'input'){
          return (
               <Box>
                    <Typography>{label}</Typography>
                    <InputContainer elevation={0} err={errors[name] ? 'true':'false'}>
                         <InputBase 
                              sx={{ height: '100%' }}
                              fullWidth
                              { ...inputProps }
                              value={value}
                              onChange={onChange}
                              name={name}
                         />
                    </InputContainer> 
                    { errors[name] && <ErrLabel>{ errors[name] }</ErrLabel>}
               </Box>
          )
     }else if(type === 'select'){
          const choosed = options.find(row => row.value === value);

          return(
               <Box>
                    <Typography>{label}</Typography>
                    <ButtonOptions 
                         err={errors[name] ? 'true': 'false'}
                         fullWidth 
                         endIcon={<KeyboardArrowDownIcon />}
                         aria-controls={open ? `framework-menu-${name}` : undefined}
                         aria-haspopup="true"
                         aria-expanded={open ? 'true' : undefined}
                         onClick={handleClick}
                         disableRipple
                    >
                         <Box sx={{ display: 'flex', alignItems: 'center'}}>
                              <span>
                                   { choosed ? choosed.name : inputProps.placeholder }
                              </span>
                         </Box>
                    </ButtonOptions>
                    { errors[name] && <ErrLabel>{ errors[name] }</ErrLabel>}
                    <StyledMenu
                         id={`framework-menu-${name}`}
                         MenuListProps={{
                              'aria-labelledby': `framework-menu-${name}`,
                         }}
                         anchorEl={anchorEl}
                         open={open}
                         onClose={() => setAnchorEl(null)}
                    >
                         { options.map((row, index) => <MenuItem key={index} onClick={() => handleClose(row.value)}>
                              <Stack direction={'row'} spacing={1}>
                                   <span>{row.name}</span>
                              </Stack>
                         </MenuItem>)}
                    </StyledMenu>
               </Box>
          )
     }else{
          return null;
     }
}

CustomeInput.defaultProps = {
     inputProps: { placeholder: 'Enter some value' },
     options: []
}

CustomeInput.propTypes = {
     inputProps: PropTypes.object,
     label: PropTypes.string.isRequired,
     type: PropTypes.string.isRequired,
     name: PropTypes.string.isRequired,
     options: PropTypes.array,
     onChange: PropTypes.func,
     value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
     errors: PropTypes.object.isRequired
}

export default CustomeInput;