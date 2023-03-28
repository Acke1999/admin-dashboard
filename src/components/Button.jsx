import React from "react";
import { useStateContext } from "../context/ContextProvider";

const Button = ({bgColor,bgHoverColor,color,size,text,borderRadius,icon,width}) => {
  const {setIsClicked, initialState } = useStateContext();
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} w-${width} p-3 hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
      onClick={() => setIsClicked(initialState)}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
