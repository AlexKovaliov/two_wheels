import facebook from '../../img/socials/facebook.svg'
import instagram from '../../img/socials/instagram.svg'
import linkedin from '../../img/socials/linkedin.svg'
import twitter from '../../img/socials/twitter.svg'


export type FooterDataType = { img: string, link: string } []


export let footerData: FooterDataType = [
    {
        img: facebook,
        link: "https://www.facebook.com/",
    },
    {
        img: instagram,
        link: "https://www.instagram.com/",
    },
    {
        img: linkedin,
        link: "https://www.linkedin.com/",
    },
    {
        img: twitter,
        link: "https://twitter.com/",
    }
]

export let columnData = [
    {
        item1: "Profile",
        item2: "About us",
        item3: "Contact",
    },
]