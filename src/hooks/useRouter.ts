import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useRouter = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const goToPage = (path: string) => navigate(path);

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return [goToPage];
};

export default useRouter;
