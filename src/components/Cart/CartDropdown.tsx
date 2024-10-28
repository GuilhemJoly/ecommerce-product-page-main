import Button from "../ui/Button";
import './CartDropDown.scss'

const CartDropdown = () => {
    return (
        <div className="cartDropDown">
            <h4>Cart</h4>
            <div className="cartItems">
                <div className="cartItemDescription">
                <img src="public/images/fall-limited-edition-sneakers/image-product-1-thumbnail.jpg" />
                    <span>Product name</span>
                    <div className="cartPriceSection">
                        <span>Price</span>
                        <span>Quantity</span>
                        <span>Total price</span>
                    </div>
                </div>
                <Button buttonName="Checkout" buttonClass="cartButton"/>
            </div>
        </div>
    )
}
export default CartDropdown;