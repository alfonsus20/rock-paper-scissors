import { UserWrapper } from "../context/userContext";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <UserWrapper>
      <Component {...pageProps} />
    </UserWrapper>
  );
}

export default MyApp;
