import { UserWrapper } from "../context/userContext";
import "../styles/globals.scss";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    router.push(router.pathname);
  }, []);

  return (
    <UserWrapper>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </UserWrapper>
  );
}

export default MyApp;
