import type React from "react";
import "./input.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> 

export function Input({ type, placeholder, ...rest }: InputProps) {
  return (

      <input
        {...rest}
        className="input"
        type={type || "text"}
        placeholder={placeholder || ""}
      />

  );
}
