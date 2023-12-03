import { Input } from 'postcss'
import React, { useState } from 'react'

const CloudinaryFunc = () => {
    const [form,setForm] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        avatar: null
    })
    const onChange = (e) => {
        // e.preventDefault()
        setForm({...form})
    }
  return (
    <div>
      <Input type="text" title="name" placeholder= "Firstname" setForm={setForm} form={form} />
      <Input type="text" title="name" placeholder= "Firstname" setForm={setForm} form={form} />
      <Input type="text" title="name" placeholder= "Firstname" setForm={setForm} form={form} />
      <Input type="text" title="name" placeholder= "Firstname" setForm={setForm} form={form} />
      <Input type='file' title="name" placeholder= "Firstname" setForm={setForm} form={form} />
    </div>
  )
}

export default CloudinaryFunc
