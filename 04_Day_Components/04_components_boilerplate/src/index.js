// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import kevinImage from './images/kevin.png'
import './index.css'

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => {
  const bgColor = hexaColor()
  const styles = {
    height: '100px',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    fontFamily: 'Montserrat',
    margin: '2px auto',
    borderRadius: '5px',
    width: '75%',
    border: '2px solid black',
    'background-color': bgColor,
  }
  return (
    <div style={styles}>
      <h2>{bgColor}</h2>
    </div>
  )
}


// User Card Component
const UserCard = () => (
  <div className='user-card'>
    <img src={kevinImage} alt='kevin' />
    <h2>kevin h</h2>
  </div>
)

// TechList Component
const TechList = () => {
  const techs = ['html', 'css', 'Javascript', 'Git', 'ReactJS', 'Python', 'C++', 'Java', 'MySQL', 'Kotlin']
  const techsFormatted = techs.map((tech) => <button style={buttonStyles} key={tech} id={tech}>{tech}</button>)
  return techsFormatted
}
const buttonStyles = {
  padding: '10px 20px',
  background: hexaColor(),
  border: 'none',
  borderRadius: 5,
  margin: '0 5px',
}
const input = {
  'border-radius': '10px',
  'margin-left': '10px',
  'margin-right': '10px',
  'height': '30px',
}
// Main Component
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <UserCard />
      <ul>
        <TechList />
      </ul>
      <div>
        {/* Generate two different hexa colors every time */}
        <HexaColor />
        <HexaColor />
        {/* <Button /> */}
      </div>
      <div id='SubscribeField'>
        <h1>SUBSCRIBE</h1>
        <p>Sign up with your email address to receive news and updates</p>
        <input style={input} id="FirstName" placeholder=' FirstName' />
        <input style={input} id="LastName" placeholder=' LastName' />
        <input style={input} id="Email" placeholder=" Email" />
        <br></br>
        <button placeholder='Subscrible' id='Subscrible'>Subscrible</button>
      </div>
    </div>
  </main>
)

// Footer Component
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2020</p>
    </div>
  </footer>
)

// The App, or the parent or the container component
const App = () => (
  <div className='app'>
    <Main />
    <Footer />
  </div>
)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)
