import { UserWrapper } from "../context/userContext";
import "../styles/globals.scss";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Router from "next/router";

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    router.push(router.asPath);
  }, []);

  return (
    <UserWrapper>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </UserWrapper>
  );
}

const routeChange = () => {
  const tempFix = () => {
    const allStyleElems = document.querySelectorAll('style[media="x"]');
    allStyleElems.forEach((elem) => {
      elem.removeAttribute("media");
    });
  };
  tempFix();
};

Router.events.on("routeChangeComplete", routeChange );
Router.events.on("routeChangeStart", routeChange );

export default MyApp;
