import React from 'react';
import s from './TopPanelLink.module.css'

type ImagesType = { image: string, alt: string, way: string }[]


export function TopPanelLink(props: { images: ImagesType }) {
    return (
        <div className="App">
            {props.images.map((value) => {
                return (
                    <a href={value.way} className={s.link}>
                        <img src={value.image} alt={value.alt}/>
                    </a>
                )
            })}
        </div>
    );
}


