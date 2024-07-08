import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import FilimsPage from "./pages/FilimsPage/FilimsPage";
import FilimDetalPage from "./pages/FilimDetalPage/FilimDetalPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Filims" element={<FilimsPage />}></Route>
        <Route path="/Filims/:FilimId" element={<FilimDetalPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
