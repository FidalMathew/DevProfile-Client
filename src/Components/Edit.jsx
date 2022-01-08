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
            // setuserLinks(res.data.links);
            // let putText = res.data.links.text;
            // let putLink = res.data.links.link;
            // setuserLinks([...userLinks, { text: putText, link: putLink }])
            // console.log("back", res.data);
            // console.log(res.data); /// deletee later    

        } catch (error) {
            console.log(error);
        }

    }




    const HandleSubmit = (e) => {
        e.preventDefault();
        setuserLinks([...userLinks, { text: stext, link: slink }]);
        // console.log(userLinks);

        PostLink();
    }

    useEffect(() => {

        const PostLink = async () => {

            try {

                const res = await axios.put("/links/", {
                    username: user.username,
                    links: userLinks
                });
                // console.log(res.data.links);
                let ResArr = res.data.links;
                // console.log(ResArr);
                /// deletee later   
                // ResArr.map((val) => {
                // console.log(val.text);
                // setuserLinks([...userLinks, { text: val.text, link: val.link }])

                // })
                setuserLinks(ResArr);
                console.log(userLinks);
                // setuserLinks(res.data.links);
                // let putText = res.data.links.text;
                // let putLink = res.data.links.link;
                // setuserLinks([...userLinks, { text: putText, link: putLink }])

            } catch (error) {
                console.log(error);
            }

        }

        PostLink();


    }, []);


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
                            return (<div key={ind}>

                                <span>{val.text}</span>
                                <span>{val.link}</span>

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
