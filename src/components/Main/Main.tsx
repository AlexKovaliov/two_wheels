import React from 'react';
import s from './Main.module.css'
import {Info} from "./Info/Info";
import info1 from "../../img/info/info1.jpg";
import info2 from "../../img/info/info2.jpg";
import info3 from "../../img/info/info3.jpg";
import info4 from "../../img/info/info4.jpg";


export function Main() {

    const imgInfo1 = {
        backgroundImage: `url(${info1})`
    }

    const imgInfo2 = {
        backgroundImage: `url(${info2})`
    }

    const imgInfo3 = {
        backgroundImage: `url(${info3})`
    }

    const imgInfo4 = {
        backgroundImage: `url(${info4})`
    }
    return (
        <main>
            <section className={s.topInfo}>
                <div className={s.containerWide}>
                    <div className={s.row}>
                        <div className={`${s.info} ${s.wide}`}>
                            <Info
                                img={imgInfo1}
                                way={"#"}
                                title={"The fuel royal rally 400"}
                                discount={"50% off"}
                            />
                        </div>
                        <div className={s.info}>
                            <Info
                                img={imgInfo2}
                                way={"#"}
                                title={"The year is" + ` ${(new Date().getFullYear())}. ` + "It's time to ride."}
                                discount={"10% off"}
                            />
                        </div>
                    </div>
                    <div className={s.row}>
                        <div className={s.info}>
                            <Info
                                img={imgInfo3}
                                way={"#"}
                                title={"Stay in the saddle"}
                                discount={"25% off"}
                            />
                        </div>
                        <div className={`${s.info} ${s.wide}`}>
                            <Info
                                img={imgInfo4}
                                way={"#"}
                                title={"Adventure never goes out of style."}
                                discount={"30% off"}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}