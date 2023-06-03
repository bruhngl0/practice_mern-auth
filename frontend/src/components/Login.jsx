import React from 'react'
import {useState} from 'react'

const Login = () => {

  const [formData , setFormData] = useState({
  
    email: "",
    password: "",
   
  })


  const { email, password } = formData

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
      <h1>Login to set goals</h1>
      <form onSubmit={onSubmit}>


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

        <button type = "submit">
          submit
        </button>

      </form>
    </div>
  )
}

export default Login
