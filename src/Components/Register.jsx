import React from 'react'
import "./Register.css"
import { Link } from "react-router-dom"
export default function Register() {
    return (
        <div className='Register'>
            <div className='bg-white text-dark rounded formdiv'>
                <h3 className='text-center mb-4'>Create Account </h3>
                <form>
                    <div className="mb-4">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Username' />

                    </div>

                    <div className="mb-4">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                    </div>
                    <div className="mb-4">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' />
                    </div>

                    <button type="submit" className="Register_btn mb-4">Sign Up</button>

                    <div className="mb-2 text-center">
                        Already have an account? <Link to="/login"><u>Sign-in</u></Link >
                    </div>
                </form>
            </div>
        </div>
    )
}
