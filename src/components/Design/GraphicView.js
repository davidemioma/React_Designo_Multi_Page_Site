import { useNavigate } from "react-router";

function GraphicView() {
  const navigate = useNavigate();

  const onGraphicDesignClickHandler = () => {
    navigate("/design/graphicDesign", { push: true });
  };

  return (
    <div onClick={onGraphicDesignClickHandler} className="graphic">
      <div>
        <h1>graphic design</h1>
        <button>
          view projects
          <img src="/static/images/shared/icon-right-arrow.svg" />
        </button>
      </div>
    </div>
  );
}

export default GraphicView;
