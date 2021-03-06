import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUserContext } from "../context/userContext";
import Layout from "./Layout";

const PrivateLayout = ({ children }) => {
  const { globalName } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (!globalName) {
      router.push("/");
    }
  }, [globalName]);

  return <Layout>{children}</Layout>;
};

export default PrivateLayout;
