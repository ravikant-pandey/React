import Hello from "./first"
function App() {
  const username = 'R....... Pandey'
//  retrun only single <></> fregmentation 
// {} evaluate expression->Final outcome (variable)
// inject
  return (
    <>
    <h2>React with Vite | {username} </h2>
    <Hello/>
    <p><i>Test Para.</i></p>
    </>
  )
}

export default App
