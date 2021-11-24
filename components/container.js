import React from "react";

export default function Container(props) {
  return <div className={`container px-2 md:px-4 lg:px-8 py-4 md:py-8 mx-auto xl:px-0 ${props.className || ""}`}>{props.children}</div>;
}
