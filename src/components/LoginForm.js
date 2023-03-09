import PropTypes from 'prop-types'

const LoginForm = ({ onSubmitFunc, formValue, onValueChange }) => {
  return (
    <form onSubmit={onSubmitFunc}>
      <div className='pixelText'>
              enter code
      </div>
      <div>
        <input type='text' value={formValue} onChange={onValueChange}/>
      </div>
      <button className='pixelText' type="submit">
              login
      </button>
    </form>
  )
}

LoginForm.propTypes = {
  onSubmitFunc: PropTypes.func.isRequired,
  formValue: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired
}

export default LoginForm