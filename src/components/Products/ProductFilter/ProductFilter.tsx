import React from 'react';
import s from './ProductFilter.module.css';


type FilterDataType = {
    link: string
    title: string
    id: string
} []

const filterData: FilterDataType = [
    {
        link: '#',
        title: 'Sale',
        id: '1'
    },
    {
        link: '#',
        title: 'Accessories',
        id: '2'
    },
    {
        link: '#',
        title: 'Motorbike',
        id: '3'
    },
    {
        link: '#',
        title: 'Helmet',
        id: '4'
    },
]

export function ProductFilter() {
    return (
        <>
            {filterData.map((value, index) => {
                return (
                    <a id={value.id}
                       href={value.link}
                       className={s.item}>
                        {value.title}
                    </a>
                )
            })}
        </>
    );
}


