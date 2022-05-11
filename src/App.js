import { Routes, Route } from "react-router-dom";
import { findWidth } from "./features/findWidthSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "./components/layouts/Layout";
import Home from "./components/home/Home";
import Destination from "./components/destination/Destination";
import Crew from "./components/crew/Crew";
import Technology from "./components/technology/Technology";
import Error from "./components/error/Error";

function App() {
  const dispatch = useDispatch();
  //side effect
  useEffect(() => {
    const handleResize = () =>
      dispatch(findWidth({ width: window.innerWidth }));
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
  });

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
