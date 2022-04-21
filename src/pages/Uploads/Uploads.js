import styled from '@emotion/styled';
import { Box, Button, Divider, Paper, Stack, Typography } from '@mui/material';
import React, { useState } from 'react'
import { CustomeInput, CustomFile } from './components';

const CardLayout = styled(Paper)({
     backgroundColor: '#FFF',
     minWidth: '730px',
     padding: '21px 41px',
     borderRadius: '20px'
})

const frameworks = [
     { name: "HTML", value: 1},
     { name: "React", value: 2},
     { name: "Bootstrap", value: 3},
     { name: "Tailwind", value: 4},
]

const catgories = [
     { name: "Bagian", value: 1},
     { name: "Element", value: 2},
     { name: "Headings", value: 3},
     { name: "Data Display", value: 4},
     { name: "List", value: 5},
     { name: "Form", value: 6},
     { name: "Navigasi", value: 7},
     { name: "Layout", value: 8},
     { name: "Banner", value: 9},
     { name: "Karir", value: 10},
]

const Uploads = () => {
     const [berkas, setberkas] = useState({
          file: null,
          cover: null,
          framework: '00',
          category: '00'
     })
     const [errors, seterrors] = useState({});

     const handleChangeFile = (file) => {
          setberkas(prev => ({ ...prev, file: file.length > 0 ? file : null }));
          seterrors(prev => ({ ...prev, file: undefined }));
     }

     const handleChangeCover = (file) => {
          setberkas(prev => ({ ...prev, cover: file.length > 0 ? file : null }));
          seterrors(prev => ({ ...prev, cover: undefined }));
     }

     const handleChangeSelect = (value, name) => {
          setberkas(prev => ({ ...prev, [name]: value }));
     }

     const { file, cover } = berkas;

     return(
          <Stack direction={'row'} justifyContent='center' alignItems={'center'} sx={{ height: '80vh'}}>
               <CardLayout>
                    <Stack spacing={'16px'}>
                         <Typography variant='cardtitle'>Upload File UI Komponen</Typography>
                         <Divider />
                         <Stack spacing={'17px'}>
                              <CustomeInput 
                                   label='Judul Komponen' 
                                   inputProps={{
                                        placeholder: 'Masukan Judul Komponen'
                                   }}
                                   type='input'
                                   name='title'
                              />
                              <CustomeInput 
                                   label='Pilih Kategori' 
                                   inputProps={{
                                        placeholder: 'Pilih kategori'
                                   }}
                                   type='select'
                                   name='category'
                                   onChange={handleChangeSelect}
                                   options={catgories}
                                   value={berkas.category}
                              />
                              <CustomeInput 
                                   label='Pilih Framework' 
                                   inputProps={{
                                        placeholder: 'Pilih Framework'
                                   }}
                                   type='select'
                                   name='framework'
                                   options={frameworks}
                                   onChange={handleChangeSelect}
                                   value={berkas.framework}
                              />
                              <Stack direction={'row'} spacing='16px'>
                                   <CustomFile 
                                        name='cover'
                                        label='Upload Cover'
                                        value={cover}
                                        onChange={handleChangeCover}
                                        errors={errors}
                                        seterrors={seterrors}
                                        allowedTypes={["JPEG","PNG","JPG","SVG"]}
                                   />
                                   <CustomFile 
                                        name='file'
                                        label='Upload File'
                                        value={file}
                                        onChange={handleChangeFile}
                                        errors={errors}
                                        seterrors={seterrors}
                                        allowedTypes={["HTML"]}
                                   />
                              </Stack>
                         </Stack>
                         <Box sx={{ height: '2px'}} />
                         <Divider />
                         <Stack direction={'row'} justifyContent='flex-end'>
                              <Button sx={{ height: '60px' }} variant='contained'>Simpan</Button>
                         </Stack>
                    </Stack>
               </CardLayout>
          </Stack>
     )
}

export default Uploads;