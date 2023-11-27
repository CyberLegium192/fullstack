import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import {useState, useEffect} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
const login = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate()
  axios.defaults.withCredentials = true
  const submit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3000/user/login", value)
    .then(res => navigate("/profile"))
  }
  
  
  return (
    <form className="flex max-w-md flex-col gap-4" onSubmit={submit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required 
        onChange={(e) => setValue({...value, email: e.target.value})}/>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password" required 
        onChange={(e) => setValue({...value, password: e.target.value})}/>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default login
