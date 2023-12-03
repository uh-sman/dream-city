import React from 'react'

const Input = ({title, placeholder, setForm, form, type, onChange}) => {
  return <input title={title} type={type} placeholder={placeholder} onChange={onchange}/>
}

export default Input
