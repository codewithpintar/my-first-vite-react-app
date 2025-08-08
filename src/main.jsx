import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";  // use react-router-dom
import App from "./App";
import Layout from "./layout";
import AboutUs from "./pages/about-us";
import "../styles/global.css"

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<App />} />
                <Route path="about-us" element={<AboutUs />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
