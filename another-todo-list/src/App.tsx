import { useState, useEffect } from 'react'
import './App.css'
import InputTarefa from './components/InputTarefa'
import ListaTarefa from './components/ListaTarefa'
import GithubProfile from './components/GithubProfile'

function App() {
  const [tasklist, setTasklist] = useState<string[]>([])
  const [input, setInput] = useState('')

  const handleAddTask = () => {
    setTasklist([...tasklist, input])
    setInput('')
  }

  useEffect(() => {
    document.title = `Lista de Tarefas ${tasklist.length}`
  }, [tasklist])

    return (
      <>
      <GithubProfile />
        <InputTarefa
          valorInput={input}
          onChangeInput={(e) => setInput(e.target.value)}
          onClickButton={handleAddTask}
        />
        <ListaTarefa
          tarefas={tasklist}
        />
      </>
    )
}

export default App
