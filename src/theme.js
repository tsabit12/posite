import { createTheme } from "@mui/material";

export const theme = createTheme({
     components: {
          MuiButton: {
               defaultProps: {
                    disableElevation: true
               },
               styleOverrides: {
                    root: {
                         textTransform: 'none',
                         borderRadius: '10px',
                         padding: '10px 30px 10px 30px'
                    }
               }
          }
     },
     typography: {
          fontFamily: '"Poppins","Inter","Segoe UI"',
          button: {
               fontFamily: 'Poppins',
               fontWeight: '600',
               fontSize: '16px',
               lineHeight: '24px'
          },
          link: {
               fontWeight: '500',
               color: 'rgba(37, 39, 63, 0.7)',
               fontSize: '16px',
               lineHeight: '24px',
               fontFamily: 'Poppins'
          }
     },
     palette: {
          primary: {
               main: '#4A3AFF',
               light: '#4c3dfc',
               dark: '#4334eb'
          }
     }
})

export default theme;