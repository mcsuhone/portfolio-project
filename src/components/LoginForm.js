import { useState } from 'react'
import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'

const LoginForm = ({ onSubmitFunc }) => {
  const [codeValue, setCodeValue] = useState('')

  const handleCodeValueChanged = (event) => {
    setCodeValue(event.target.value)
  }

  const formSubmit = (event) => {
    event.preventDefault()
    setCodeValue('')
    onSubmitFunc(codeValue)
  }

  return (
    <Form className='pixelText' onSubmit={formSubmit}>
      <div>
        enter code
      </div>
      <div>
        <input type='text' value={codeValue} onChange={handleCodeValueChanged}/>
      </div>
      <button className='generalbutton pixelText' type="submit">
        login
      </button>
    </Form>
  )
}

LoginForm.propTypes = {
  onSubmitFunc: PropTypes.func.isRequired
}

export default LoginForm