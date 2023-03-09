const LinkIcon = ({ link, icon }) => {
  return (
    <div className='icon sidebarLeftElement'>
      <a href={link} target='_blank' rel='noreferrer'>
        <img
          src={icon}
          alt='logo192'
          width={50}
          height={50}
        />
      </a>
    </div>
  )
}

export default LinkIcon