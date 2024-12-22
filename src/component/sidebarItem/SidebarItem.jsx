import React from "react";
import "./SidebarItem.css";

export default function SidebarItem({ icon, text, className }) {
  return (
    <>
      <div className={"sidebaritem"}>
        {icon}
        {text}
      </div>
    </>
  );
}
