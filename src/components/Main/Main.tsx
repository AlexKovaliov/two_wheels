import React from 'react';
import s from './Main.module.css'
/*import {Info} from "./Info/Info";
import {InfoData} from './Info/InfoImgData';*/


export function Main() {
    return (
        <main>
            <section className={s.topInfo}>
                <div className={s.containerWide}>
                    <div className={s.row}>
                        {/*<Info info={InfoData}/>*/}
                    </div>
                </div>
            </section>
        </main>
    );
}