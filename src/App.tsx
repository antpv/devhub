import React from 'react'
import './main.css'
import { Button, Offset } from './components'

const App: React.FunctionComponent = () => (
  <>
    <Button bordered rounded>
      With border
    </Button>
    <Button>
      Заказать
    </Button>
    <Offset top="xl">
      <p>
        Обратите внимание на повторения в CSS. Коричневый фон установлен в нескольких местах.<br />
        Для некоторых CSS объявлений можно указать этот цвет выше в каскаде и наследование CSS решит эту проблему.<br />
        Но для нетривиальных проектов это не всегда возможно.
      </p>
    </Offset>
  </>
)

export default App
