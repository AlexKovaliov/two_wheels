import React from 'react';
import s from './Service.module.css'
import {ServiceDataType} from './ServiceData';


export function Service(props: { data: ServiceDataType }) {
    return (
        <section className={s.service}>
            <div className={s.container}>
                <div className={s.row}>
                    {props.data.map((value) => {
                        return (
                            <div className={s.serviceBlock}>
                                <img src={value.image}/>
                                <div className={s.description}>
                                    <h4 className={s.title}>{value.title}</h4>
                                    <div className={s.text}>{value.text}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}


