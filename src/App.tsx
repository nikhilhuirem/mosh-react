import { useState } from "react"
import ExpenseForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList"
import Form from "./components/Form"
import ListGroups from "./components/ListGroups"
import FilterCategory from "./components/FilterCategory"
import categories from "./components/categories"


function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
    {id: 1, description: 'utilities', amount: 1000, category: 'utilities'},
    {id: 2, description: 'Grocery', amount: 200, category: 'Grocery'},
    {id: 3, description: 'Fuel', amount: 50, category: 'Fuel'},
    {id: 4, description: 'Fuel', amount: 50, category: 'Fuel'}
  ])
  const visibleExpenses = selectedCategory ? expenses.filter((e) => e.category === selectedCategory) : expenses;
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm onSubmit={expense => setExpenses([...expenses, { ...expense, id: expenses.length + 1}])} />
      </div>
      <div className="mb-3">
        <FilterCategory onSelectCategories={category => setSelectedCategory(category)} />
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id ))} />
    </div>
  )
}

export default App
