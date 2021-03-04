import React from 'react'
import s from './Footer.module.css'
import {Title} from "./Title/Title";
import {FooterDataType} from "./FooterData";


export function Footer(props: { social: FooterDataType }) {

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
                                {props.social.map((value) => {
                                    return (
                                        <div className={s.item}>
                                            <a href={value.link} target="_blank">
                                                <img className={s.svg} src={value.img}/>
                                            </a>
                                        </div>
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