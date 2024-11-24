import { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('def')

    const handelFormSubmit = (event) => {
        event.preventDefault();
        console.log("username", username)
    }

    const handleInputChange = () => {
        setUsername(event.target.value)
    }

    return (
        <form onSubmit={handelFormSubmit}>
            <input onChange={handleInputChange} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default LoginForm