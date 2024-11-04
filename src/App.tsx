import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { navLinkDatas } from "./datas/navLinkDatas";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {navLinkDatas.map((navLink) => (
          <Route
            key={navLink.id}
            path={navLink.link}
            element={<navLink.element />}
          />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
