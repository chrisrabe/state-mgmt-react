import React from "react";

const Button: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({...props}) => {
  return <button {...props} />
};

export default Button;