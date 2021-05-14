import React from 'react'
import Header from './Header'
import Content from './Content'

export default function Articles(props) {
    return (
        <div>
            <Header title={props.title} brief={props.brief} />
            <Content >{props.children}</Content>
        </div>
    )
}
