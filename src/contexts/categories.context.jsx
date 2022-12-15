import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoryMap:[]
});

export const CategoriesProvider = ({children}) => {
    const [categoryMap, setCategoryMap] = useState([]);

    useEffect(()=>{
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoryMap(categoryMap);
        }
        getCategoriesMap();
    },[])

    const value = {categoryMap};
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}