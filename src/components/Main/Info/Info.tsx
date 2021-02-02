import React from 'react';
import s from './Info.module.css'


type InfoDataType = {
    img: { backgroundImage: string },
    way: string,
    title: string,
    discount: string
}


export function Info(props: InfoDataType) {

    return (
        <>
            <div className={s.img} style={props.img}/>
            <a className={s.content} href={props.way}>
                <span className={s.title}>{props.title}</span>
                <span className={s.discount}><span>up to </span>{props.discount}</span>
            </a>
        </>
    )
}