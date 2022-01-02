import React from 'react'

export default function Droprepo(props) {
    return (
        <div className='Dropdown text-center'>
            <a href={props.link} target="_blank">  {props.title}</a>
        </div>
    )
}
