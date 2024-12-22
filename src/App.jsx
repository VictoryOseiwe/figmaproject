import React from "react";
import Input from "./component/Input";
import SidebarItem from "./component/sidebarItem/SidebarItem";
import { Cart } from "./component/Icons";
import { Chat } from "./component/Icons";
import Button from "./component/Button";

export default function App() {
  return (
    <>
      <div>
        <h1>Hello, React!</h1>
        <p>This is a simple React application.</p>
        <Input type={"text  "} />
        <SidebarItem icon={<Cart className="icon" />} text={"Procurement"} />
        <SidebarItem icon={<Chat />} text={"Communication"} />
      </div>
      <div className="sidebaritem">
        Communication
        <Chat />
        <Button text={"Submit"} />
        <Button text={"Reject"} className={"rejectbtn"} />
      </div>
    </>
  );
}
