export const getPageTitle = (pathname) => {
     switch(pathname){
          case '/dashboard':
               return 'Dashboard';
          case '/statistik':
               return 'Statistik';
          default:
               return 'Home';
     }
}

export const DataFormater = (number) => {
     if(number > 1000000000){
       return (number/1000000000).toString() + 'B';
     }else if(number > 1000000){
       return (number/1000000).toString() + 'M';
     }else if(number > 1000){
       return (number/1000).toString() + 'K';
     }else{
       return number.toString();
     }
}