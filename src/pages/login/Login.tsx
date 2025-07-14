import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo.jpg"
import GLogo from "../../assets/G_logo.png"
import { api } from '../../api'
import { useStore } from '../../zustand/store'
import { useNavigate } from 'react-router-dom'
import { savedToken } from '../../zustand/store'

const Login = () => {
  const [username, setUsername] = useState<string | [] | undefined>([])
  const [password, setPassword] = useState<string | [] | undefined>([])
  const [error, setError] = useState<boolean>(false)
  const { saveToken } = useStore()
  const nav = useNavigate()

  useEffect(()=>{  
    if(savedToken){
      nav("/")
    }
  },[savedToken])



  // SUBMISSION
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const userInfo = {
      username,
      password
    }
    api.post("/auth/login", userInfo)
      .then((res) => {
        saveToken(res.data.accessToken)
        if (res.data.accessToken) {
          nav("/")
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true)
      })
  }

  return (
    <div className='h-screen bg-[#f9f9f9]'>
      <div className='h-full flex items-center justify-center flex-col gap-4'>
        <form onSubmit={handleSubmit} action="" className='h-auto w-[400px] flex justify-center flex-col gap-6 px-4 mx-auto'>

          <p className='text-center font-bold text-[30px]'>
            <img className='w-[200px] mx-auto' src={logo} alt=""></img>Welcome to Website</p>
          <p className='text-center font-thin leading-[120%]'>Create your account and discover world-class design talent.</p>

          <button type='button' className='w-full h-[46px] border border-[#ccc] rounded-[22px] flex items-center px-4 cursor-pointer'><img src={GLogo} className='w-[20px]' alt="" /><span className='flex-1/2 font-semibold text-[#444]'>Continue with Google</span></button>
          <p className='text-center text-[14px] text-[#666]'>or</p>

          {/* ASDSADASDSASDASDDSDSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS */}
          <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter your username' className='border w-full indent-4 text-[14px] h-[46px] rounded-[8px] border-[#ccc] focus:outline-[#bbb]' />
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' className='border w-full indent-4 text-[14px] h-[46px] rounded-[8px] border-[#ccc] focus:outline-[#bbb]' />
          <button className='w-full rounded-[22px] bg-black text-white hover:opacity-90 h-[46px] cursor-pointer font-semibold'>Continue</button>
        </form>
        <div className='h-[30px]'>
          {
            error &&
            <p className='text-red-700 text-center'>Username or Password is incorrect</p>
          }
        </div>

      </div>
    </div>
  )
}

export default React.memo(Login)