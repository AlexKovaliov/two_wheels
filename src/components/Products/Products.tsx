import React from 'react';
import {ProductFilter} from './ProductFilter/ProductFilter';
import s from './Products.module.css'


export function Products() {
    return (
        <div className={s.products}>
            <div className={s.container}>
                <div className={s.title}>
                    Our Product
                </div>
                <div className={s.filter}>
                    <ProductFilter/>
                </div>
            </div>
        </div>
    );
}