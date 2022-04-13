import React, { useState } from 'react'
import "./ExpenseItem.css"
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = (props) => {

  // function clicked(){}

  const [title, setTitle] = useState(props.title)
  // console.log("Evaluated")

  const clickHandler = () => {
    setTitle("Updated !")
  }
  
//data we receive isprops => props.date

  return (
    <Card className='expense-item'>
    <ExpenseDate date={props.date}/>
      <div className='expense-item__description' >
      <h2>{title}</h2>
      <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click me !</button>
    </Card>
  )
}

export default ExpenseItem;