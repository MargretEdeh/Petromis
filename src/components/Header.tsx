import React from "react";
import petromisLogo from "../assets/Images/petromisLogo.png";
import { NavLink } from "react-router-dom";
import Button from "./Button";

export default function Header() {
  return (
    <div className="w-full font-poppins  h-14 flex items-center justify-between px-14 py-4  ">
      <img src={petromisLogo} alt="logo" />
      <div className="flex gap-7 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary border-b-2 border-b-primary" : ""
          }
          end
        >
          Home
        </NavLink>
        <NavLink to="#">About Petromis</NavLink>
        <NavLink to="#">Services</NavLink>
        <NavLink to="#">Work</NavLink>
        <NavLink to="#">Request Quote</NavLink>
      </div>
      <div>
        <Button size="md" className="bg-secondary py-2 text-white rounded-md">
          Get a Quote{" "}
        </Button>
      </div>
    </div>
  );
}
