import React from 'react'
import './main.css'
import { Button, Offset, Divider } from './components'

const App: React.FunctionComponent = () => (
  <>
    <Offset left="xxl" right="xxl" top="xl" block>
      <Offset right="s">
        <Button rounded>
          Опубликовать идею
        </Button>
      </Offset>

      <Button rounded bordered>
        Предпросмотр
      </Button>
    </Offset>
    <Divider />
  </>
)

export default App
