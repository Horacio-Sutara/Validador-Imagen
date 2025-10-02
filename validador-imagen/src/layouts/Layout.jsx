import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="min-h-screen flex bg-[#fafcd3]">
      <Header />
      <main className="flex-1 justify-center items-center ">
        <Outlet /> {/* Aquí se cargan las páginas */}
      </main>
    </div>
  );
}

export default Layout;
