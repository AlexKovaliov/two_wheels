import React from 'react';
import s from './TopPanel.module.css'
import {TopPanelLink} from "./TopPanelLink/TopPanelLink";
import {LinkData} from "./TopPanelLink/LinkData";

export function TopPanel() {
    return (
        <div className={s.topPanel}>
            <div className={s.container}>
                <div className={s.row}>
                    <div className={s.notification}>
                        Free Delivery:Take advantage of our time to save event.
                    </div>
                    <div className={s.icons}>
                        <TopPanelLink images={LinkData}/>
                    </div>
                </div>
            </div>
        </div>
    );
}