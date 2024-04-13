import List from "./List"

function App() {

  const fruits = [{id : 1, name : "apple", calories : 95},
                  {id : 2, name : "coconut", calories : 159}, 
                  {id : 3, name : "orange", calories : 45}, 
                  {id : 4, name : "banana", calories : 105}, 
                  {id : 5, name : "kiwi", calories : 37}];
  
  const vegetables = [{id : 6, name : "turnips", calories : 110},
                  {id : 7, name : "radish", calories : 15}, 
                  {id : 8, name : "lettuce", calories : 25}, 
                  {id : 9, name : "carrots", calories : 63}, 
                  {id : 10, name : "spinach", calories : 50}];
  return (
    <>
      {fruits.length > 0 ? <List items={fruits} category="Fruits"></List> : null}
      {/* Or 
      fruits.length > 0 &&  <List items={fruits} category="Fruits"></List>}*/}
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"></List> : null}
    </>
  )
}

export default App
