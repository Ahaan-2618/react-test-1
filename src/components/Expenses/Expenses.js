import React from 'react'
import ExpenseItem from "./ExpenseItem";
import mockData from "../../MockData/ExpenseItemData"
import "./Expenses.css"
import Card from '../UI/Card';

const Expenses = () => {
  return (
    <Card className='expenses'>
    {mockData.map(data => (
        <ExpenseItem title={data.title} amount={data.amount} date={data.date}/>))}
    </Card>
  )
}

export default Expenses;