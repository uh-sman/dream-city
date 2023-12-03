import React from 'react'

const Input = ({title, placeholder, onChange, setForm, form, type}) => {
  return <input title={title} type={type} placeholder={placeholder} onChange={(e) => setForm({...form, name: e.target.value})}/>
}

export default Input
