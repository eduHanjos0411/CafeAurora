import './input.css'

interface InputProps {
  type?: string
  placeholder?: string
  label?: string
}

export function Input(props: InputProps) {
  return (
    <label className="input-label">
      {props.label || "Input"}
      <input className="input" type={props.type || "text"} placeholder={props.placeholder || ""}/>
    </label>
  )
}