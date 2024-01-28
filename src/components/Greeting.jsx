import React, { useState } from 'react'

const Greeting = ({ messages }) => {
    console.log(messages)
    const [greeting, setGreeting] = useState(messages[0])
    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

    return (
        <div>
            <h3>{greeting} Thankyou for visiting!</h3>
            <button
                onClick={() => setGreeting(randomMessage())}
            >
                Neww Greeting
            </button>
        </div>
    )
}

export default Greeting