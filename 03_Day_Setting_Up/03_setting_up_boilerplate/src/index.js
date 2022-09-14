// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import kevin from './image/kevin.png'
const userImg = (
  <div>
    <img src={kevin} alt='kevin' id='kevinImg' />
  </div>
)
const tech = ['html', 'css', 'Javascript', 'Git', 'ReactJS', 'Python', 'C++', 'Java', 'MySQL', 'Kotlin']
const TechList = tech.map((tech) => <li>{tech}</li>)
const main = (
  <div>
    {userImg}
    <h3>Kevin H</h3>
    <p>Student At CUNY Hunter College</p>
    <h4>SKILLS</h4>
    <ul>{TechList}</ul>
  </div>
)
const input = {
  'border-radius': '10px',
  'margin-left': '10px',
  'margin-right': '10px',
  'height': '30px',
}
const footer = (
  <div id='SubscribeField'>
    <h1>SUBSCRIBE</h1>
    <p>Sign up with your email address to receive news and updates</p>
    <input style={input} id="FirstName" placeholder=' FirstName'></input>
    <input style={input} id="LastName" placeholder=' LastName'></input>
    <input style={input} id="Email" placeholder=" Email"></input>
    <br></br>
    <button placeholder='Subscrible' id='Subscrible'>Subscrible</button>
  </div>
)
// JSX element, app
const app = (
  <div className='app'>
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)
