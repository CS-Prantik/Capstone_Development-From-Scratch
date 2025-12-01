import './App.css'
import ExpenseItem from '../components/ExpenseItem'
import State from '../components/State'
import Form from '../components/Form'
import BootstrapForm from '../components/BootstrapForm'
import Forms2 from '../components/Forms2'
import Forms3 from '../components/Forms3'
function App() 
{
const expenses=[
           {
            title:"Groceries",
            amount:900,
            date:new Date(2020,7,14)
           },
           {
            title:"New Tv",
            amount:"34000",
            date:new Date(2020,2,12)
           },
           {
            title:"Sofaset",
            amount:25000,
            date:new Date(2021,2,28)
           }
]
  return (
    <>
       <div className='App'>
        <ExpenseItem expDate={expenses[0].date} expTitle={expenses[0].title}  expAmount={expenses[0].amount}/>
        <ExpenseItem expDate={expenses[1].date} expTitle={expenses[1].title} expAmount={expenses[1].amount}/>
        <ExpenseItem expDate={expenses[2].date} expTitle={expenses[2].title} expAmount={expenses[2].amount}/>
        <State/>
        <Form/>
        <BootstrapForm/>
        <Forms2/>
        <Forms3/>
        </div>
    </>
  )
}

export default App
