import React, { useState } from 'react'
import Login from './Login';
import { useNavigate } from 'react-router-dom';




const Signup = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, SetError] = useState();
    const Navigate = useNavigate();
    
    
    
    const handleSubmit = async (e) => {
        e.preventDefault('')
        try {
            await Login(email,password)
            Navigate('/')
        } catch (error) {
            console.log(error)
            SetError('error.message')
        }
    };
    

  return (
    <>
    <div  className='text-white relative flex items-center '>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="MovieVerse Logo"/>

        <div className='flex flex-col p-4 absolute bg-black left-96 text-center'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={
                    (e) => {
                        setEmail(e.target.value)
                    }

                }
                
                type="email" placeholder="Email" />
                <input onChange={
                    (e) => {
                        setPassword(e.target.value)
                    }
                    
                } 
                type="password" placeholder="Password" />
                <button type="submit" className='bg-slate-500'>Sign Up</button>

            </form>
            <div className='flex flex-row gap-4'>
                <p>
                <input type="checkbox"/>
                remember me</p>
                <p>need help?</p>
            </div>
            <div className='flex flex-row gap-4'>
            <p >already have an account?</p>
            <p>sign in</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup