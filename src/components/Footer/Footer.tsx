import React from 'react'
import s from './Footer.module.css'
import {Title} from "./Title/Title";
import {CardsData, footerData, FooterLinks1, FooterLinks2} from "./FooterData";
import Social from "./Social";
import FooterLinks from "./FooterLinks";
import {logoWhite} from "../Header/HeaderData";
import Cards from './Cards';


export function Footer() {

    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.row}>
                    <div className={s.group}>
                        <Title title={"About Us"}/>
                        <div className={s.text}>
                            <p>The new hero pieces bring instant fashion credibility.
                                Bright florals clash with camouflage.</p>
                        </div>

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

                    <div className={s.column}>
                        <Title title={"Information"}/>
                        <ul className={s.footerList}>
                            {FooterLinks1.map((el, index) => {
                                return (
                                    <FooterLinks key={index}
                                                 link={el.link}
                                                 title={el.title}
                                    />
                                )
                            })}
                        </ul>
                    </div>

                    <div className={s.column}>
                        <Title title={"Returns"}/>
                        <ul className={s.footerList}>
                            {FooterLinks2.map((el, index) => {
                                return (
                                    <FooterLinks key={index}
                                                 link={el.link}
                                                 title={el.title}
                                    />
                                )
                            })}
                        </ul>
                    </div>

                    <div className={s.column}>
                        <div className={s.logo} style={logoWhite}>
                        </div>
                        <div className={s.text}>
                            <p className={s.adr}>
                                Street addresses: 445
                                Mount Eden Road, Mount
                                Postcodes: 5022
                            </p>
                        </div>
                        <div className={s.cards}>
                            {CardsData.map((el, index) => {
                                return (
                                    <Cards key={index} img={el.img}/>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
            <div className={s.line}></div>
        </footer>
    )
}