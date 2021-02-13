import React from 'react';
import s from './Gallery.module.css'
//image
import item1 from '../../img/gallery/gallary1.jpg'
import item2 from '../../img/gallery/gallary2.jpg'
import item3 from '../../img/gallery/gallary3.jpg'

let galleryData: { img: string, alt: string }[] = [
    {img: item1, alt: "harley davidson moto"},
    {img: item2, alt: "harley davidson man"},
    {img: item3, alt: "harley davidson front"}
]


export function Gallery() {
    return (
        <section className={s.gallery}>
            {galleryData.map((value) => {
                return (
                    <img className={s.item} src={value.img} alt={value.alt}/>
                )
            })}
        </section>
    );
}