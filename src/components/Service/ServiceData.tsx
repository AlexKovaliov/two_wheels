import service1 from '../../img/icons/truck.svg'
import service2 from '../../img/icons/money.svg'
import service3 from '../../img/icons/support.svg'


export type ServiceDataType = {
    image: string
    title: string
    text: string
} []

export let ServiceData: ServiceDataType = [
    {
        image: service1,
        title: "Free Shipping Worldwide",
        text: "We know how sometimes it is difficult and time-consuming to organize delivery. " +
            "Therefore, we took care of all delivery issues."
    },

    {
        image: service2,
        title: "Money Back Guarantee",
        text: "To get a refund, you just need to call our support team."
    },
    {
        image: service3,
        title: "24/7 Help Center",
        text: "Our experts are always in touch and ready to help you with any questions."
    }]
