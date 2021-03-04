import React, {FC} from 'react';
import s from "./Service.module.css";

interface ServiceItemProps {
    image: string
    title: string
    text: string
}

const ServiceItem: FC<ServiceItemProps> = ({image, title, text}) => {
    return (
        <div className={s.serviceBlock}>
            <img src={image}/>
            <div className={s.description}>
                <h4 className={s.title}>{title}</h4>
                <div className={s.text}>{text}</div>
            </div>
        </div>
    )
}

export default React.memo(ServiceItem)