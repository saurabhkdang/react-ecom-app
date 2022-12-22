import {Routes, Route} from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.components';
import Category from '../category/category.component';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/category.action';

import './shop.styles.scss';

const Shop = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments('categories');
            dispatch(setCategories(categoriesArray));
        }
        getCategoriesMap();
    },[])

    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}></Route>
            <Route path=":category" element={<Category/>}></Route>
        </Routes>
    );
}

export default Shop;