export const getPageTitle = (pathname) => {
     switch(pathname){
          case '/dashboard':
               return 'Dashboard';
          default:
               return 'Home';
     }
}