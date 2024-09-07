import { useState } from 'react'
import SideBar from './Components/SideBar'
import RouterNav from './Components/RouterNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <RouterNav />
    </div>
  )
}

export default App
