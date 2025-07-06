import React from "react";
import { ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({ label, onClick, type = "button" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
    >
      {label}
    </button>
  );
};

export default Button;
