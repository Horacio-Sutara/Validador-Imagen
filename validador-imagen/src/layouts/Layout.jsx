import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="min-h-screen flex bg-slate-500">
      <Header />
      <main className="bg-white flex-1">
        <Outlet /> {/* Aquí se cargan las páginas */}
      </main>
    </div>
  );
}

export default Layout;
