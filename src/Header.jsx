import React from 'react'

export default function Header(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.brief}</h3>
        </div>
    )
}
