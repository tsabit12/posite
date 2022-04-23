import axios from 'axios';
import FileDownload from 'js-file-download';

//eslint-disable-next-line
export default {
     tokenApp: () => axios.get(`${process.env.REACT_APP_ENDPOINT}/utils/tokenApp`).then(res => res.data),
     user: {
          create: (payload) => axios.post(`${process.env.REACT_APP_ENDPOINT}/user/createUser`, { ...payload })
               .then(res => res.data)
     },
     source: {
          add: (formData) => axios.post(`${process.env.REACT_APP_ENDPOINT}/source/upload`, formData).then(res => res.data),
          category: (params) => axios.get(`${process.env.REACT_APP_ENDPOINT}/source/category`, { params }).then(res => res.data),
          getcode: (url) => axios.get(url).then(res => res.data),
          list: (params) => axios.get(`${process.env.REACT_APP_ENDPOINT}/source/list`, { params }).then(res => res.data),
          download: (url, filename) => axios.get(url, { responseType: 'blob' }).then(res => {
               FileDownload(res.data, `${filename}`);
          })
     }
}