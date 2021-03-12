//social
import facebook from '../../img/socials/facebook.svg'
import instagram from '../../img/socials/instagram.svg'
import linkedin from '../../img/socials/linkedin.svg'
import twitter from '../../img/socials/twitter.svg'
//cards
import visa from '../../img/cards/visa.svg'
import master from '../../img/cards/mastercard-2.svg'
import ebay from '../../img/cards/ebay.svg'

export type FooterDataType = { img: string, link: string } []
export type FooterDataLinksType = { title: string, link: string } []

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

export let FooterLinks1: FooterDataLinksType = [
    {title: "Profile", link: "#"},
    {title: "About us", link: "#"},
    {title: "Contact", link: "#"},
    {title: "Address", link: "#"},
    {title: "Return Policy", link: "#"}
]

export let FooterLinks2: FooterDataLinksType = [
    {title: "FAQs", link: "#"},
    {title: "Size Guide", link: "#"},
    {title: "Contact us", link: "#"},
    {title: "Sell with Us", link: "#"},
    {title: "Sitemap", link: "#"}
]

export let CardsData = [
    {img: visa},
    {img: master},
    {img: ebay}
]