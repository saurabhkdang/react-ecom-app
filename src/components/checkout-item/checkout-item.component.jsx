import { useDispatch, useSelector } from 'react-redux';
import './checkout-item.styles.scss'
import { clearCartItem, addItemsToCart, removeItemsFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

const CheckoutItem = ({cartItem}) => {
    const { id, name, price, imageUrl, quantity } = cartItem;
    const cartItems = useSelector(selectCartItems);

    const dispatch = useDispatch();

    const clearItemHandler = () => dispatch(clearCartItem(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemsToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemsFromCart(cartItems, cartItem));

    return (
        <div className='checkout-item-container' key={id}>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;