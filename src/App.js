import { ThemeProvider } from "@mui/system";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Routes from "./Routes";
import theme from "./theme";
import rootReducer from './rootReducer';
import { useEffect } from "react";
import api from "./api";
import axios from "axios";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

function App() {

  useEffect(() => {
    (async () => {
      try {
        const { resData } = await api.tokenApp(); 

        axios.interceptors.request.use(function(config){
          config.headers.Authorization = `Bearer ${resData.token}`;
          return config;
        })

      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Routes />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
