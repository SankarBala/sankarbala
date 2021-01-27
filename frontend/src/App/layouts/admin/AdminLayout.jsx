import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import adminNav from "./../../adminNav";

import "./AdminLayout.scss";

import {
  BsFillBellFill,
  BsFillGrid3X3GapFill,
  BsEnvelope,
} from "react-icons/bs";
import { BiTachometer } from "react-icons/bi";

const AdminLayout = (props) => {
  useEffect(() => {
    const sidebarController = document.getElementById("sidebarController");
    const sidebar = document.getElementById("sidebar");
    const workspace = document.getElementById("workspace");

    sidebarController.addEventListener("click", () => {
      sidebar.classList.toggle("absolute");
      sidebar.classList.toggle("-left-60");
      sidebar.classList.toggle("md:hidden");
      workspace.classList.toggle("absolute");
      workspace.classList.toggle("left-60");
    });
  });

  return (
    <div>
      <div className="w-screen h-screen mx-auto">
        <div className="flex justify-between">
          <div
            id="sidebar"
            className="bg-primary h-screen w-60 md:static absolute -left-60"
          >
            <div className="p-1 h-14 flex justify-evenly items-center">
              <p className="text-white text-lg font-bold mb-1">SANKAR BALA</p>
            </div>
            <div className="w-5/6 bg-white p-1 rounded  h-16 flex justify-evenly items-center my-10 m-auto">
              <span>
                <p className=" text-xl font-serif">sankar_bala</p>
                <p className="text-md font-serif text-yellow-500">Admin</p>
              </span>
            </div>
            <div>
              {adminNav.map((nav) => {
                return (
                  <NavLink
                    key={nav.name}
                    to={nav.to}
                    exact={nav.exact}
                    className="hover:bg-red-500 active
                 hover:text-black text-white flex  p-3 pb-4 cursor-pointer"
                    activeClassName="bg-red-500"
                  >
                   
                    <span className="ml-4 text-sm">{nav.name}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>

          <div
            id="workspace"
            className="h-screen w-full workspace overflow-y-scroll md:static"
          >
            <div className="bg-primary w-full h-14 flex text-primary justify-between items-center p-4 sticky top-0">
              <label id="sidebarController" className="mb-1 cursor-pointer">
                <BsFillGrid3X3GapFill className="text-2xl" />
              </label>
              <div className="md:block hidden">Welcome </div>
              <div className="pb-1">
                <BsFillBellFill className="text-md mr-8 inline" />
                <BsEnvelope className="text-md m-2 inline" />
              </div>
            </div>
            <div className="p-3 bg-gray-200 h-screen">
              {/* Your contents here */}
              {props.children}
              {/* Your contents till here */}
            </div>
            <div className="bg-primary w-full h-11 flex justify-between py-2 px-10 text-lg text-white">
              <span className="">Admin panel</span>
              <span className="">Version 1.0.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
