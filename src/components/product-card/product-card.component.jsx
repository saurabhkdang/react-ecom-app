import { useDispatch, useSelector } from 'react-redux';
import { addItemsToCart } from '../../store/cart/cart.action';
import './product-card.styles.scss';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProductCard = ({product}) => {
    const {name, imageUrl, price} = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const addProductToCart = () => dispatch(addItemsToCart(cartItems, product));

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button type="button" buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to Cart</Button>
        </div>
    )
}

export default ProductCard;