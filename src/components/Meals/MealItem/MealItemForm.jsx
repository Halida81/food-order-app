import { React, useRef } from 'react'
import { useState } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
	const amountInput = useRef()
	const [amountIsValid, setAmountIsValid] = useState(true)

	const submitHandler = (e) => {
		e.preventDefault()

		const enteredAmount = amountInput.current.value
		const enteredAmountNumber= +enteredAmount
		if(enteredAmount.trim().lenght === 0 || enteredAmountNumber < 1 || enteredAmountNumber >5){
			setAmountIsValid(false)
			return
		}
		props.onAddAmount(enteredAmountNumber)
	}
	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				ref={amountInput}
				label='Amount'
				input={{
					id: 'amount_' + props.id,
					type: 'number',
					min: '1',
					max: '5',
					step: '1',
					defaultValue: '1',
				}}
			/>
			<button>+ add</button>
			{!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
		</form>
	)
}

export default MealItemForm
