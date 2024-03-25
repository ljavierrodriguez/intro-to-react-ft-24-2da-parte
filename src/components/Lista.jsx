import React from 'react'


const Lista = (props) => {
    return (
        <ul className='list-group my-4' id={props.id}>
            {props.children}
        </ul>
    )
}

export default Lista