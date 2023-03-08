const LoginForm = ({onSubmitFunc, formValue, onValueChange}) => {
    return (
        <form onSubmit={onSubmitFunc}>
            <div className='pixelText'>
                enter code
            </div>
            <div>
                <input value={formValue} onChange={onValueChange}/>
            </div>
            <button className='pixelText' type="submit">
                login
            </button>
        </form>
    )
}

export default LoginForm;