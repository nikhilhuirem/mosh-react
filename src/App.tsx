import { useEffect, useState } from "react"
import ExpenseForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList"
import Form from "./components/Form"
import ListGroups from "./components/ListGroups"
import FilterCategory from "./components/FilterCategory"
import categories from "./components/categories"
import ProductList from "./products/components/ProductList"
import axios, { CanceledError } from "axios"


interface User {
  id: number;
  name: string;
}

function App() {
  // const [selectedCategory, setSelectedCategory] = useState('');
  // const [expenses, setExpenses] = useState([
  //   {id: 1, description: 'utilities', amount: 1000, category: 'utilities'},
  //   {id: 2, description: 'Grocery', amount: 200, category: 'Grocery'},
  //   {id: 3, description: 'Fuel', amount: 50, category: 'Fuel'},
  //   {id: 4, description: 'Fuel', amount: 50, category: 'Fuel'}
  // ])
  // const visibleExpenses = selectedCategory ? expenses.filter((e) => e.category === selectedCategory) : expenses;

  // const [category, setCategory] = useState('');

  const [users ,setUsers] = useState<User []>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller  = new AbortController();
    setIsLoading(true)
    axios.get<User []>('https://jsonplaceholder.typicode.com/users').then(res => {
      setUsers(res.data) 
      setIsLoading(false) 
    } 
  ).catch(err =>{if (err instanceof CanceledError) return 
    setError(err.message)
    setIsLoading(false)
    })

    return () => {controller.abort()}
  }, [])
  return (
    <>
      { error && <p className="text-danger">{error}</p>}
      { isLoading && <div className="spinner-border"></div>}
      <ul>
        {users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
    
    // This are done in previous
    // <div>
    //   <div className="mb-5">
    //     <ExpenseForm onSubmit={expense => setExpenses([...expenses, { ...expense, id: expenses.length + 1}])} />
    //   </div>
    //   <div className="mb-3">
    //     <FilterCategory onSelectCategories={category => setSelectedCategory(category)} />
    //   </div>
    //   <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id ))} />
    // </div>

    // <div>
    //   <select className="form-select" onChange={(event) => setCategory(event.target.value)}>
    //     <option value=""></option>
    //     <option value="clothing">Clothing</option>
    //     <option value="electronics">Electronics</option>
    //   </select>
    //   <ProductList category={category} />
    // </div>
  )
}

export default App
