import { Fragment } from 'react'
import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Header from './components/layout/Header'
import Meals from './components/Meals/Meals'
import CartProvider from './store/CartProvider'
function App() {
	const [carIstShow, setCartIsShow] = useState(false)
	const showCartHandler = () => {
		setCartIsShow(true)
	}
	const hideCartHandler = () => {
		setCartIsShow(false)
	}
	return (
		<CartProvider>
<Header onShowCart={showCartHandler}/>
			{carIstShow && <Cart onCloseCart={hideCartHandler} />}
			<main>
				<Meals />
			</main>
		
		</CartProvider>

			
	)
}

export default App
