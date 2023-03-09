const NavigationElement = (props) => {
  const navClick = () => {
    props.navigationClick(props.children)
  }

  return (
    <div >
      <button
        className='navbutton pixelText'
        onClick={navClick}>
        {props.children}
      </button>
    </div>
  )
}

export default NavigationElement