import React from 'react';
import s from './BottomInfo.module.css'
import info5 from "../../img/info/info5.jpg";


export function BottomInfo() {

    const Info5Img = {
        backgroundImage: `url(${info5})`
    }

    return (
        <section className={s.bottomInfo}>
            <div className={s.container}>
                <div className={s.row}>

                    <div className={s.medium}>
                        <img className={s.img} style={Info5Img} alt="Motorcycle Harley Davidson"/>
                        <a className={s.content} href="#">
                            <span className={s.title}>for the purchase of any motorcycle for the customers of the MotoHarley motorcycle school</span>
                            <span className={s.discount}><span>up to</span>30%</span>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}