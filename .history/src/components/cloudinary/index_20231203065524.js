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
    const [image,setImage] = useState(null)

    const createPost = () => {}
    
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setImage(file)
    }
    const onSubmit = (e) => {
        e.preventDefault()

    }

    const onChange = (e) => {
        setForm({...form, name: e.target.value})
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
      <Input type="text" title="name" placeholder= "name" onChange={onChange} />
      <Input type="text" title="name" placeholder= "email" onChange={onChange} />
      <Input type="text" title="name" placeholder= "password" onChange={onChange} />
      <Input type="text" title="name" placeholder= "confirmPassword" onChange={onChange} />
      <Input type='file' title="name" placeholder= "image" onChange={handleFileUpload} />
        </form>
    </div>
  )
}

export default CloudinaryFunc
