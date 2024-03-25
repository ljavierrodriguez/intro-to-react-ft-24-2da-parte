import React from 'react'

const Heading = (props) => { // props = { className, id, texto, type }
    if (props.type === 'h1') return (
        <h1 className={props.className} id={props.id}>{props.texto}</h1>
    )
    if (props.type === 'h2') return (
        <h2 className={props.className} id={props.id}>{props.texto}</h2>
    )
    return props.type === 'h3' ? <h3 className={props.className} id={props.id}>{props.texto}</h3> :
        props.type === 'h4' ? <h4 className={props.className} id={props.id}>{props.texto}</h4> : 'El tipo de heading no es valido'

    
}

export default Heading