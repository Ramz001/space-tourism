import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { Suspense } from "react";
import Spinner from "../spinner/Spinner";

export default function Layout() {
  return (
    <startTransition>
      <Suspense fallback={<Spinner />}>
        <Navbar />
        <Outlet />
      </Suspense>
    </startTransition>
  );
}
