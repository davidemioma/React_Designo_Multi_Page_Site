import { useNavigate } from "react-router";

function AppView() {
  const navigate = useNavigate();

  const onAppDesignClickHandler = () => {
    navigate("/design/appDesign", { push: true });
  };

  return (
    <div onClick={onAppDesignClickHandler} className="app">
      <div>
        <h1>app design</h1>
        <button>
          view projects
          <img src="/static/images/shared/icon-right-arrow.svg" />
        </button>
      </div>
    </div>
  );
}

export default AppView;
