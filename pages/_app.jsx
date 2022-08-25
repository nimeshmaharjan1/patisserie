import "../styles/globals.scss";
import "../styles/menu.scss";
import "../styles/products.scss";
import "../styles/layout.scss";
import { useState } from "react";
import Router from "next/router";
import Loader from "../components/Loader";
import { Provider } from "react-redux";
import { store } from "../store/store";
function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  Router.onRouteChangeStart = (url) => {
    setIsLoading(true);
  };
  Router.onRouteChangeComplete = () => {
    setIsLoading(false);
  };

  Router.onRouteChangeError = () => {
    setIsLoading(false);
  };
  return (
    <Provider store={store}>
      <Loader loading={isLoading}></Loader>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
