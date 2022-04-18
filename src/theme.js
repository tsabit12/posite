import { createTheme } from "@mui/material";

export const theme = createTheme({
     breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 1000,
            lg: 1200,
            xl: 1920
          }
     },
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
          title2: {
               fontFamily: 'Poppins',
               fontWeight: '700',
               fontSize: '24px',
               lineHeight: '43.44px',
               color: '#081A51'
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
          h2: {
               fontSize: '36px',
               lineHeight: '54px',
               fontWeight: '700',
               color: '#1C1F37'
          },
          h4: {
               color: '#FFFFFF',
               fontWeight: '700',
               lineHeight: '58px',
               fontSize: '32px'
          },
          h5: {
               color: '#081A51',
               textTransform: 'uppercase',
               fontWeight: '700',
               fontSize: '18px',
               lineHeight: '20px',   
               letterSpacing: '0.4px'
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
          },
          label: {
               fontFamily: 'Poppins',
               color: '#1C1F37',
               fontSize: '16px',
               lineHeight: '24px',
               fontWeight: '500'
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