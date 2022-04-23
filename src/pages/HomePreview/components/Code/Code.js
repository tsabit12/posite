import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { CodeEditorEditable } from 'react-code-editor-editable'
import PropTypes from 'prop-types'

import 'highlight.js/styles/dracula.css';
import api from '../../../../api';

const Code = ({ codeurl }) => {
     const [value, setvalue] = useState('');

     useEffect(() => {
          if(codeurl){
               (async () => {
                    try {
                         const source        = await api.source.getcode(codeurl);
                         setvalue(source);
                    } catch (error) {
                         console.log(error);
                    }
               })();
          }
     }, [codeurl]);

     return(
          <Box sx={{ marginTop: '16px'}}>
               <CodeEditorEditable
                    value={value}
                    setValue={setvalue}
                    width='100%'
                    height='50vh'
                    language='html'
                    inlineNumbers
                    borderRadius='20px'
                    caretColor={'red'}
               />
          </Box>
     )
}

Code.propTypes = {
     codeurl: PropTypes.string.isRequired
}

export default Code;