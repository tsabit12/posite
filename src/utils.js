export const getPageTitle = (pathname) => {
     switch(pathname){
          case '/dashboard':
               return 'Dashboard';
          case '/statistik':
               return 'Statistik';
          case '/leaderboard':
               return 'Leaderboard';
          case '/uploads':
               return 'Upload';
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

export const decimalNumber = (number) => {
     if(number){
         return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
     }else{
         return '0';
     }
}

export const handleAxiosError = (err) => {
     const result = {}

     if (err.response) {
          const { codeResponse, resData, textResponse } = err.response.data;
          let msg = textResponse;
          if(typeof resData === 'string') msg = resData;
          result.message = msg;
          result.code    = codeResponse;
     } else if (err.request) {
          result.message = "Request error";
          result.code    = 400;
     } else {
          result.message = "Internal server error";
          result.code    = 500;
     }

     return result;
}