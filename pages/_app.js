import { UserWrapper } from "../context/userContext";
import "../styles/globals.scss";
// import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <UserWrapper>
      {/* <AnimatePresence exitBeforeEnter initial={false}> */}
        <Component {...pageProps} key={router.route} />
      {/* </AnimatePresence> */}
    </UserWrapper>
  );
}

export default MyApp;
