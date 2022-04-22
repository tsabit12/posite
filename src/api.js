import axios from 'axios';

//eslint-disable-next-line
export default {
     tokenApp: () => axios.get(`${process.env.REACT_APP_ENDPOINT}/utils/tokenApp`).then(res => res.data),
     user: {
          create: (payload) => axios.post(`${process.env.REACT_APP_ENDPOINT}/user/createUser`, { ...payload })
               .then(res => res.data)
     }
}