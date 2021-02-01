import React from 'react';
import s from './Info.module.css'


type InfoDataType = {
    image: string,
    alt: string,
    way: string,
    title: string,
    discount: string
}[]

export function Info(props: { info: InfoDataType }) {
    return (
        <>
            {props.info.map((value) => {
                return (
                    <div className={s.info}>
                        <img className={s.img} src={value.image} alt={value.alt}/>
                        <a className={s.content} href={value.way}>
                            <span className={s.title}>{value.title}</span>
                            <span className={s.discount}><span>up to </span>{value.discount}</span>
                        </a>
                    </div>
                )
            })}
        </>
    );
}