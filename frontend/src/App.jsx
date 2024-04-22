import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import Header from "./components/header/Header.jsx";
import Cloud from "./components/cloudComponent/CloudComponent.jsx";
import Footer from "./components/footer/Footer.jsx";
import Blogs from "./components/blogs/Blogs.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import { ParallaxProvider } from "react-scroll-parallax";
import EventsPage from "./pages/EventsPage.jsx";
import axios from "axios";
import EventName from "./components/eventName/EventName.jsx";
import WebDevelopment from "./components/resourcedomains/WebDevelopment/WebDevelopment.jsx";
import AppDevelopment from "./components/resourcedomains/AppDevelopment/AppDevelopment.jsx";
import MachineLearning from "./components/resourcedomains/MachineLearning/MachineLearning.jsx";
import CyberSecurity from "./components/resourcedomains/CyberSecurity/CyberSecurity.jsx";
import DataStructures from "./components/resourcedomains/DataStructures/DataStructures.jsx";
import Miscellaneous from "./components/resourcedomains/Miscellaneous/Miscellaneous.jsx";
import Resource from "./pages/Resource/Resource.jsx";

function App() {
  axios.defaults.baseURL =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

  return (
    <ParallaxProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<IndexPage />} />
          <Route path={"/team"} element={<TeamPage />} />
          <Route path={"/events"} element={<EventsPage />} />
          <Route path={"/events/:eventId"} element={<EventName />} />
          <Route path={"/blogs"} element={<Blogs />} />
          <Route path={"/webdevelopment"} element={<WebDevelopment />} />
          <Route path={"/appdevelopment"} element={<AppDevelopment />} />
          <Route path={"/machinelearning"} element={<MachineLearning />} />
          <Route path={"/cybersecurity"} element={<CyberSecurity />} />
          <Route path={"/datastructures"} element={<DataStructures />} />
          <Route path={"/miscellaneous"} element={<Miscellaneous />} />
          <Route path={"/resources/:resourceId"} element={<Resource />} />
        </Routes>
        <Cloud />
        <Footer />
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
