import React from 'react'
import s from './Form.module.css'
import subImg from "../../img/header-bg-3.jpg";

export function Form() {

    const subscribeImg = {
        backgroundImage: `url(${subImg})`
    }

    return (
        <section className={s.subscribeWrapper}>
            <div className={s.container}>
                <div className={s.subscribe}>
                    <img className={s.subscribeImg} style={subscribeImg}/>
                    <div className={s.overlay}>
                        <div className={s.title}>SAVE UP TO 75%</div>

                        <form className={s.subscribeForm}>
                            <input className={s.subscribeInput} type="text" placeholder="Your email address"/>
                            <input className={s.subscribeButton} type="submit" value="SUBMIT"/>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}