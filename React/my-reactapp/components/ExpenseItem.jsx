import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

export default function ExpenseItem(props) {
  const [title,setTitle]=useState(props.expTitle)
  const btnhandler=()=>{
     if(title==="New Tv")
      {
        setTitle("Updated Expenses")
      }
    console.log("Button Clicked")
  }
  return (
    <div>
      <div className="expense-item">
        <ExpenseDate date={props.expDate}/>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <p className="expense-item__price">₹{props.expAmount}</p>
        </div>
        <button onClick={btnhandler}>Button</button>
      </div>
    </div>
  )
}
