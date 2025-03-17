import React, { useState, useContext } from 'react';
import UserContext from '../Context/UserContext';

function Login() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setUser({ username, password });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input 
                    value={username}
                    onChange={(evt) => setUsername(evt.target.value)} 
                    type="text" 
                    placeholder="Username" 
                    required 
                />
                <br />
                <input 
                    value={password}
                    onChange={(evt) => setPassword(evt.target.value)} 
                    type="password" 
                    placeholder="Password" 
                    required 
                />
                <br />
                <br />
                <button onClick={handleSubmit} type="submit">Submit</button>

            </form>
        </div>
    );
}

export default Login;
