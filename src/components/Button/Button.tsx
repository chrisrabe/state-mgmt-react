import React from "react";

const Button: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({...props}) => {
  return <button className="p-5 bg-gray-50 border-2 border-gray-200 h-64 w-64 shadow-2xl" {...props} />
};

export default Button;
