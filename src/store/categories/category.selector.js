import { createSelector } from "reselect";

const selectCategoryReducer = (state) => {
    console.log('fired 1');
    return state.categories;
}

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categorySlice) => categorySlice.categories
    //console.log('fired 2');
    );
    
    export const selectCategoriesMap = createSelector(
        [selectCategories],
        (categories) => categories.reduce((acc, category)=>{
            console.log('fired 3');
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    },{})
);