import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUserContext } from "../context/userContext";

const PrivateLayout = ({ children }) => {
  const { globalName } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (!globalName) {
      router.push("/");
    }
  }, [globalName]);

  return <div>{children}</div>;
};

export default PrivateLayout;
