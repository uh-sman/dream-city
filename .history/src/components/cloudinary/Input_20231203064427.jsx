import React from 'react'

const Input = ({title, placeholder, setForm, form, type}) => {
  return <input title={title} type={type} placeholder={placeholder} onChange={(e) => setForm({...form, name: e.target.value})}/>
}

export default Input
