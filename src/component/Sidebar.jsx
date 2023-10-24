import React from "react";
import { links } from "../data/constant";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="px-6 pt-9 hidden lg:block">
      <div className="user">
        <img src="" alt="" />
        <div className="">
          <div className="text-[14px] font-bold">Kristen Ramos</div>
          <p className="pt-[8px]">kristen.ramos@email.com</p>{" "}
        </div>
      </div>
      <nav className="mt-[90px] grid gap-10">
        {links.map((link) => {
          return (
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? " font-semibold relative after:absolute after:w-[24px] after:border-[#eb6566] after:left-0 after:bottom-0 after:border-b-[3px] pb-2 nav-link"
                  : "font-semibold relative";
              }}
              key={link.id}
              to={link.link}
            >
              {link.name}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
