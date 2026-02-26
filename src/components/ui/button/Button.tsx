import React from "react";

import './button.css'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...rest}: ButtonProps) {
  return (
    <button  className='btn' {...rest}>{children}</button>
  )
}