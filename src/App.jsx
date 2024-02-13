import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./App.css";

import Layout from "./Layout";
import Header from "./components/ui/Header";
import { Home, Movies, Search, Series } from "./pages";
import conf from "./conf/conf";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="search" element={<Search />} />
        <Route path="series" element={<Series />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router}>
      <div className=" min-h-[100vh] bg-gray-500 text-white ">
        <Header />
      </div>
    </RouterProvider>
  );
}

export default App;
