import React from 'react'
import s from './Footer.module.css'
import {Title} from "./Title/Title";
import {footerData} from "./FooterData";
import Social from "./Social";


export function Footer() {

    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.row}>
                    <div className={s.column}>
                        <div className={s.group}>
                            <Title title={"About Us"}/>
                            <div className={s.text}>
                                <p>The new hero pieces bring instant fashion credibility.
                                    Bright florals clash with camouflage.</p>
                            </div>
                        </div>
                        <div className={s.group}>
                            <Title title={"Follow Us"}/>
                            <div className={s.socials}>
                                {footerData.map((el, index) => {
                                    return (
                                        <Social key={index}
                                                img={el.img}
                                                link={el.link}/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}