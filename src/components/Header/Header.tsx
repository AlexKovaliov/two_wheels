import React from 'react';
import s from './Header.module.css'


type headerDataType = { title: string, way: string } []


export function Header(props: { links: headerDataType }) {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.row}>
                    <div className={s.logo}>
                        <img src="" alt=""/>
                    </div>
                    <nav>
                        {props.links.map((value) => {
                            return (
                                <a href={value.way}>{value.title}</a>
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
