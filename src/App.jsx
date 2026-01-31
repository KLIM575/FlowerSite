import MainPage from "./pages/MainPage";
import ShowcasePage from "./pages/ShowcasePage";
import ForBridesPage from "./pages/ForBridesPage";
import СorporateСooperationPage from "./pages/СorporateСooperationPage";
import ContactTheManagerPage from "./pages/ContactTheManagerPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Showcase" element={<ShowcasePage />} />
          <Route path="/ForBrides" element={<ForBridesPage />} />
          <Route
            path="/СorporateСooperation"
            element={<СorporateСooperationPage />}
          />
          <Route path="/Product" element={<ProductPage />} />
          <Route
            path="/ContactTheManager"
            element={<ContactTheManagerPage />}
          />
          {/* Этот маршрут сработает, если ничего не подошло */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
