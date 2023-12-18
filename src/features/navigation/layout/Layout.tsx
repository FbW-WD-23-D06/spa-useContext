import Footer from "./Footer";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="h-screen p-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
