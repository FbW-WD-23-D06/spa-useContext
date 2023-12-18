import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="h-screen">
      <Header />
      <Outlet />
      <footer className="bg-red-500 h-8">footer</footer>
    </div>
  );
}
