import { useState, useEffect, Fragment } from 'react';
import {useParams} from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { useSelector } from 'react-redux';

import './category.styles.scss';

const Category = () => {
    const { category } = useParams();
    const categoryMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoryMap[category]);
    useEffect(()=>{
        setProducts(categoryMap[category]);
    },[category, categoryMap]);

    return (
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {products && products.map((product) => <ProductCard key={product.id} product={product}/>)}
            </div>
        </Fragment>
    )
}

export default Category;