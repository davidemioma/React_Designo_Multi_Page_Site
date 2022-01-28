import AppDesign from "./pages/AppDesign/AppDesign";
import GraphicDesign from "./pages/GraphicDesign/GraphicDesign";
import HomePage from "./pages/HomePage";
import WebDesign from "./pages/WebDesign/WebDesign";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LocationPage from "./pages/LocationPage";
import { Routes, Route } from "react-router";
import ScrollToTop from "./util/scrollToTop";

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/company" element={<AboutPage />} />

        <Route path="/locations" element={<LocationPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/design/webDesign" element={<WebDesign />} />

        <Route path="/design/appDesign" element={<AppDesign />} />

        <Route path="/design/graphicDesign" element={<GraphicDesign />} />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
