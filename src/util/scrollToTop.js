import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ScrollToTop(props) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return <>{props.children}</>;
}

export default ScrollToTop;
