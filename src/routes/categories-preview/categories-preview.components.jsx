//import { CategoriesContext } from "../../contexts/categories.context";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.components";
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {

    const categoryMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    return (
        <Fragment>
            {
            isLoading?<Spinner/>:
            Object.keys(categoryMap).map((title) => {
                const products = categoryMap[title];
                return (
                    <CategoryPreview key={title} title={title} products={products} />
                )
            })
            }
        </Fragment>
    )
}

export default CategoriesPreview;