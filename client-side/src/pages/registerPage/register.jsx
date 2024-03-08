import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import {useState, useEffect} from "react"
import axios from "axios"
import {useNavigate, Link} from "react-router-dom"
import {registerUser} from '../../../libs/userLogin.js'

const register = () => {
  const navigate = useNavigate()
  axios.defaults.withCredentials = true
  
  const [userVal, setUserVal] = useState("")
  const [emailVal, setEmailVal] = useState("")
  const [passVal1, setPassVal1] = useState("")
  const [passVal2, setPassVal2] = useState("")
  const [passVerif, setPassVerif] = useState("")
  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
    bio: "",
    gender: "",
    role: "user",
    avatar: null
  })

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validatePassword = (password) => {
    return password.length >= 6;
  };
  
    const submit = (e) => {
    e.preventDefault();

    // Reset validation messages
    setUserVal("");
    setEmailVal("");
    setPassVal1("");
    setPassVal2("");

    let isValid = true; 
    // Validate email
    if (value.email.length < 1 || !validateEmail(value.email)) {
      setEmailVal("Invalid email address");
      isValid = false;
    }
    // Validate username
    if (value.username.length === 0) {
      setUserVal("Username is required");
      isValid = false;
    }
    // Validate password
    if (!validatePassword(value.password)) {
      setPassVal1("Password should be at least 6 characters");
      isValid = false;
    }
    // Validate re-entered password
    if (value.password !== passVerif) {
      setPassVal2("Passwords do not match");
      isValid = false;
    }
    // If all validations pass, submit the form
    if (isValid) {
      registerUser(value)
        .then(res => {
          if (res.message === "CREATE NEW User Success") {
            navigate("/login");
          } else {
            alert("Please check the form again");
          }
        })
    }
  };

  
  return(
    <div className="min-h-screen flex items-center">
    <form className="flex flex-col gap-4 w-full p-5 px-8 font-poppins" onSubmit={submit}>
    
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Username" className="text-md"
          color={userVal == "" ? "gray" : "failure"} />
        </div>
        <TextInput id="username" type="text" placeholder="Jacob"
        onChange={(e) => setValue({...value, username: e.target.value})}
        color={userVal == "" ? "gray" : "failure"}
          helperText={
            <>
            {
              userVal == "" ? "" : <span className="font-poppins text-sm">{userVal}!</span>
            }
            </>
          }/>
      </div>
      
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Email" className="text-md"
          color={emailVal == "" ? "gray" : "failure"}/>
        </div>
        <TextInput id="email1" type="email" placeholder="example@gmail.com" 
        onChange={(e) => setValue({...value, email: e.target.value})}
        color={emailVal == "" ? "gray" : "failure"}
          helperText={
            <>
            {
              emailVal == "" ? "" : <span className="font-poppins text-sm">{emailVal}!</span>
            }
            </>
          }/>
      </div>
      
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="password"
          className="text-md"
          color={passVal1 == "" ? "gray" : "failure"}
          />
        </div>
        <TextInput id="password1" type="password"  
        onChange={(e) => setValue({...value, password: e.target.value})} 
          color={passVal1 == "" ? "gray" : "failure"}
          helperText={
            <>
            {
              passVal1 == "" ? "" : <span className="font-poppins text-sm">{passVal1}!</span>
            }
            </>
          }
        />
      </div>
      
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="retiry password"
          className="text-md"
          color={passVal2 == "" ? "gray" : "failure"}
          />
        </div>
        <TextInput id="password2" type="password"  
        onChange={(e) => setPassVerif(e.target.value)} 
          color={passVal2 == "" ? "gray" : "failure"}
          helperText={
            <>
            {
              passVal2 == "" ? "" : <span className="font-poppins text-sm">{passVal2}!</span>
            }
            </>
          }
        />
      </div>
      
      
      
      
      
      
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className="text-md">
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