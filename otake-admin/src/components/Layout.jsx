import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="otake-admin-panel min-h-screen">
      <Sidebar />
      <Topbar />
      <main className="pl-64 pt-16">
        <div className="p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
