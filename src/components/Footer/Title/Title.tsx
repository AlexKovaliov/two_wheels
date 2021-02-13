import React from 'react'


export function Title(props: { title: string }) {

    let TitleStyle = {
        margin: "0",
        marginBottom: "35px",
        fontSize: "25px",
        linHeight: "30px",
    }

    return (
        <>
            <h4 style={TitleStyle}>{props.title}</h4>
        </>
    )
}