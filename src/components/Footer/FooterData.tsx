import facebook from '../../img/socials/facebook.svg'
import instagram from '../../img/socials/instagram.svg'
import linkedin from '../../img/socials/linkedin.svg'
import twitter from '../../img/socials/twitter.svg'


export type FooterDataType = { img: string, link: string, alt: string } []


export let footerData: FooterDataType = [
    {
        img: "facebook",
        link: "https://www.facebook.com/",
        alt: "facebook"
    },
    {
        img: "instagram",
        link: "https://www.instagram.com/",
        alt: "instagram"
    },
    {
        img: "linkedin",
        link: "https://www.linkedin.com/",
        alt: "linkedin"
    },
    {
        img: "twitter",
        link: "https://twitter.com/",
        alt: "twitter"
    }
]