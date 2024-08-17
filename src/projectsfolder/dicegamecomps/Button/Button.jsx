import React from 'react'
import "./Button.css"

const Button = ({onClick,text,classname}) => {
  return (
    <button title={`${text}`} onhov className={`${classname}`} onClick={onClick}>{text}</button>
  )
}

export default Button