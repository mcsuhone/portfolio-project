import LoginForm from './components/LoginForm.js'
import { useState } from 'react'

function App() {
  const [codeValue, setCodeValue] = useState('')
  const [user, setUser] = useState(null)

  const submitForm = (event) => {
    event.preventDefault()
    console.log('trying code ...')
    if (codeValue === 'password') {
      setUser('lol')
      console.log('logged in')
    }
    setCodeValue('')
  }

  const logout = () => {
    setUser(null)
  }

  const handleCodeValueChanged = (event) => {
    setCodeValue(event.target.value)
  }

  if (user === null) {
    return (
      <div className='container'>
        <LoginForm
          onSubmitFunc={submitForm}
          formValue={codeValue}
          onValueChange={handleCodeValueChanged}
        />
      </div>
    )
  }
  else {
    return (
      <div >
        <button className='pixelText' onClick={logout}>log out</button>
        <h2 className='center pixelText'>Logged in</h2>
      </div>
    )
  }
}

export default App
