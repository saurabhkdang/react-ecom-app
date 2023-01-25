import { createSelector } from "reselect";
import { CategoriesState } from "./category.reducer";
import { CategoryMap } from "./category.types";

const selectCategoryReducer = (state): CategoriesState => {
    console.log('fired 1');
    return state.categories;
}

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categorySlice) => categorySlice.categories    
);
    
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories): CategoryMap => categories.reduce((acc, category)=>{
        console.log('fired 3');
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    },{} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categorySlice) => categorySlice.isLoading
)