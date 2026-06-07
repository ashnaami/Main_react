import React, { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

function Register() {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      await axios.post(
        `https://main-django.onrender.com/api/register/`,
        {
          name,
          phone,
          email,
          password
        }
      )

      alert("Registration Successful 🎉")

      navigate("/login")

    }

    catch (error) {
      console.log(error)
      alert("Registration Failed")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')] bg-cover bg-center">

      <div className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-10 w-[420px]">

        <h1 className="text-4xl font-bold text-white text-center">
          Create Account
        </h1>

        <p className="text-center text-gray-200 mt-2">
          Start your blogging journey 
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/80 outline-none"
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/80 outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/80 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/80 outline-none"
          />

          <button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition"
          >
            Register
          </button>

        </form>

        <p className="text-center text-white mt-6">
          Already have an account?

          <Link
            to="/login"
            className="ml-2 text-orange-300 font-semibold"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  )
}

export default Register