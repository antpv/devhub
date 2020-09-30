import React from 'react'
import './main.css'
import { Button } from './components'

const App: React.FunctionComponent = () => (
  <>
    <Button bordered rounded>
      With border
    </Button>
    <Button>
      Without border
    </Button>
  </>
)

export default App
