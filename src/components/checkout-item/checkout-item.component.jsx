import { useContext } from 'react';
import './checkout-item.styles.scss'
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({cartItem}) => {
    const { id, name, price, imageUrl, quantity } = cartItem;

    const { clearCartItem, addItemsToCart, removeItemsFromCart } = useContext(CartContext);

    const clearItemHandler = () => clearCartItem(cartItem);
    const addItemHandler = () => addItemsToCart(cartItem);
    const removeItemHandler = () => removeItemsFromCart(cartItem);

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
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;