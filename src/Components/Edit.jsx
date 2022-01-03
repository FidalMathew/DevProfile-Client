import React from 'react'
import User from './User'
import "./edit.css"
export default function Edit() {
    return (
        <>
            <div className='EditPage'>

                <div className='bg-white text-dark rounded AdminEdit_Section'>


                    <div className='edit_section'>
                        <h3 className='text-center mb-5'>Admin Layout</h3>
                        <div class="input-group flex-nowrap api_input mb-3">
                            <span class="input-group-text" id="addon-wrapping">@</span>
                            <input type="text" class="form-control" placeholder="Github Username"
                                aria-label="Username" aria-describedby="addon-wrapping" />
                            <button className='ml-3 btn btn-primary'>Add</button>
                        </div>
                        <div class="input-group flex-nowrap api_input mb-3">
                            <span class="input-group-text" id="addon-wrapping">@</span>
                            <input type="text" class="form-control" placeholder="DEV.to Username"
                                aria-label="Username" aria-describedby="addon-wrapping" />
                            <button className='ml-3 btn btn-primary'>Add</button>
                        </div>
                        <h4>Add Links</h4>
                        <form action="">
                            <div class="input-group flex-nowrap api_input mb-3">

                                <input type="text" class="form-control" placeholder="Text"
                                    aria-label="Username" aria-describedby="addon-wrapping" />

                                <input type="text" class="form-control" placeholder="Link"
                                    aria-label="Username" aria-describedby="addon-wrapping" />
                                <button className='ml-3 btn btn-primary'>Add</button>
                            </div>

                        </form>
                        {/* </BackLink> */}
                    </div>

                    <div className='display_section p-4'>
                        <User />
                    </div>
                </div>

            </div>
        </>
    )
}
