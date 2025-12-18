import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactUs from './Components/ContactUs'
import Todo from './Components/Todo'
import ColorButton from './Components/ColorButton'
import StatusComponent from './Components/StatusComponent'

function App() {

  return (
    <>
      <ContactUs />
      <Todo />
      <ColorButton />

      <StatusComponent status="success" />
      <StatusComponent status="error" />
      <StatusComponent status="warning" />
    </>
  )
}

export default App
