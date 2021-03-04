import React from 'react';
import s from './Service.module.css'
import {ServiceData} from './ServiceData';
import ServiceItem from './ServiceItem';


function Service() {
    return (
        <section className={s.service}>
            <div className={s.container}>
                <div className={s.row}>
                    {ServiceData.map((el, index) =>
                        (<ServiceItem key={index}
                                      title={el.title}
                                      text={el.text}
                                      image={el.image}/>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

export default React.memo(Service)