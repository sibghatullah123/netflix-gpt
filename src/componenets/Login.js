import Header from "./Header"
import { useState } from "react" 
const Login = () => {
  const [signin, setSignin] = useState(true);
  const toggleSigninForm = () => {
    setSignin(!signin);
  };
  return (
   <div>
    <Header/>
   
      <div className="absolute">
        <img 
          src="https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png" 
          alt="netflix background" 
        />
      </div>
      <form className=" w-3/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-12 bg-black opacity-90 rounded-md">
        <h1 className="text-3xl font-bold text-white m-4">
             {signin ? "Sign In" : "Sign Up"}
        </h1>
        {!signin && 
        <input type="text" placeholder="Name" className="bg-gray-700 m-2 p-2 rounded-md"/>}
         
        <input type="text" placeholder="Email or phone number" className="bg-gray-700 m-2 p-2 rounded-md"/> 
        
        <input type="password" placeholder="Password" className="bg-gray-700  m-2 p-2 rounded-md" />

        <button type="submit" className="m-2 p-2 bg-red-600 text-white rounded-lg "> {signin ? "Sign In" : "Sign Up"} </button>

        <div className="flex justify-between text-gray-500 mt-4 text-xs md:text-sm">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label >Remember me</label>
          </div>

          <div className="flex items-center ">
          <p className=" px-4 py-2"> {signin ? "I don't have an account " : "User Already Registered "}
            <span className="cursor-pointer hover:underline text-white " 
            onClick={toggleSigninForm}> 
            {signin ? "Sign up now." : "Sign in now."}</span>
          </p>
          </div>
        </div>

        
      </form>     
    </div>
  )
}

export default Login