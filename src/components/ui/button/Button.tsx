import type React from "react";

import './button.css'

export function Button({ children, ...rest}: {children: React.ReactNode, rest?: React.ButtonHTMLAttributes<HTMLButtonElement>}) {
  return (
    <button  className='btn' {...rest}>{children}</button>
  )
}