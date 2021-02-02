import info1 from '../../../img/info/info1.jpg'
import info2 from '../../../img/info/info2.jpg'
import info3 from '../../../img/info/info3.jpg'
import info4 from '../../../img/info/info4.jpg'

let year = (new Date().getFullYear())


export let Info1 = {
    image: info1,
    alt: "Motorcycle Harley Davidson",
    way: "#",
    title: "The fuel royal rally 400",
    discount: "50% off"
}

export let Info2 = {
    image: info2,
    alt: "Motorcycle Harley Davidson",
    way: "#",
    title: "The year is" + ` ${(new Date().getFullYear())}. ` + "It's time to ride.",
    discount: "10% off"
}
export let Info3 = {
    image: info3,
    alt: "Motorcycle Harley Davidson",
    way: "#",
    title: "Stay in the saddle",
    discount: "25% off"
}

export let Info4 = {
    image: info4,
    alt: "Motorcycle Harley Davidson",
    way: "#",
    title: "Adventure never goes out of style.",
    discount: "30% off"
}
