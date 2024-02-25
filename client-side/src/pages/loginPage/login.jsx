import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import {useState, useEffect} from "react"
import axios from "axios"
import {useNavigate, Link} from "react-router-dom"
import {loginUser} from '../../../libs/userLogin.js'


const login = () => {
  const navigate = useNavigate()
  axios.defaults.withCredentials = true
  
  const [value, setValue] = useState({
    email: "",
    password: "",
  })
  const [erorrMail, setErorrMail] =useState("")
  const [erorrPass, setErorrPass] =useState("")
  const [tes, setTes] = useState([])
  
  
  const submit = (e) => {
    let isValid = true
    e.preventDefault()
    loginUser(value)
    .then(res => {
      if (res.error == "Pengguna tidak ditemukan") {
        setErorrMail(res.error)
        isValid = false
      } else if(res.error == "Password salah"){
        setErorrPass(res.error)
        isValid = false
      }else{
        localStorage.setItem('id', res.user.id)
        navigate("/profile")
      }
    })
  }
  
  
  return (
    <div className="min-h-screen w-full flex items-center">
    <form className="flex flex-col gap-4 w-full p-5 px-8 font-poppins" onSubmit={submit}>
    
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Email"
          className="text-md"
          color={erorrMail == "" ? "gray" : "failure"}
          />
        </div>
        <TextInput id="email1" type="email" placeholder="example@gmail.com" required
        onChange={(e) => setValue({...value, email: e.target.value})}
        color={erorrMail == "" ? "gray" : "failure"}
          helperText={
            <>
            {
              erorrMail == "" ? "" : <span className="font-poppins text-sm">{erorrMail}!</span>
            }
            </>
          }
        />
      </div>
      
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="password"
          className="text-md"
          color={erorrPass == "" ? "gray" : "failure"}
          />
        </div>
        <TextInput id="password1" type="password" required 
        onChange={(e) => setValue({...value, password: e.target.value})} 
          color={erorrPass == "" ? "gray" : "failure"}
          helperText={
            <>
            {
              erorrPass == "" ? "" : <span className="font-poppins text-sm">{erorrPass}!</span>
            }
            </>
          }
        />
      </div>
      
      <div className="flex items-center justify-end">
        <Link className="text-text-blue-600">Forgot password?</Link>
      </div>
      
      <Button type="submit" color="failure" className="text-lg font-poppins">Submit</Button>
      <p className="text-center">Don't have an Account? <Link to="/register" className="text-blue-600 ml-2">Signup</Link></p>
      
      
    </form>
    </div>
  );
}

export default login
