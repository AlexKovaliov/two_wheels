import React from 'react'
import s from '../Basement/Basement.module.css'

export function Basement() {
    return (
        <div className={s.copyright}>
            <div className={s.container}>
                <div className={s.row}>
                    <ul className={s.links}>
                        <li className={s.item}>
                            <a className={s.link} href="#">Status</a>
                        </li>
                        <li className={s.item}>
                            <a className={s.link} href="#">Contact Us</a>
                        </li>
                    </ul>
                    <div className={s.text}>
                        Copyright 2021, Template
                    </div>
                </div>
            </div>
        </div>
    )
}