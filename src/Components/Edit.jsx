import React, { useEffect, useState, useContext } from 'react'
import User from './User'
import "./edit.css"
import { Context } from '../Context/Context';
import axios from 'axios';
export default function Edit() {

    const { user } = useContext(Context);

    const [userLinks, setuserLinks] = useState([]);

    const [stext, setText] = useState("")
    const [slink, setLink] = useState("")

    const PostLink = async () => {

        try {

            console.log("reactarr", userLinks);

            const res = await axios.put("/links/", {
                username: user.username,
                links: userLinks
            });

            console.log(res.data);

        } catch (error) {
            console.log(error);
        }

    }




    const HandleSubmit = (e) => {
        e.preventDefault();
        setuserLinks([...userLinks, { text: stext, link: slink }]);
        console.log(userLinks);

        PostLink();
    }

    useEffect(() => {

        const PostLink = async () => {

            try {

                const res = await axios.put("/links/", {
                    username: user.username,
                    links: userLinks
                });

                let ResArr = res.data.links;

                setuserLinks(ResArr);


            } catch (error) {
                console.log(error);
            }

        }

        PostLink();


    }, [user.username, userLinks]);


    return (
        <div className='EditPage'>
            <div className='bg-white text-dark rounded AdminEdit_Section'>
                <div className='edit_section'>

                    <h4>Add Links</h4>
                    <form onSubmit={HandleSubmit}>
                        <div className="input-group flex-nowrap api_input mb-3">

                            <input type="text" className="form-control" placeholder="Text"
                                aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => setText(e.target.value)} required />

                            <input type="text" className="form-control" placeholder="Link"
                                aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => setLink(e.target.value)} required />
                            <button className='ml-3 btn btn-primary' type='submit'>Add</button>
                        </div>

                    </form>
                    {/* </BackLink> */}

                    <div className='AllLinks'>
                        {userLinks.map((val, ind) => {
                            return (<div key={ind} className='text_link mb-2 p-2'>

                                <div> {`text: ${val.text} `}</div>
                                <div>{`link: ${val.link}`}</div>

                            </div>)
                        })}

                    </div>
                </div>

                <div className='display_section p-4'>
                    <User />
                </div>
            </div>
        </div>

    )
}
