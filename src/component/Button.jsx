import React from "react";

export default function Button({ className, onClick, text, icon }) {
  return (
    // defined a button element for reusability
    <button className={className} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
}
