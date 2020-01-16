import React from 'react'

const Display = (props) => {
    console.log(props)
return(
    <div>
    <p>Balls: {props.ball} </p>
    <p>Strikes: {props.strike}</p>
    </div>
)
}

export default Display