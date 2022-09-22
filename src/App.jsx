import React from 'react'
import { Transactions, Welcome} from './components'
const App = () => {
  return (
    <div className='flex h-screen bg-zinc-900 overflow-y-hidden'>
      <Welcome />
      <Transactions />
    </div>
  )
}

export default App