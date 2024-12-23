import React from "react";
import "./SidebarItem.css";

export default function SidebarItem({ icon, text, className, arrow }) {
  return (
    <>
      {/* general structure of the sidebarItem */}
      <div id="sidebaritem" className={className}>
        {icon}
        {text}
        {arrow}
      </div>
    </>
  );
}
