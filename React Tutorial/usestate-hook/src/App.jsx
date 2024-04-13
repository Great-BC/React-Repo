import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './MyComponent'
import Counter from './Counter'
// React Hook = Special function that allows functional components to use React feature without writing class components (As of React v16.8)
// Examples: useState, UseEffect, useContext, useReducer, useCallback, ...

// useState() = A React hook that allows the creation of a stateful variable And a setter function to update its value in the virtual DOM.
// [name setName]
function App() {

  return (
    <>
      <MyComponent></MyComponent>
      <Counter></Counter>
    </>
  )
}

export default App
