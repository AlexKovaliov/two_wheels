import React from 'react';
import s from './TopPanelLink.module.css'

type TopPanelLinkImagesType = { image: string, alt: string, way: string }[]


export function TopPanelLink(props: { images: TopPanelLinkImagesType }) {
    return (
        <div className={s.icons}>
            {props.images.map((el, index) => {
                return (
                    <a key={index} href={el.way} className={s.link}>
                        <img src={el.image} alt={el.alt}/>
                    </a>
                )
            })}
        </div>
    );
}


