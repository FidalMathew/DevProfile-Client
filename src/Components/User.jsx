import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./User.css"

export default function User() {

    let dev = true;
    const [article, setArticle] = useState([]);

    const DisplayBlog = () => {


    }
    useEffect(() => {

        if (dev) {

            const getDev = async () => {
                try {
                    const res = await axios.get('https://dev.to/api/articles?username=fidalmathew');
                    setArticle(res.data);
                } catch (error) {
                    console.log(error);
                }



            }

            getDev();
        }


    }, [])

    return (
        <div className='Usercontainer'>

            <div className='d-flex flex-column justify-content-center align-items-center pt-5'>

                <div> <img src="https://pbs.twimg.com/profile_images/1476756537519443970/NWjTlQi2_400x400.jpg" alt="" className='userimg' /> </div>

                <div className='pt-2'> <h5> Fidal Mathew </h5></div>

                {/* Github api  */}
                {dev && <div className='LinkButton' onClick={DisplayBlog}>  Read my blogs </div>}





                <a className='LinkButton'>  Follow me on Twitter </a>


            </div>
        </div>
    )
}
