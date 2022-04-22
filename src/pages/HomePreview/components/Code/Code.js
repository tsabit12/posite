import { Box } from '@mui/material';
import React, { useState } from 'react'
import { CodeEditorEditable } from 'react-code-editor-editable'

import 'highlight.js/styles/dracula.css';

const Code = () => {
     const [value, setvalue] = useState(`<div>
     <p>hello world</p>
</div>
`);

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

export default Code;