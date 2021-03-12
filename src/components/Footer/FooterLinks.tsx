import React, {FC} from 'react'
import s from './Footer.module.css'

interface LinksProps {
    link: string,
    title: string
}

const FooterLinks: FC<LinksProps> = ({link, title}) => {
    return (
        <li className={s.footerItems}>
            <a href={link}>{title}</a>
        </li>
    )
}

export default React.memo(FooterLinks)