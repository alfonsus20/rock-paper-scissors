import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUserContext } from "../context/userContext";
import Layout from "./Layout";

const PublicLayout = ({ children }) => {
  const { globalName } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (globalName) {
      router.push("/play");
    }
  }, [globalName]);

  return <Layout>{children}</Layout>;
};

export default PublicLayout;
