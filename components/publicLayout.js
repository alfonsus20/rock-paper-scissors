import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUserContext } from "../context/userContext";

const PublicLayout = ({ children }) => {
  const { globalName } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (globalName) {
      router.push("/play");
    }
  }, [globalName]);

  return <div>{children}</div>;
};

export default PublicLayout;
