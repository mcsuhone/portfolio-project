import './App.css'
import LoginForm from './components/LoginForm'
import ContentSection from './components/ContentSection'
import LinkIcon from './components/LinkIcon'
import NavigationElement from './components/NavigationElement'
import LinkedInLogo from './img/linkedinlogo682.png'
import GithubLogo from './img/githublogo420.png'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { login } from './services/loginService'

function App() {
  const [user, setUser] = useState(null)
  const [header, setHeader] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    setHeader('Hello, my name is Mikko')
    setContent('... and this is my portfolio')
  }, [])

  const submitForm = async (code) => {
    console.log('trying code ...')
    try {
      const user = await login({ username: 'kovakoodi', password: code })
      setUser(user)
    } catch(error) {
      console.log(error.response.data.error)
    }
  }

  const logout = () => {
    setUser(null)
  }

  const navigationSelect = (selected) => {
    if (selected === 'home') {
      setHeader('Hello, my name is Mikko')
      setContent('... and this is my portfolio')
    }
    else if (selected === 'summary') {
      setHeader('Summary')
      setContent('I am a masters student in Computer Science looking to become an experienced Full Stack developer. My current occupation is a part-time software developer at Polycon. As a passionate person, I am always looking for opportunities to learn something new. In general, I am interested in many kinds of technology, such as programming, speakers or acoustics.')
    }
  }

  // Use react router to make these different pages ...
  if (user === null) {
    return (
      <div className='container center'>
        <LoginForm
          onSubmitFunc={submitForm}
        />
      </div>
    )
  }
  else {
    return (
      <Container className='pixelText'>
        <Row className='topMargin'>
          <Col xs={2} className='sidebar'>
            <button className='generalbutton sidebarLeftElement pixelText' onClick={logout}>logout</button>

            <p><br></br></p>

            <LinkIcon link={'https://www.linkedin.com/in/mikko-suhonen72/'} icon={LinkedInLogo}/>
            <LinkIcon link={'https://github.com/mcsuhone'} icon={GithubLogo} />
          </Col>
          <Col className='centerLeft'>
            <h2>{header}</h2>
            <ContentSection paragraph={content} />
          </Col>
          <Col xs={2} className='sidebar'>
            <NavigationElement navigationClick={navigationSelect}>home</NavigationElement>
            <NavigationElement navigationClick={navigationSelect}>summary</NavigationElement>
            <NavigationElement navigationClick={navigationSelect}>experience</NavigationElement>
            <NavigationElement navigationClick={navigationSelect}>work experience</NavigationElement>
            <NavigationElement navigationClick={navigationSelect}>education</NavigationElement>
            <NavigationElement navigationClick={navigationSelect}>contact</NavigationElement>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
