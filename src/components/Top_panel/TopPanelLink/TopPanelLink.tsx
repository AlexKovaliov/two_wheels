import React from 'react';
import s from './TopPanelLink.module.css'

type ImagesType = { image: string, alt: string }[]


export function TopPanelLink(props: { images: ImagesType }) {
    return (
        <div className="App">
            <a href="#" className={s.link}>
                {props.images.map((value) => {
                    /*<img src={value.image} alt={value.alt}/>*/
                    <div className={s.img}>{value.image}</div>
                })}
            </a>
        </div>
    );
}


