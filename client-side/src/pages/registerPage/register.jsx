import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import {useState, useEffect} from "react"
import axios from "axios"
import {useNavigate, Link} from "react-router-dom"


const register = () => {
  const navigate = useNavigate()
  axios.defaults.withCredentials = true
  
  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
    bio: "",
    gender: "",
    role: "user",
    avatar: null,
  })
  const [erorrPass, setErorrPass] = useState("")
  
  
  const submit = (e) => {
    e.preventDefault()
    var formData = new FormData();
    formData.append("username", value.username)
    formData.append("email", value.email)
    formData.append("password", value.password)
    formData.append("bio", value.bio)
    formData.append("gender", value.gender)
    formData.append("role", value.role)
    formData.append("avatar", value.avatar)
    axios.post("http://localhost:3000/user/register", formData)
    .then(res => {
      console.log(res)
      if (res.data.message == "CREATE NEW User Success") {
        navigate("/profile")
      } else{
        alert("silahkan cek terlebih dahulu")
      }
    })
  }
  
  
  return(
    <div className="h-full flex items-center">
    <form className="flex flex-col gap-4 w-full p-5 px-8 font-poppins" onSubmit={submit}>
    
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Username" className="text-md"/>
        </div>
        <TextInput id="username" type="text" placeholder="Jacob" required
        onChange={(e) => setValue({...value, username: e.target.value})}/>
      </div>
      
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
      
      
      <input type="file" name="avatar" id="avatar" onChange={(e) => setValue({...value, avatar: e.target.files[0]})} />
      
      
      
      
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className="flex" className="text-md">
          I agree with the&nbsp;
          <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
            terms and conditions
          </Link>
        </Label>
      </div>
      
      <Button type="submit" color="failure" className="text-lg font-poppins">Submit</Button>
      <p className="text-center">have an Account? <Link to="/login" className="text-blue-600 ml-2">Sign in</Link></p>
      
      
    </form>
    </div>
  )
}
      

export default register