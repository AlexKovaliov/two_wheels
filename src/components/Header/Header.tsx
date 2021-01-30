import React from 'react';
import s from './Header.module.css'
import harleyBg from '../../img/header-bg-1.jpg'
import logoHW from '../../img/logo.svg'


type headerDataType = { title: string, way: string } []


export function Header(props: { links: headerDataType }) {

    const backImg = {
        backgroundImage: `url(${harleyBg})`
    }

    const logo = {
        backgroundImage: `url(${logoHW})`
    }

    return (
        <header className={s.header} style={backImg}>
            <div className={s.container}>
                <div className={s.row}>
                    <div className={s.logo} style={logo}>
                    </div>
                    <nav className={s.nav}>
                        {props.links.map((value) => {
                            return (
                                <a className={s.navLink} href={value.way}>{value.title}</a>
                            )
                        })}
                    </nav>
                    <a className={s.button}>shopping now</a>
                </div>
                <div className={s.promo}>
                    <div className={s.title}>safe and cool motorcyclist</div>
                    <a href="#" className={s.promoButton}>discover now</a>
                </div>
            </div>
        </header>
    );
}
