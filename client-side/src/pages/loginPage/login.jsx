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
  const [erorrPass, setErorrPass] =useState("")
  
  
  const submit = (e) => {
    e.preventDefault()
    // axios.post("http://localhost:3000/api/v1/user/login", value)
    loginUser(value)
    .then(res => {
      if (res.error == "Pengguna tidak ditemukan") {
        alert(res.error)
      } else if(res.error == "Password salah"){
        setErorrPass(res.error)
      }else{
        navigate("/profile")
      }
    })
  }
  
  
  return (
    <div className="min-h-screen w-full flex items-center">
    <form className="flex flex-col gap-4 w-full p-5 px-8 font-poppins" onSubmit={submit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Email" className="text-md"/>
        </div>
        <TextInput id="email1" type="email" placeholder="example@gmail.com" required
        onChange={(e) => setValue({...value, email: e.target.value})}/>
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
