import React from 'react';
import s from './BottomInfo.module.css'
import info5 from "../../img/info/info5.jpg";
import info6 from "../../img/info/info6.jpg";


export function BottomInfo() {

    const Info5Img = {
        backgroundImage: `url(${info5})`
    }

    const Info6Img = {
        backgroundImage: `url(${info6})`
    }

    return (
        <section className={s.bottomInfo}>
            <div className={s.container}>
                <div className={s.row}>

                    <div className={s.medium}>
                        <img className={s.img} style={Info5Img}/>
                        <a className={s.content} href="#">
                            <span className={s.title}>for the purchase of any motorcycle for the customers of the our motorcycle school</span>
                            <span className={s.discount}><span>up to</span><br/>30%</span>
                        </a>
                    </div>

                    <div className={s.large}>
                        <img className={s.img} style={Info6Img}/>
                        <a className={s.content} href="#">
                            <span className={s.title}>Discounts for regular and wholesale customers from our motorcycle house.</span>
                            <span className={s.discount}><span>up to</span><br/>15-50%</span>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}