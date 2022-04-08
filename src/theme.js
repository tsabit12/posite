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
          fontFamily: '"Poppins","DM Sans","Inter","Segoe UI"',
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
          },
          subtitle1: {
               fontFamily: 'DM Sans',
               fontStyle: 'Bold',
               fontWeight: '700',
               lineHeight: '20px',
               letterSpacing: '2px',
               textTransform: 'uppercase',
               color: '#4A3AFF'
          },
          subtitle2: {
               fontFamily: 'Poppins',
               fontWeight: '500',
               fontSize: '24px',
               lineHeight: '43.44px',
               color: '#F68407'
          },
          title: {
               fontFamily: 'Poppins',
               fontWeight: '700',
               fontSize: '40px',
               lineHeight: '72.4px',
               color: '#091B51'
          },
          body1: {
               fontFamily: 'Poppins',
               fontWeight: '400',
               fontSize: '16px',
               lineHeight: '28.96px',
               color: '#666878'
          },
          body2: {
               fontFamily: 'Poppins',
               fontWeight: '500',
               fontSize: '16px',
               lineHeight: '24px',
               color: 'rgba(37, 39, 63, 0.7)'
          },
          h6: {
               fontFamily: 'Poppins',
               fontWeight: '500',
               fontSize: '16px',
               lineHeight: '28.96px',
               color: '#081A51'
          },
          h7: {
               fontFamily: 'Poppins',
               fontWeight: '500',
               color: 'rgba(37, 39, 63, 0.7)',
               fontSize: '14px',
               lineHeight: '25.34px'
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