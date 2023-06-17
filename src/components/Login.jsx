import React from 'react'

const Login = () => {
  return (
    <div className='relative'>
      <div className='w-[400px] bg-slate-400 flex flex-col items-center gap-2 p-3 rrounded-lg'>
        <input className='w-[350px] bg-none'/>
        <input className='w-[350px]'/>
        <button className='w-[200px] bg-red-200'>Login</button>
        <p>New user!</p>
      </div>
    </div>
  )
}

export default Login