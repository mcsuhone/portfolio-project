import LoginForm from './components/LoginForm.js'
import { useState } from 'react'

function App() {
  const [codeValue, setCodeValue] = useState('')

  const submitForm = (event) => {
    event.preventDefault()
    console.log('trying code ...')
    if (codeValue === 'password') {

    }
    setCodeValue('')
  }

  const handleCodeValueChanged = (event) => {
    setCodeValue(event.target.value)
  }

  return (
    <div className='center'>
      <LoginForm 
        onSubmitFunc={submitForm}
        formValue={codeValue}
        onValueChange={handleCodeValueChanged}
      />
    </div>
  );
}

export default App;
