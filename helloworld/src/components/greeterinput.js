import React from 'react'

const GreeterInput = (props) => {
    return (
        <input type="text" onChange={props.onChange} value={props.name} />
    )
}

export default GreeterInput;