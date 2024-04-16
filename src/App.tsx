import ListGroups from "./components/ListGroups"

function App() {
  const items = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
];
  const handleClick = (item: string) => {
    console.log(item);
  
  }
  return (
    <div>
      <ListGroups items={items} heading="Cities" selectedItem={handleClick} />
    </div>
  )
}

export default App
