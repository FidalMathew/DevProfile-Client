import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import Dropdown from './Dropdown';
import { Context } from '../Context/Context';
import "./User.css"

export default function User() {

    const { user } = useContext(Context);

    let dev = user.d_user;
    let github = user.g_user;

    const [Article, setArticle] = useState([]);
    const [Repo, setRepo] = useState([]);
    const [blog, setblog] = useState(false);
    const [seeRepo, setseeRepo] = useState(false);


    const DisplayBlog = () => {
        if (blog)
            setblog(false);
        else
            setblog(true);
    }

    const DisplayRepo = () => {
        if (seeRepo)
            setseeRepo(false);
        else
            setseeRepo(true);
    }
    useEffect(() => {

        if (dev) {
            // console.log(user.d_user);
            const getDev = async () => {
                try {
                    const res = await axios.get(`https://dev.to/api/articles?username=${dev}`);
                    setArticle(res.data);
                } catch (error) {
                    console.log(error);
                }
            }
            getDev();
        }


        if (github) {

            const getGithub = async () => {
                try {
                    const res = await axios.get(`https://api.github.com/users/${github}/repos`);
                    setRepo(res.data);

                    // visibility:public
                    // homepage: sitelin
                } catch (error) {
                    console.log(error);
                }
            }
            getGithub();

        }


    }, [dev, github])

    return (
        <div className='Usercontainer'>

            <div className='d-flex flex-column justify-content-center align-items-center pt-5'>

                <div> <img src="https://pbs.twimg.com/profile_images/1476756537519443970/NWjTlQi2_400x400.jpg" alt="" className='userimg' /> </div>

                <div className='pt-2'> <h5> {user.username} </h5></div>

                {/* Dev api  */}
                {dev && (<div className='LinkButton' onClick={DisplayBlog}>  Read my blogs </div>)}

                {blog && <div className='Blogs'>
                    {Article.map((val, ind) => {
                        return (<Dropdown title={val.title} key={val.id} link={val.url} />)

                    })}
                </div>}



                {/* Github Api */}
                {github && (<div className='LinkButton' onClick={DisplayRepo}>Checkout my Github Projects</div>)}

                {seeRepo && <div className='Blogs'>
                    {Repo.map((val, ind) => {


                        return (
                            <>  {(!val.fork && val.homepage) ? <Dropdown title={val.name} key={val.id} link={val.homepage} /> : ""}</>
                        )

                    })}
                </div>}

                <a className='LinkButton'  >  Follow me on Twitter </a>


            </div>
        </div>
    )
}
