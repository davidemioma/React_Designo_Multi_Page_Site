import { useNavigate } from "react-router";
import "./Design.css";

function Design() {
  const navigate = useNavigate();

  const onWebDesignClickHandler = () => {
    navigate("/design/webDesign", { push: true });
  };

  const onAppDesignClickHandler = () => {
    navigate("/design/appDesign", { push: true });
  };

  const onGraphicDesignClickHandler = () => {
    navigate("/design/graphicDesign", { push: true });
  };

  return (
    <div className="container designs">
      <div onClick={onWebDesignClickHandler} className="web">
        <div>
          <h1>web design</h1>
          <button>
            view projects
            <img src="/static/images/shared/icon-right-arrow.svg" />
          </button>
        </div>
      </div>

      <div className="design">
        <div onClick={onAppDesignClickHandler} className="app">
          <div>
            <h1>app design</h1>
            <button>
              view projects
              <img src="/static/images/shared/icon-right-arrow.svg" />
            </button>
          </div>
        </div>

        <div onClick={onGraphicDesignClickHandler} className="graphic">
          <div>
            <h1>graphic design</h1>
            <button>
              view projects
              <img src="/static/images/shared/icon-right-arrow.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
