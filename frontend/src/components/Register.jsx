import React from 'react'
import {useState} from 'react'

const Register = () => {

  const [formData , setFormData] = useState({
    name: '',
    email: "",
    password: "",
    password2: "",
  })


  const {name, email, password, password2} = formData

  const onChange = (e)=> {
    setFormData((prevState)=> ({
      ...prevState,
      [e.target.name]: e.target.value, 
    }))

  }

  const onSubmit = (e)=> {
    e.preventDefault()

    //dispatch
  }

  return (
    <div className='register-main'>
      <h1>Register User</h1>
      <form onSubmit={onSubmit}>

        <input
        id='name'
        placeholder='name'
        name='name'
        value= {name}
        onChange={onChange}>   
        </input>

        <input
         id='email'
         placeholder='email'
         name='email'
         value= {email}
         onChange={onChange}>          
         </input>

        <input
         id='password'
         placeholder='password'
         name='password'
         value= {password}
         onChange={onChange}>
         </input>

        <input
         id='password2'
         placeholder='confirm password'
         name='password2'
         value= {password2}
         onChange={onChange}>
         </input>

        <button type = "submit">
          submit
        </button>

      </form>
    </div>
  )
}

export default Register
