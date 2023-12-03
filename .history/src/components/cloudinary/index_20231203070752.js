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
    // const [image,setImage] = useState(null)

    const createPost = async () => {
        const formData = new FormData()
        formData.append('file',image)
        formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
        formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_CLOUD_NAME)
        formData.append('folder', 'avatar')
        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`, {
                method:"POST",
                body: formData,
            })
            const data = await response.json()
            // TODO: YOU DO ANYTHING YOU WANT TO DO WITH THE DATA
            console.log(data?.public_id)
        } catch (error) {
            console.log(error)
        }
    }
    
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
