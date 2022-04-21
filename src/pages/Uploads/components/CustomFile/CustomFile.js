import styled from '@emotion/styled';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { FileUploader } from "react-drag-drop-files";

const InputFiles = styled(Box)(({ theme, warna }) => ({
     border: `2px dashed ${warna}`,
     borderRadius: '10px',
     boxSizing: 'border-box',
     height: '72px',
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     padding: '5px',
     width: '100%',
     cursor: 'pointer'
}));

const ErrLabel = styled(Typography)({
     color: 'red',
     fontSize: '14px',
     fontWeight: '400'
})

const CustomFile = ({ errors, seterrors, label, name, value, onChange, allowedTypes }) => {

     return(
          <Stack sx={{ width: '100%'}} spacing='8px'>
               <Typography>{ label }</Typography>
               <FileUploader
                    multiple={true}
                    handleChange={onChange}
                    name={name}
                    types={allowedTypes}
                    onTypeError={() => seterrors(prev => ({ ...prev, [name]: `Allowed file is ${allowedTypes.toString()}` }))}
               >
                    <InputFiles warna={errors[name] ? 'red' : value ? '#24d152' : '#2D9CDB'}>
                         <Typography 
                              variant='h7' 
                              align='center'
                              fontWeight={'400'}
                         >
                              { errors[name] ? <ErrLabel>{ errors[name] }</ErrLabel> : <React.Fragment>
                                   { value ? value[0].name :  <React.Fragment>
                                        Klik untuk mengunggah<br />atau <span style={{ fontWeight: '700'}}>drop dan drag file</span>
                                   </React.Fragment> }
                              </React.Fragment> }
                         </Typography>
                    </InputFiles>
               </FileUploader>
          </Stack>
     )
}

CustomFile.propTypes = {
     errors: PropTypes.object.isRequired,
     seterrors: PropTypes.func.isRequired,
     label: PropTypes.string.isRequired,
     name: PropTypes.string.isRequired,
     value: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
     onChange: PropTypes.func.isRequired,
     allowedTypes: PropTypes.array.isRequired
}

export default CustomFile;