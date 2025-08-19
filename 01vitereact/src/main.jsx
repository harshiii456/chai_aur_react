import  React  from 'react'
import  ReactDOM  from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   childern: 'click me to go to google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>visit google</a>
)

const anotheruser = "Chai aur react"

const reactElement = React.createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },
    'click me to go to google',
    anotheruser
)


ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
