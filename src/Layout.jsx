import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/ui/Header";
import BottomNav from "./components/ui/BottomNav";

function Layout() {
  return (
    <div className="min-h-[100vh] bg-gray-600">
      <Header />
      <div className="  px-4 py-14 sm:px-8 sm:pt-24 sm:pb-28">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
}

export default Layout;
