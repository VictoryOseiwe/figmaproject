import "./SideBar.css";
import React from "react";
import SidebarItem from "../sidebarItem/SidebarItem";
import {
  Help,
  Settings,
  Chat,
  Cart,
  Calendar,
  Money,
  Documents,
  Inventory,
  Dashboard,
  ArrowUp,
  ArrowDown,
  Logout,
  User,
} from "../Icons";
import ImageHeaderandDescription from "../imageheadanddescription/ImageHeaderandDescription";

export default function SideBar() {
  return (
    <>
      <div className="sidebarcontainer">
        {/* first section of sidebar i.e the top */}
        <div>
          <div className="logo">
            <h1 className="logoletter">MAP</h1>
            <p className="logosub">
              Medical Advanced <br /> Platform
            </p>
          </div>
          <div>
            <SidebarItem icon={<Dashboard />} text={"Dashboard"} />
            <SidebarItem icon={<Inventory />} text={"Inventory"} />
            <SidebarItem
              className={"procurement"}
              icon={<Cart className="icon" />}
              text={"Procurement"}
              arrow={<ArrowUp />}
            />
            <SidebarItem className={"procurement"} text={"Quotes"} />
            <SidebarItem text={"Orders"} />
            <SidebarItem
              icon={<Money />}
              text={"Finance"}
              arrow={<ArrowDown />}
            />
            <SidebarItem icon={<Chat />} text={"Communication"} />
            <SidebarItem icon={<Calendar />} text={"Calendar"} />
            <SidebarItem icon={<Documents />} text={"Contract"} />
          </div>
        </div>

        {/* second of the sidebar i.e the bottom */}
        <div>
          <div>
            <SidebarItem icon={<Help />} text={"Support"} />
            <SidebarItem icon={<Settings />} text={"Settings"} />
          </div>
          <div className="sidebarbottom">
            {/* <User size={32} />
            <div>
              <h3>Mark Benson</h3>
              <p>markbenson@core...</p>
            </div>

            <Logout size={32} /> */}
            <ImageHeaderandDescription
              imgsrc={<User size={32} />}
              headText={"Mark Benson"}
              description={"markbenson@core..."}
              icon={<Logout size={32} />}
            />
          </div>
        </div>
      </div>
    </>
  );
}
