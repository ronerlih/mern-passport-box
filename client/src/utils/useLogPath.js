import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useLogPath = () => {
   const location = useLocation();

  useEffect(
    () => {
       console.group('logPath')
       console.log(location.pathname)
       console.groupEnd('logPath');
    }, [location]
  );
};

export default useLogPath;
