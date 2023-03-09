import PropTypes from 'prop-types'

const ContentSection = ({ paragraph }) => {
  return (
    <div className='pixelText'>
      <p>{paragraph}</p>
    </div>
  )
}

ContentSection.propTypes = {
  paragraph: PropTypes.string.isRequired
}

export default ContentSection