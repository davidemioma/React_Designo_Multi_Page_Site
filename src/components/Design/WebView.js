import { useNavigate } from "react-router";

function WebView() {
  const navigate = useNavigate();

  const onWebDesignClickHandler = () => {
    navigate("/design/webDesign", { push: true });
  };

  return (
    <div onClick={onWebDesignClickHandler} className="web">
      <div>
        <h1>web design</h1>
        <button>
          view projects
          <img src="/static/images/shared/icon-right-arrow.svg" />
        </button>
      </div>
    </div>
  );
}

export default WebView;
