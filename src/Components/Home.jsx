import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Context } from '../Context/Context';

export default function Home() {
    const { user } = useContext(Context);
    const [alluser, setalluser] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get("/auth/")
            console.log(res.data);
            setalluser(res.data);
        }
        fetchUsers();
        console.log(user);
    }, [])


    return (
        <div className='container text-center'>

            <h2>Welcome to Home Page</h2>
            <div>Login</div>
            <div>Register</div>
            {
                alluser.map((val) => {
                    return (<div key={val._id}>{val.username}</div>)
                })
            }
        </div>
    )
}
