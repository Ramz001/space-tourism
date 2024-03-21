import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Layout = lazy(() => import("./components/layouts/Layout"));
// lazy import all components
const Home = lazy(() => import("./components/home/Home"));
const Destination = lazy(() => import("./components/destination/Destination"));
const Crew = lazy(() => import("./components/crew/Crew"));
const Technology = lazy(() => import("./components/technology/Technology"));
const Error = lazy(() => import("./components/error/Error"));

// import Layout from "./components/layouts/Layout";
// import Home from "./components/home/Home";
// import Destination from "./components/destination/Destination";
// import Crew from "./components/crew/Crew";
// import Technology from "./components/technology/Technology";
// import Error from "./components/error/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="destinations" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
