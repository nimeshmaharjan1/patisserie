import "../styles/globals.scss";
import "../styles/menu.scss";
import "../styles/products.scss";
import "../styles/layout.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
