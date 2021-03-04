import React, {FC} from 'react'
import s from "./Footer.module.css";

interface SocialProps {
    link: string,
    img: string
}

const Social: FC<SocialProps> = ({link, img}) => {
    return (
        <div className={s.item}>
            <a href={link} target="_blank">
                <img className={s.svg} src={img}/>
            </a>
        </div>
    )
}

export default React.memo(Social)