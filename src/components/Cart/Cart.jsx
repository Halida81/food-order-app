import { React, useContext } from 'react'
import CartContext from '../../store/cart-context'
import Modalka from '../UI/Modal'
import classes from './Cart.module.css'


function isValidArr(arr, id){
	for(let i=0;i<arr.length;i++){
		if(arr[i] == id){
			return false;
		}
	}
	return true;
}


const Cart = (props) => {
	const CartCtx = useContext(CartContext)
	const arr = [];
	
	const cartItemName = CartCtx.items.map((item) => {
		if(isValidArr(arr, item.id)){
			arr.push(item.id)
			return <li key={item.id}>{item.name}</li>
		}
	})

	
	const priceOfCartItems = CartCtx.items.reduce((currPrice, item) => {
		console.log(currPrice)
		console.log(item)
		return currPrice + item.price
	}, 0)

	return (
		<Modalka onCloseCart={props.onCloseCart}>
			{console.log(CartCtx)}
			{cartItemName}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{priceOfCartItems}</span>
			</div>
			<div className={classes.actions}>
				<button
					className={classes['buttono--ilt']}
					onClick={props.onCloseCart}
				>
					Close
				</button>
				<button className={classes.button}>Open</button>
			</div>
		</Modalka>
	)
}

export default Cart
