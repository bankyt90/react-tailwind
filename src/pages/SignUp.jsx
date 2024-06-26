import { useState } from "react"
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai"
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function SignUp() {
  const [showPassword, setshowPassword] = useState(false)

  const [formData, setFormData] = useState ({
    name: "",
    email: "",
    password: "",
  })
  const {name, email, password} = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <section>
      <h1 className="text-center text-3xl mt-6 font-bold">Sign Up</h1>

      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto ">
        <div className=" md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="key in hand image"
          className=" w-full rounded-2xl"
          />
        </div>

        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20 ">
          <form>
            <input 
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" type="text"
            id="name" 
            value={name} 
            onChange={onChange}
            placeholder="Full name"
            />
            <input 
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" type="email"
            id="email" 
            value={email} 
            onChange={onChange}
            placeholder="email"
            />
            <div className=" relative mb-6">
              <input className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" 
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={onChange}
              placeholder="password"
              />
              {showPassword ? (
              <AiFillEyeInvisible className=" absolute right-3 top-3 text-xl cursor-pointer" onClick={() => setshowPassword((prevState) => !prevState)}/> 
               ): (
              <AiFillEye className=" absolute right-3 top-3 text-xl cursor-pointer" onClick={() => setshowPassword((prevState) => !prevState)}/> 
              )}
            </div>

            <div className="flex justify-between whitespace-nowrap text-xs sm:text-lg ">
              <p className=" mb-6 ">Have an account? 
                <Link to="/sign-in" className=" cursor-pointer text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1 ">Sign in</Link>
              </p>
              <p>
                <Link to="/forgot-password" className=" cursor-pointer text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out ">Forgot password?</Link>
              </p>
            </div>
            
            <button type="submit" className=" w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-900 ">
            Sign up
            </button>

            <div className="flex my-4 items-center before:border-t before:flex-1 before:border-gray-300 
            after:border-t after:flex-1 after:border-gray-300">
              <p className=" text-center font-semibold mx-4 before: ">OR</p>
            </div >

            <OAuth />
          </form>
        </div>
      </div>
    </section>
  )
}
