import { CategoriesContext } from "../../contexts/categories.context";
import { useContext, Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.components";

const CategoriesPreview = () => {

    const {categoryMap} = useContext(CategoriesContext);

    return (
        <Fragment>
            {Object.keys(categoryMap).map((title) => {
                const products = categoryMap[title];
                return (
                    <CategoryPreview key={title} title={title} products={products} />
                )
            })}
        </Fragment>
    )
}

export default CategoriesPreview;