import React, {FC} from 'react'
import s from "./Footer.module.css";

interface CardsProps {
    img: string
}

const Cards: FC<CardsProps> = ({img}) => {
    return (
        <img className={s.card} src={img}/>
    )
}

export default React.memo(Cards)