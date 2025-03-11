import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App</h1>
//     </div>
//   )
// }

// object
// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank'
//   },
//   Children: 'Click me to visit Google.com'
// }
// const anotherElement = (
//   <a href='https://www.google.com' target='_blank'>Google.com</a>
// )

// // another React 
// const anotherUser = "Raj"
// const reactElement = React.createElement(
//   'a',
//   {href:'https://www.facebook.com/',target:'_blank'},
//   'Facebook.com',
//    raj
// )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
  // anotherElement
  // reactElement
)
