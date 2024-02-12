import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/ui/Header";
import BottomNav from "./components/ui/BottomNav";

function Layout() {
  return (
    <div className="min-h-[100vh] bg-gray-600">
      <Header />
      <div className=" py-9 sm:py-16">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
}

export default Layout;
